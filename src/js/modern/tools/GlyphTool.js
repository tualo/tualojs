Ext.define('Tualo.GlyphTool', {
    extend: 'Ext.Component',
    alias: 'widget.glyphtool',
    ariaRole: 'button',

    config: {
      disabled: false,
      glyphPrefix: 'fa fa-',
      glyph: 'save',
      text: '',
      darkColor: false,
      newLineText: true
    },
    publishes: {
      darkColor: false,
      newLineText: true
    },
    viewModel: {
      type: 'default',
      data: {
        disabled: false,
        glyphPrefix: 'fa fa-',
        glyph: 'save',
        text: '',
        darkColor: false,
        newLineText: true
      },
      formulas: {
        colorClass: function(get){
          return (get('darkColor'))?'':'x-panel-header-title-default';
        },
        disabledStyle: function(get){
          return (get('disabled'))?'opacity:0.2':'opacity:0.8';
        },
        displayText: function(get){
          txt = get('text');
          if (txt == ''){
            return (get('newLineText')?'<br>':'');
          }else{
            return ((get('newLineText')==true)?' ':' ')+txt+'&nbsp;';
          }
        }
      }
    },
    //width: 60,
    bind: {
      html: '<i unselectable="unselectable" class="{colorClass} {glyphPrefix}{glyph}" style="font-size:1.2em;{disabledStyle};"></i>&nbsp;{displayText}'
    },
    setDisabled: function(disabled) {
      var me = this;
      var vm = me.getViewModel();
      return vm.set('disabled',disabled);
    },
    initialize: function() {
      var me = this;

      //console.log('initialize',me);
      var vm = this.getViewModel();
      vm.set('glyphPrefix',this.config.glyphPrefix);
      vm.set('glyph',this.config.glyph);
      vm.set('disabled',this.config.disabled);
      vm.set('text',this.config.text);
      vm.set('darkColor',this.config.darkColor);

      me.callParent();
      //me.html = '<i unselectable="unselectable" class="{disabledClass} {glyphPrefix}{glyph}></i>&nbsp;'
      //me.html = '<i unselectable="unselectable" class="'+me.glyphPrefix+me.glyph+'" style="font-size:1.5em;color:#fff"></i>&nbsp;';
    },
    // inherit docs
    afterRender: function() {
        var me = this,
            tip;

        me.callParent(arguments);

        me.el.on({
          click: me.onClick,
          mousedown: me.onMouseDown,
          mouseover: me.onMouseOver,
          mouseout: me.onMouseOut,
          scope: me
        });
        //this.el.setStyle('opacity',"0.5");
        //this.el.setStyle('font-size',"1.5em");
        tip = me.tooltip;
        if (tip) {
          me.setTooltip(tip);
        }
    },

    tipAttrs: {
        qtip: 'data-qtip'
    },

    setTooltip: function (tooltip, type) {
        var me = this,
            oldTip = me.tooltip,
            oldType = me.tooltipType,
            id = me.id,
            el = me.el,
            attr;

        if (oldTip && Ext.quickTipsActive && Ext.isObject(oldTip)) {
            Ext.tip.QuickTipManager.unregister(id);
        }

        me.tooltip = tooltip;
        if (type) {
            me.tooltipType = type;
        }

        if (tooltip) {
            if (Ext.quickTipsActive && Ext.isObject(tooltip)) {
                Ext.tip.QuickTipManager.register(Ext.apply({
                    target: id
                }, tooltip));
            } else if (el) {
                if (type && oldType && type !== oldType) {
                    attr = me.tipAttrs[oldType] || 'title';
                    el.dom.removeAttribute(attr);
                }

                attr = me.tipAttrs[type || oldType] || 'title';
                el.dom.setAttribute(attr, tooltip);
            }

            if (attr !== 'title' && me.ariaRole && me.ariaRole !== 'presentation') {
                if (el) {
                    el.dom.setAttribute('aria-label', tooltip);
                }
                else {
                    me.ariaRenderAttributes = me.ariaRenderAttributes || {};
                    me.ariaRenderAttributes['aria-label'] = tooltip;
                }
            }
        }
    },

    privates: {
        getFocusEl: function () {
            return this.el;
        },

        /**
         * Called when the tool element is clicked
         * @private
         * @param {Ext.event.Event} e
         * @param {HTMLElement} target The target element
         */
        onClick: function(e, target) {
            var me = this;
            var vm = me.getViewModel();
            if (vm.get('disabled')) {
                return false;
            }

            //remove the pressed + over class
            me.el.removeCls(me.toolPressedCls + ' ' + me.toolOverCls);

            if (me.stopEvent !== false) {
                e.stopEvent();
            }

            if (me.handler) {
                Ext.callback(me.handler, me.scope, [e, target, me.ownerCt, me], 0, me);
            } else if (me.callback) {
                Ext.callback(me.callback, me.scope, [me.toolOwner || me.ownerCt, me, e], 0, me);
            }

            /**
             * @event click
             * Fires when the tool is clicked
             * @param {Ext.panel.Tool} this
             * @param {Ext.event.Event} e The event object
             * @param {Ext.Component} owner The logical owner of the tool. In a typical
             * `Ext.panel.Panel`, this is set to the owning panel. This value comes from the
             * `toolOwner` config. ** Added in v5.0 **
             */
            me.fireEvent('click', me, e, me.toolOwner || me.ownerCt);

            return true;
        },

        /**
         * Called when the user presses their mouse button down on a tool
         * Adds the press class ({@link #toolPressedCls})
         * @private
         */
        onMouseDown: function() {
          var me = this;
          var vm = me.getViewModel();
          if (vm.get('disabled')) {
                return false;
            }

            this.el.addCls(this.toolPressedCls);
        },

        /**
         * Called when the user rolls over a tool
         * Adds the over class ({@link #toolOverCls})
         * @private
         */
        onMouseOver: function() {
          var me = this;
          var vm = me.getViewModel();
          if (vm.get('disabled')) {
              return false;
          }
          this.el.addCls(this.toolOverCls);
          //this.el.setStyle('opacity',"1");

        },

        /**
         * Called when the user rolls out from a tool.
         * Removes the over class ({@link #toolOverCls})
         * @private
         */
        onMouseOut: function() {
          var me = this;
          var vm = me.getViewModel();
          if (vm.get('disabled')) {
              return false;
          }
          this.el.removeCls(this.toolOverCls);
          //this.el.setStyle('opacity',"0.8");
        }
    }

});

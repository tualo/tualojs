delimiter ;

insert ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values (
        "Tualo",
        "Tualo.from.fields.TextDSFilter",
        "Tualo.from.fields.TextDSFilter",
        "widget.tualo_dsfilter_textfield",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update id =
values(id),
    xtype_long_classic =
values(xtype_long_classic),
    extendsxtype_classic =
values(extendsxtype_classic),
    name =
values(name),
    vendor =
values(vendor);
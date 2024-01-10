delimiter ;

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.BIC",
        "#name",
        "widget.bic",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Base64Image",
        "#name",
        "widget.base64imagedisplayfield",
        "Ext.form.field.Base",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Colors",
        "#name",
        "widget.colorcombo",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.CryptoField",
        "#name",
        "widget.tualocryptofield",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.CurrencyDisplayField",
        "#name",
        "widget.tualocurrencydisplayfield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.CurrentDateField",
        "#name",
        "widget.tualocurrentdatefield",
        "Ext.form.field.Date",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.CurrentTimeField",
        "#name",
        "widget.tualocurrenttimefield",
        "Ext.form.field.Time",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DSFields",
        "#name",
        "widget.tualodsfields",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DSTrigger",
        "#name",
        "widget.tualodstrigger",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DateDisplayField",
        "#name",
        "widget.tualodatedisplayfield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DateFormulaField",
        "#name",
        "widget.tualodateformula",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DatetimeDisplayField",
        "#name",
        "widget.tualodatetimedisplayfield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Document",
        "#name",
        "widget.dsdocumentfield",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DocumentAutoSave",
        "#name",
        "widget.dsdocumentfieldautosave",
        "Ext.tualo.form.field.Document",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DocumentX",
        "#name",
        "widget.dsdocumentfieldx",
        "Ext.form.FieldContainer",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DocumentDisplayField",
        "#name",
        "widget.dsdocumentdisplayfield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.FileSizeDisplayField",
        "#name",
        "widget.tualodisplayfilesizefield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.IBAN",
        "#name",
        "widget.iban",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.IPv4Field",
        "#name",
        "widget.tualoip4field",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.IMageDisplayField",
        "#name",
        "widget.imagedisplayfield",
        "Ext.form.field.Display",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.JSONFormel",
        "#name",
        "widget.tualojsonformel",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Kontenbezug",
        "#name",
        "widget.tualokontenbezug",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Lagerbewegung",
        "#name",
        "widget.tualolagerbewegung",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.LargeLabelCheckbox",
        "#name",
        "widget.largelabelcheckbox",
        "Ext.form.field.Checkbox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.LargeTextArea",
        "#name",
        "widget.tualolargetextarea",
        "Ext.form.field.TextArea",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.ListSelection",
        "#name",
        "widget.tualolistselection",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Logins",
        "#name",
        "widget.tualologins",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.MD5",
        "#name",
        "widget.undefined",
        "Ext.panel.Panel",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Number5",
        "#name",
        "widget.number5",
        "Ext.form.field.Number",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Number2",
        "#name",
        "widget.number2",
        "Ext.form.field.Number",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Number0",
        "#name",
        "widget.number0",
        "Ext.form.field.Number",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Password",
        "#name",
        "widget.tualopasswordfield",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.PhoneNumber",
        "#name",
        "widget.tualophonenumber",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.RPTLockField",
        "#name",
        "widget.tualorptlockfield",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.ReportAmountFieldWS",
        "#name",
        "widget.tualoreportamountfieldws",
        "Ext.form.field.Number",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.ReportPlaceHolder",
        "#name",
        "widget.tualoreportplaceholder",
        "Ext.form.FieldContainer",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.StoreField",
        "#name",
        "widget.tualostorefield",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.SummaryRenderer",
        "#name",
        "widget.tualosummaryrenderer",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.SummaryType",
        "#name",
        "widget.tualosummarytype",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.Text",
        "#name",
        "widget.tualotextfield",
        "Ext.form.field.Text",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.TextTemplates",
        "#name",
        "widget.tualotexttemplates_{alias}",
        "Ext.form.field.TextArea",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.TualoTimeField",
        "#name",
        "widget.tualotimefield",
        "Ext.form.field.Time",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.XCheckbox",
        "#name",
        "widget.xcheckbox",
        "Ext.form.field.Checkbox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Tualo.DataSets.combobox.farben.Rgb",
        "Tualo.DataSets.combobox.farben.Rgb",
        "widget.combobox_farben_rgb",
        "Tualo.cmp.cmp_ds.field.ComboBoxDS",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DSFields",
        "Ext.tualo.form.field.DSFields",
        "widget.tualodsfields",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);

insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.ListSelection",
        "Ext.tualo.form.field.ListSelection",
        "widget.tualolistselection",
        "Ext.form.field.ComboBox",
        "widget.textarea",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
(id),
    xtype_long_classic =
values
(xtype_long_classic),
    extendsxtype_classic =
values
(extendsxtype_classic),
    name =
values
(name),
    vendor =
values
(vendor);




insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Tualo.from.fields.DataFieldComboBox",
        "Tualo.from.fields.DataFieldComboBox",
        "widget.tualo_datafield_combobox",
        "Ext.form.field.ComboBox",
        "widget.textfield",
        "Ext.field.Text"
    ) on duplicate key
update
    id =
values
(id),
    xtype_long_classic =
values
(xtype_long_classic),
    extendsxtype_classic =
values
(extendsxtype_classic),
    name =
values
(name),
    vendor =
values
(vendor);



insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.PhoneNumber", "Ext.tualo.form.field.PhoneNumber", "widget.tualophonenumber", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.EmailAddress", "Ext.tualo.form.field.EmailAddress", "widget.tualomailaddress", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.DateDisplayField", "Ext.tualo.form.field.DateDisplayField", "widget.tualodatedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.FileText", "Ext.tualo.form.field.FileText", "widget.tualofiletext", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.Document", "Ext.tualo.form.field.Document", "widget.dsdocumentfield", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);

insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.DatetimeDisplayField", "Ext.tualo.form.field.DatetimeDisplayField", "widget.tualodatetimedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.DocumentAutoSave", "Ext.tualo.form.field.DocumentAutoSave", "widget.dsdocumentfieldautosave", "Ext.tualo.form.field.Document", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);




insert
    ignore into extjs_base_types (
        vendor,
        id,
        classname,

        xtype_long_classic,
        baseclass,
        xtype_long_modern,
        name,
        description,
        iscolumn,
        isformfield
    )
values
    (
        "Tualo",
        "Tualo.DataSets.DSFilesColumn",
        "Tualo.DataSets.DSFilesColumn",
        
        "widget.tualodsfilescolumn",
        "Ext.grid.column.Column",
        "widget.tualodsfilescolumn",

        "Tualo.DataSets.DSFilesColumn",
        "Tualo Column for DSFiles",
        1,
        0
    )
;


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.grid.column.FileSizeDisplayColumn", "Ext.tualo.grid.column.FileSizeDisplayColumn", "widget.tualodisplayfilesize", "Ext.grid.column.Column", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);



insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.ImageDisplayField", "Ext.tualo.form.field.ImageDisplayField", "widget.imagedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.Number0", "Ext.tualo.form.field.Number0", "widget.number0", "Ext.form.field.Number", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.Colors", "Ext.tualo.form.field.Colors", "widget.tualocolors", "Ext.form.field.ComboBox", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);




insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Tualo.form.field.ImageDisplay'",
        "Tualo.form.field.ImageDisplay'",
        "widget.tualoimagedisplay",
        "Ext.form.field.Display",
        "widget.tualoimagedisplay",
        "Ext.form.field.Display"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);




insert
    ignore into custom_types (
        vendor,
        name,
        id,
        xtype_long_classic,
        extendsxtype_classic,
        xtype_long_modern,
        extendsxtype_modern
    )
values
    (
        "Tualo",
        "Ext.tualo.form.field.DateDisplayField",
        "Ext.tualo.form.field.DateDisplayField",
        "widget.tualodatedisplayfield",
        "Ext.form.field.Display",
        "widget.displayfield",
        "Ext.form.field.Display"
    ) on duplicate key
update
    id =
values
    (id),
    xtype_long_classic =
values
    (xtype_long_classic),
    extendsxtype_classic =
values
    (extendsxtype_classic),
    name =
values
    (name),
    vendor =
values
    (vendor);


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.TimeDisplayField", "Ext.tualo.form.field.TimeDisplayField", "widget.tualotimedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
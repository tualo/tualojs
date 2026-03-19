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
        "Ext.tualo.form.field.BIC",
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
        "Ext.tualo.form.field.Base64Image",
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
        "Ext.tualo.form.field.Colors",
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
        "Ext.tualo.form.field.CryptoField",
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
        "Ext.tualo.form.field.CurrencyDisplayField",
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
        "Ext.tualo.form.field.CurrentDateField",
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
        "Ext.tualo.form.field.CurrentTimeField",
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
        "Ext.tualo.form.field.DSTrigger",
        "Ext.tualo.form.field.DSTrigger",
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
        "Ext.tualo.form.field.DateDisplayField",
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
        "Ext.tualo.form.field.DateFormulaField",
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
        "Ext.tualo.form.field.DatetimeDisplayField",
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
        "Ext.tualo.form.field.Document",
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
        "Ext.tualo.form.field.DocumentAutoSave",
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
        "Ext.tualo.form.field.DocumentX",
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
        "Ext.tualo.form.field.DocumentDisplayField",
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
        "Ext.tualo.form.field.FileSizeDisplayField",
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
        "Ext.tualo.form.field.IBAN",
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
        "Ext.tualo.form.field.IPv4Fiel",
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
        "Ext.tualo.form.field.IMageDisplayField",
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
        "Ext.tualo.form.field.JSONFormel",
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
        "Ext.tualo.form.field.Kontenbezug",
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
        "Ext.tualo.form.field.Lagerbewegung",
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
        "Ext.tualo.form.field.LargeLabelCheckbox",
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
        "Ext.tualo.form.field.LargeTextArea",
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
        "Ext.tualo.form.field.Logins",
        "Ext.tualo.form.field.Logins",
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
        "Ext.tualo.form.field.MD5",
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
        "Ext.tualo.form.field.Number5",
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
        "Ext.tualo.form.field.Number2",
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
        "Ext.tualo.form.field.Number0",
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
        "Ext.tualo.form.field.Password",
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
        "Ext.tualo.form.field.PhoneNumber",
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
        "Ext.tualo.form.field.RPTLockField",
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
        "Ext.tualo.form.field.ReportAmountFieldWS",
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
        "Ext.tualo.form.field.ReportPlaceHolder",
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
        "Ext.tualo.form.field.StoreField",
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
        "Ext.tualo.form.field.SummaryRendere",
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
        "Ext.tualo.form.field.SummaryType",
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
        "Tualo.tualojs.form.field.Gridrenderer",
        "Tualo.tualojs.form.field.Gridrenderer",
        "widget.tualogridrenderer",
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
        "Tualo.form.field.Sortdirection",
        "Tualo.form.field.Sortdirection",
        "widget.tualo_sort_direction",
        "Ext.form.field.ComboBox",
        "widget.tualo_sort_direction",
        "Ext.field.ComboBox"
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
        "Tualo.form.field.AlignField",
        "Tualo.form.field.AlignField",
        "widget.tualo_align_field",
        "Ext.form.field.ComboBox",
        "widget.tualo_align_field",
        "Ext.field.ComboBox"
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
        "Ext.tualo.form.field.Text",
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
        "Ext.tualo.form.field.TextTemplates",
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
        "Ext.tualo.form.field.TualoTimeField",
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
        "Ext.tualo.form.field.XCheckbox",
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
        "Ext.tualo.grid.column.DatetimeDisplayColumn",
        "Ext.tualo.grid.column.DatetimeDisplayColumn",
        
        "widget.tualodatetimedisplaycolumn",
        "Ext.grid.column.Column",
        "widget.tualodatetimedisplaycolumn",

        "Ext.tualo.grid.column.DatetimeDisplayColumn",
        "Tualo Column for DateTimeDisplay",
        1,
        0
    )
;




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
        "Tualo.grid.column.Color",
        "Tualo.grid.column.Color",
        
        "widget.tualocolorcolumn",
        "Ext.grid.column.Column",
        "widget.tualocolorcolumn",

        "Tualo.grid.column.Color",
        "Tualo Color Column",
        1,
        0
    )
;



insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.grid.column.FileSizeDisplayColumn", "Ext.tualo.grid.column.FileSizeDisplayColumn", "widget.tualodisplayfilesize", "Ext.grid.column.Column", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);



insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.ImageDisplayField", "Ext.tualo.form.field.ImageDisplayField", "widget.imagedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.IFrameDisplayField", "Ext.tualo.form.field.IFrameDisplayField", "widget.iframedisplayfield", "Ext.form.field.Display", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);


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
        "Tualo.form.field.DateDisplayField",
        "Tualo.form.field.DateDisplayField",
        "widget.tualodisplaydatefield",
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




insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.IBAN", "Ext.tualo.form.field.IBAN", "widget.iban", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.BIC", "Ext.tualo.form.field.BIC", "widget.bic", "Ext.form.field.ComboBox", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);

insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.Number2", "Ext.tualo.form.field.Number2", "widget.number2", "Ext.form.field.Number", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);


insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.TualoTimeField", "Ext.tualo.form.field.TualoTimeField", "widget.tualotimefield", "Ext.form.field.Time", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);



insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values 
( "Tualo",  "Ext.tualo.form.field.PhoneNumberReadonly", "Ext.tualo.form.field.PhoneNumberReadonly", "widget.tualophonenumberreadonly", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);
insert ignore into custom_types (        vendor,        name,        id, xtype_long_classic, extendsxtype_classic,        xtype_long_modern,        extendsxtype_modern    ) values ( "Tualo",  "Ext.tualo.form.field.EmailAddressReadonly", "Ext.tualo.form.field.EmailAddressReadonly", "widget.tualomailaddressreadonly", "Ext.form.field.Text", "widget.textarea", "Ext.field.Text" ) on duplicate key update    id =values(id), xtype_long_classic = values(xtype_long_classic),    extendsxtype_classic = values(extendsxtype_classic),name = values(name),vendor = values(vendor);




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
        "Tualo.form.field.Color",
        "Tualo.form.field.Color",
        "widget.tualocolorfield",
        "Ext.form.field.Text",
        "widget.text",
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
        "Tualo.DS.fields.fields.ListXtypeComboBox",
        "Tualo.DS.fields.fields.ListXtypeComboBox",
        "widget.listxtype_combobox",
        "Ext.form.field.Text",
        "widget.text",
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

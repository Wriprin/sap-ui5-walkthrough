sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (
    Controller,
    MessageToast,
    Fragment,
) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        // 按钮弹出 HelloMsg 消息提示
        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },
        // 点击按钮弹出 Dialog 文本对话框
        onOpenDialog: function () {
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                });
            }
            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },
        // OK Button 关闭对话框
        onCloseDialog: function (oEvent) {
            this.byId("helloDialog").close();
        }
    });
});
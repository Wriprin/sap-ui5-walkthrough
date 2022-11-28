sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    // 5. 引入 Fragment namesapce
    "sap/ui/core/Fragment"
], function (
    Controller,
    MessageToast,
    // 5.1 引入 Fragment 对象
    Fragment,
) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },
        // 6. 实现 Button 对应的 press 事件触发函数 onOpenDialog
        onOpenDialog: function () {
            // 6.1 判断当 pDialog 不存在时，才会去创建一个 Dialog 并赋给 pDialog
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                });
            }
            // 6.2 open 方法，弹出对话框
            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
            
            /**
             * PS: To reuse the dialog opening and closing functionality in other controllers,
             * you can create a new file sap.ui.demo.walkthrough.controller.BaseController,
             * which extends sap.ui.core.mvc.Controller, and put all your dialog-related coding into this controller.
             * Now, all the other controllers can extend from sap.ui.demo.walkthrough.controller.BaseController
             * instead of sap.ui.core.mvc.Controller.
             */
        }
    });
});
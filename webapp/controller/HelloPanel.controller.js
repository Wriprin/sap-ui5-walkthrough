sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller,
	MessageToast,
) {
	"use strict";

    // 3. 创建对应的 HelloPanel Controller 文件，负责对应的逻辑处理
    
	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }
	});
});
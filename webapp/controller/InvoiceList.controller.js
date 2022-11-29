sap.ui.define([
    // 6. 引入 formatter
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        // 7. The controller simply stores the loaded formatter functions in the local property formatter to be able to access them in the view.
        formatter: formatter,
		onInit : function () {
            // 创建 Currency JSONMOdel，并绑定到视图
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});
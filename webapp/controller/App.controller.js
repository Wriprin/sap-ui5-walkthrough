sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	MessageToast,
	JSONModel
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function() {
            // 1. 构建模拟数据 oData
            var oData = {
                recipient: {
                    name: "World"
                }
            }

            // 2. oData 入参实例化为 JSONModel -> oModel
            var oModel = new JSONModel(oData);
            
            // 3. 将 Model 绑定到 View 上
            this.getView().setModel(oModel);
        },

        onShowHello : function () {
            MessageToast.show("Hello, World.")
        }
	});
});
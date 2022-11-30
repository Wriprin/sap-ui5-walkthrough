sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {

            // 获取 View 对象，进行 元素绑定 Context / Element Binding
            // 这里官方是直接绑定到了 View 视图上
            // 我们这里尝试将 Model 绑定到 指定 ID 的 Element 身上
			// this.getView().bindElement({
			this.getView().byId("objectHeader").bindElement({
                // 解码 invoicePath 的 argument 值，然后拼接 "/" 构成 path，这样就指定了唯一的 Invoices.json 中的一条数据
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		}
	});
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller,
	History) {
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
		},

        /**
         * 实现 Route Back，回退 Overview 界面
         * @param {*} oEvent 
         */
		onNavBack: function(oEvent) {
			// 获取 SAP Pack 下的 History 对象
            // 因此与 常规 JS 中的 BOM 的 History 不同，我们的 History 只会存储 当前 正在运行的 该 SAPUI5 App 的 history
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                // 说明存在 history，则直接返回历史记录上一条
                // e.g. 我从 Milk 详情页面，直接在 URL 中输入 Salad 的目标页面的 URL
                // 那么当我在 Salad 的详情页面点击返回时，将会是 Milk 详情页面
                window.history.go(-1);
            }else {
                // 说明没有 history，则直接回到主页 Overview
                var oRouter = this.getOwnerComponent().getRouter();

                // The second parameter is an empty array ({}) as 
                // we do not pass any additional parameters to this route.

                // The third parameter true tells the router to 
                // replace the current history state with the new one 
                // since we actually do a back navigation by ourselves. 
                oRouter.navTo("overview", {}, {}, true);
            }

		}
	});
});
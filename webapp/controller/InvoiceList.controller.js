sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    // 3. 引入相关依赖
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
		onInit : function () {
            // 创建 Currency JSONMOdel，并绑定到视图
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

        /**
         * Invoice List 的 Search Field 搜索功能
         * @param {*} oEvent 
         * oEvent - Event handlers always receive an event argument that can be used to access the parameters that the event provides
         * In our case the search field defines a parameter query that we access by calling getParameter(“query”) on the oEvent parameter.
         */
        onFilterInvoices: function (oEvent) {
            // 获取用户键入内容
            var sQuery = oEvent.getParameter("query");

            // 配置 Filter
            var aFilter = [];
            // if the query is empty, we filter the binding with an empty array. This makes sure that we see all list elements again
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // 获取 items 行项数据，并调用 Filter 搜索
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");

            // PS: The filter operator FilterOperator.Contains is「not」case-sensitive.
            oBinding.filter(aFilter);
        }

    });
});
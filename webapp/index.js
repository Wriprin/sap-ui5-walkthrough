sap.ui.define([
// 5. 引入 SAP XMLView（由 SAPUI5 构建），用于唯一指定资源
// 该 Name 有 sap.ui.demo.walkthrough.view.* 做前缀，用于唯一指定，参见 13 行
	"sap/ui/core/mvc/XMLView"
], function (
	XMLView) {
	"use strict";

	// 6. 将 App.view.xml 实例化 匿名对象
	// 7. 调用 then() 逻辑处理
	// 7.1 （这里做了将 匿名对象 oView（也就是 第六步实例化的对象）绑定到 id 为 "content" 的 DOM 节点对象身上）
	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) { 
		oView.placeAt("content");
	 });
});
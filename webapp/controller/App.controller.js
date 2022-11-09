sap.ui.define([
	"sap/ui/core/mvc/Controller",
    // 1. 引入 MessageToast 控件
    // 1.1 主要想表明 该部分 引用可以异步加载，提升性能
    //  The browser can decide when and how the resources are loaded prior to code execution.
    "sap/m/MessageToast"
], function(
	Controller,
    // 2. 对象入参
	MessageToast
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
            // 3. 调用 show() 方法 指定 iMessage 进行消息提示
            MessageToast.show("Hello, World.")
        }
	});
});
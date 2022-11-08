sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        // 3. 完成 onShowHello 方法 具体逻辑处理
        onShowHello : function () {
            // 4. Button 的 Press 事件触发后，弹窗显示 Hello, World.
            alert("Hello, World.");
        }
	});
});
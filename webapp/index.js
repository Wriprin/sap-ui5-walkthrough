sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (
	ComponentContainer) {
	"use strict";

	// 5. 原来我们是直接在 index.js 中指定 rootView 并绑定到 Body 身上
	// 6. 现在我们改为了使用 Component 容器来指定 rootView 并实现 init 等初始加载配置逻辑
	// 7. 那么在 index.js 中我们只需要将 Component 绑定到 Body 上即可，代码如下：
	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");
});
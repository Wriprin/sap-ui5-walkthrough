sap.ui.define([
	"sap/m/Text"
], function (
	Text) {
	"use strict";

	// 2. 将 Text 对象 指定到 id 为 "content" 的 DOM 节点对象 -> Body
	new Text({
		text: "Hello, World!"
	}).placeAt(content);
});
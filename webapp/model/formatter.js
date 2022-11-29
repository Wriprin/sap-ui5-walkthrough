sap.ui.define([], function () {
	"use strict";
	return {

        /**
         * 1. 在 Step 20 我们是学习了 简单的 运算/判断表达式 进行简单的逻辑处理
         * 2. 如果需要进行一些复杂的逻辑处理，那么就需要单独分离出来 将所有的可复用逻辑整合到一起 -> formatter.js
         *  - formatter.js 和 
         * 3. 如下是对 invoice JSON 对象的 status 数据进行逻辑判断处理并赋值
         * 4. 那么为什么不写在对应的 Controller 下呢？
         *  - 4.1 这不是事件处理（次要原因）
         *  - ※ 4.2 formatter.js 专门用于处理 data model 的相关格式化逻辑（主要原因）
         *  - 如下为官方定义：
         *      - Formatters are working on data properties and format them for display on the UI.
         * @param {*} sStatus 状态 Code
         * @returns 
         */

		statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

            // 5. 判断 invoice 对象 的 status 属性值，并获取对应的 i18n 文本内容
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                default:
                    return sStatus;
            }
		}
	};
});
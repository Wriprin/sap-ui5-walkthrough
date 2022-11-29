sap.ui.define([], function () {
	"use strict";
	return {

        /**
         * 判断 invoice 对象 的 status 属性值，并获取对应的 i18n 文本内容
         * @param {*} sStatus 
         * @returns 
         */
		statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();

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
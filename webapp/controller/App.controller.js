sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function(
	Controller,
	MessageToast,
	JSONModel,
	ResourceModel,
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function() {
            var oData = {
                recipient: {
                    name: "World"
                }
            }

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // 2. 将 i18n Model 绑定到 对应 View 上
            // 2.1 构建对应 Resource Model
            var i18nModel = new ResourceModel({
                // 2.2 bundleName 为 locate 定位
                // 2.3 由三部分组成：rootPath(index.html 中定义) + i18n(文件夹) + i18n(去除后缀的文件名)
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            // 2.4 Resource Model 绑定
            // 2.5 如果并行使用多个 Model，那么就需要对 Model 命名（指定 KeyName，如下为 "i18n"，从而区分 Model）
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello : function () {
            // 3. 获取 i18n Model Bundle
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            // 4. 获取 oModel 的 "World"「用于 拼接 i18n 的 "helloMsg"」
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            // 5. 获取 i18n Model Bundel 对应 helloMsg 对象，并拼接 sRecipient
            // 5.1 ResourceBundle 对象有 getText 方法，具体使用参见对应 API 文档即可
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // 6. 弹窗 sMsg：Hello World
            MessageToast.show(sMsg);
        }
	});
});
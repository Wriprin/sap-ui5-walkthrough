sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel"
], function (UIComponent,
    JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            // 7. Refer the manifest.json File 加载配置
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                recipient: {
                    name: "World"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            /**
             * We can also remove the dependency to sap/ui/model/resource/ResourceModel and the corresponding formal parameter ResourceModel
             * Because we will not use this inside our anonymous callback function.
             * 
             * 8. 我们已经在 manifest.json 中配置了 i18n 的 Model（可参见 manifest.json -「34 - 45」）
             * 8.1 所以已经可以直接在 *.controller.js 中获取已配置的 ResourceModel（可参见 App.controller.js -「12」）
             * 8.2 因此我们可以删除掉 ResourceModel 的引用，并且再也不需要去创建 ResourceModel 的匿名对象了
             */
        }
    });
});
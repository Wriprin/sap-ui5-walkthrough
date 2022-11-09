/**
 * 1. 首先创建了 Component.js 文件：目前包含了两个部分：
 *      - metadata 元数据
 *          - 规定了 rootView，初始 View 页面是谁
 *      - init 继承自派生类的构造方法，必须重写
 *          - 当 Component 加载时，调用 init 方法 初始化（定义初始加载时需要的逻辑功能）
 * PS: 现在我们可以通过 Component 来管理显示 app View（之前是直接加载 index.js 中的 rootView）
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent,
    JSONModel,
    ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
                "id": "app"
            }
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // 2. 配置 dataModel
            var oData = {
                recipient: {
                    name: "World"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // 3. 配置 i18nModel
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });

            this.setModel(i18nModel, "i18n");
        }
    });
});
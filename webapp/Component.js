sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function (UIComponent,
    JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            // Refer the manifest.json File 加载配置
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
             * 1. 在 manifest 中配置路由信息
             *  - routing
             *      - config: 全局路由配置信息
             *          - controlId: 指定用于展示页面的控件 id -> e.g. "app"
             *          - controlAggregation: 指定当页面加载时会被填充的子控件 -> e.g. "pages"
             *  - routes
             *      - pattern: 最终的 URL 的 目标「RI」-> e.g. pattern 为 "detail" 时 http://localhost:8080/test/mockServer.html#/detail
             *          - "" 指定 pattern 为空的路由指向，这里我们配置为了 overview
             *          - 那么加载顺序就是 Component -> App.view.xml -> Overview.view.xml
             *      - name
             *      - target: 目标页面
             * 
             *      - e.g. 如果我们想让 items 的 press 事件跳转到 URL 拼接（pattern）为「tmpUri」，路由名称（name）为「tmpName」，目标页面（target）为「Detail」
             *      - routes
             *          - pattern: "tmpUri"
             *          - name: "tmpName"
             *          - target: "Detail" -> 还需要在 targets 下配置好 target & its id & its name
             *      - 然后在 press 的 func 跳转的 nav 参数配置为：oRouter.navTo("tmpName");
             * 
             *  - targets: 在 routes 中的 target 的详细信息
             *      - target
             *          - target's id
             *          - target's name
             */

            // 2. 初始化配置路由
            // 2.1 根据 manifest 中配置的路由信息中的 routes 和 targets 获取当前 URL，并自动加载对应 View 视图
            this.getRouter().initialize();
        }
    });
});
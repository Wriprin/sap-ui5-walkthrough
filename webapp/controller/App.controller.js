sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function(
	Controller,
	MessageToast,
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        /** 官方 Wiki
         * In the init function we instantiate our data model and the i18n model like we did before in the app controller.
         * Be aware that the models are directly set on the component and not on the root view of the component.
         * However, as nested controls automatically inherit the models from their parent controls,
         * the models will be available on the view as well.
         */

        /** 官方 Wiki 拆解分析
         * Model 是绑定到了 Component 上，而不是 Component 对应的 rootView 上
         * 虽然，i18n 和 data Model 是绑定到了 Component 上
         * 但是 嵌套控件 会自动继承他们的 父类控件的 models
         * 上面这句话翻译一下就是：我们的 Controller 对应的 View 可以直接拿到 Component 中构建好的 Models 使用
         * 同理，Controller 中 this.getView().getModel() 就可以有效的拿到对应的 Model
         * 因此 代码 31 行，32 行就是有效的
         */

        // 这样一来，我们将初始加载 Init 交给了 Component 来完成，Controller 则专注于 对应 View 的逻辑处理即可
        
        onShowHello : function () {
            // 4. 获取 i18nModel 和 DataModel 数据，占位符“拼接”，并弹窗显示 
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }
	});
});
/*global QUnit*/

sap.ui.define([
	"sap/ui/demo/walkthrough/model/formatter",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
	"use strict";

    /**
     * 1. 测试项：查看 Status 对应 ResourceBundle 中的 Text 文本内容 比对是否正确
     */
	QUnit.module("Formatting functions", {
        /**
         * 每次 单元测试 前 调用
         */
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
			});
		},
        /**
         * 每次 单元测试 后 调用
         */
		afterEach: function () {
			this._oResourceModel.destroy();
		}
	});


	QUnit.test("Should return the translated texts", function (assert) {

        // ※ 整体逻辑可以看作从外部获取内部对象，并调用对应属性/方法来进行断言测试（Reflect）

		// Arrange
		// this.stub() does not support chaining and always returns the right data
		// even if a wrong or empty parameter is passed.
		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		// System under test
		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		// Assert
        // 以下判断只需规定正确的规范即可，如程序内与该规范不一致，则为错误
		assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");

		assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");

		assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");

		assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
	});

});
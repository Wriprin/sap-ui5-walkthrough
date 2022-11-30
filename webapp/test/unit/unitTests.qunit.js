/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

    // 3. 加载并调用执行单元测试 formatter.js

    /** 规范约定：
     * 1. All unit tests are placed in the webapp/test/unit folder of the app.
     * 2. Files in the test suite end with *.qunit.html.
     * 3. The unitTests.qunit.html file triggers all unit tests of the app.
     * 4. A unit test should be written for formatters, controller logic, and other individual functionality.
     * 5. All dependencies are replaced by stubs to test only the functionality in scope.
     */
	sap.ui.require([
		"sap/ui/demo/walkthrough/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});
/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"NAMESPACE/ZCashClosing/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NAMESPACE/ZCashClosing/test/integration/pages/Worklist",
	"NAMESPACE/ZCashClosing/test/integration/pages/Object",
	"NAMESPACE/ZCashClosing/test/integration/pages/NotFound",
	"NAMESPACE/ZCashClosing/test/integration/pages/Browser",
	"NAMESPACE/ZCashClosing/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NAMESPACE.ZCashClosing.view."
	});

	sap.ui.require([
		"NAMESPACE/ZCashClosing/test/integration/WorklistJourney",
		"NAMESPACE/ZCashClosing/test/integration/ObjectJourney",
		"NAMESPACE/ZCashClosing/test/integration/NavigationJourney",
		"NAMESPACE/ZCashClosing/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"NAMESAPCE/ClosingCash/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NAMESAPCE/ClosingCash/test/integration/pages/Worklist",
	"NAMESAPCE/ClosingCash/test/integration/pages/Object",
	"NAMESAPCE/ClosingCash/test/integration/pages/NotFound",
	"NAMESAPCE/ClosingCash/test/integration/pages/Browser",
	"NAMESAPCE/ClosingCash/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NAMESAPCE.ClosingCash.view."
	});

	sap.ui.require([
		"NAMESAPCE/ClosingCash/test/integration/WorklistJourney",
		"NAMESAPCE/ClosingCash/test/integration/ObjectJourney",
		"NAMESAPCE/ClosingCash/test/integration/NavigationJourney",
		"NAMESAPCE/ClosingCash/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
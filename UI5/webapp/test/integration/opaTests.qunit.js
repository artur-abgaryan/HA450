/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"HA450/UI5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
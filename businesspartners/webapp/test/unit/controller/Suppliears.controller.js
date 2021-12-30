/*global QUnit*/

sap.ui.define([
	"ns/businesspartners/controller/Suppliears.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Suppliears Controller");

	QUnit.test("I should test the Suppliears controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

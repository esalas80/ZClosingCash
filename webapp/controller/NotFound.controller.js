sap.ui.define([
		"NAMESPACE/ZCashClosing/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("NAMESPACE.ZCashClosing.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);
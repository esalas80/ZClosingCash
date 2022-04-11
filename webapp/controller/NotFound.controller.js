sap.ui.define([
		"NAMESAPCE/ClosingCash/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("NAMESAPCE.ClosingCash.controller.NotFound", {

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
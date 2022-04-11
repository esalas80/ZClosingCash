/*global location history */
sap.ui.define([
		"NAMESPACE/ZCashClosing/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"NAMESPACE/ZCashClosing/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/core/Fragment",
		"sap/m/MessageBox",
		"sap/m/Token",
		"sap/m/Dialog"
	], function (BaseController, JSONModel, formatter, Filter, FilterOperator, Fragment, MessageBox, Token, Dialog) {
		"use strict";

		return BaseController.extend("NAMESPACE.ZCashClosing.controller.Worklist", {

			formatter: formatter,

			onInit : function () {
			var oViewModel;
				// Model used to manipulate control states
				oViewModel = new JSONModel({
					worklistTableTitle : this.getResourceBundle().getText("worklistTableTitle")
				});
				this.setModel(oViewModel, "worklistView");
			},
			onPress : function (oEvent) {
				// The source is the list item that got pressed
				this._showObject(oEvent.getSource());
			},
			onNavBack : function() {
				history.go(-1);
			},

			/* =========================================================== */
			/* internal methods                                            */
			/* =========================================================== */

			/**
			 * Shows the selected item on the object page
			 * On phones a additional history entry is created
			 * @param {sap.m.ObjectListItem} oItem selected Item
			 * @private
			 */
			_showObject : function (oItem) {
				this.getRouter().navTo("object", {
					objectId: oItem.getBindingContext().getProperty("Segmento")
				});
			},
			handleSelectPressSoc: function () {
				var that = this;
				var model = "Sociedades";
				var fragmentView = "SelectDialogSociedad";
				this._oDataFilterV4(model, "").then(function (dataRecibida) {
					var auxModelo = new sap.ui.model.json.JSONModel();
					var result = dataRecibida.value;
					auxModelo.setData(
						result
					);
					if (!that._oDialogSociety) {
						Fragment.load({
							name: "NAMESAPCE.ZCashClosing.view." + fragmentView,
							controller: that
						}).then(function (oDialogSociety){
							that._oDialogSociety = oDialogSociety;
							that._oDialogSociety.setModel(auxModelo, "SociedadesV4");
							that._oDialogSociety.open();
						});
					} else {
						that._oDialogSociety.setModel(auxModelo, "SociedadesV4");
						that._oDialogSociety.open();
					}
				});
			},
			
			_onLoginClosingCash:function(){
				var sociedad = this.getView().byId("help_Society").getValue();
				var division = this.getView().byId("help_Div").getValue();
				var caja = this.getView().byId("idCaja").getValue();
				if(sociedad === "" || division === "" || caja === ""){
					this.getView().byId("help_Society").setValueState("Error");
					this.getView().byId("help_Div").setValueState("Error");
					this.getView().byId("idCaja").setValueState("Error");
					return;
				}
				else{
					this.getView().byId("help_Society").setValueState("None");
					this.getView().byId("help_Div").setValueState("None");
					this.getView().byId("idCaja").setValueState("None");
				}
				var loginModel = this.getView().getModel();
				
				this.getRouter().navTo("object", {
					objectId: new Date().getMilliseconds().toString() + this.create_UUID().toString() + new Date().getMilliseconds().toString() + this.create_UUID().toString()
				});
			}

		});
	}
);
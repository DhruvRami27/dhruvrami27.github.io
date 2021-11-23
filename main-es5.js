function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breadcrumbs/breadcrumb.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsBreadcrumbsBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb\">\n    <li *ngFor=\"let breadcrumb of breadcrumbs\">\n      <span [routerLink]=\"breadcrumb.url\" routerLinkActive=\"router-link-active\">\n        {{ breadcrumb.label }}\n      </span>\n    </li>\n  </ol>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmDialogComponent/confirmdialog.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsConfirmDialogComponentConfirmdialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>\n    {{title}}\n  </h1>\n  \n  <div mat-dialog-content>\n    <p>{{message}}</p>\n  </div>\n  \n  <div mat-dialog-actions modal-button>\n    <button mat-raised-button modal-button style=\"font-size: large;\" (click)=\"onDismiss()\">Cancel</button>\n    <button mat-raised-button modal-button style=\"margin-left: auto; font-size: large;\" color=\"primary\" (click)=\"onConfirm()\">Confirm</button>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/courierhome/courierhome.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsCouriermoduleCourierhomeCourierhomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" >\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\" title=\"Toggle Sidebar\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Courier Module</h1>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" routerLink=\"/\" title=\"Go to Home Page\">\n      <mat-icon>home</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"viewshipment\">View Shipment</a>\n        <a mat-list-item routerLink=\"updateshipment\">Update Shipment</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div style=\"width: 100%; height: auto;\" >\n        <app-breadcrumb></app-breadcrumb>\n      </div>\n      <div *ngIf=\"_router.url == '/courier'\">\n        <div style=\"padding-left: 50px;\">\n            <h3>Welcome!</h3>  \n            <img style=\"width: 250px;\" style=\"height:250px; margin-top: 25px; margin-bottom: 15px;\" src=\"/assets/courier.png\" alt=\"\">  \n            <p>you can now go ahead and manage your shipments from the sub menu</p>  \n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsCouriermoduleCourierupdateshipmentCourierupdateshipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding: 20px;text-align: center;\">\n    <form class=\"example-form\" #contactForm=\"ngForm\">\n        <div style=\"vertical-align: middle;\">\n        <div class=\"inline-block-child\">\n            <h4>Shipment Information</h4>\n            <br />\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n            <mat-label>Tracking Id</mat-label>\n            <input matInput placeholder=\"Tracking Id\" name=\"trackingNo\" type=\"number\" required [(ngModel)]=\"trackingId\">\n            </mat-form-field>\n            <br />\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                <mat-label>Delivery Status</mat-label>\n                <select matNativeControl required [(ngModel)]=\"status\" name=\"statusSelect\">\n                    <option value=\"in-transit\">In-Transit</option>\n                    <option value=\"out-for-delivery\">Out for Delivery</option>\n                    <option value=\"delivered\">Delivered</option>\n                </select>\n            </mat-form-field>\n            <br />\n            <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                <mat-label>Comment</mat-label>\n                <textarea matInput></textarea>\n            </mat-form-field>\n            <br />\n            <button mat-raised-button color=\"primary\" (click)=\"updateStatus()\">Submit</button>\n        </div>\n        </div>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/viewshipment/viewshipment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsCouriermoduleViewshipmentViewshipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"padding:10px;\">\n<table>\n  <tr>\n    <th>ShipmentId</th>\n    <th>Delivery Location</th>\n    <th>Status</th>\n    <th>Info</th>\n  </tr>\n  <tr *ngFor=\"let shipment of shipments\">\n    <td>{{shipment.trackingNumber}}</td>\n    <td>{{shipment.recipientCity+', '+shipment.recipientRegion}}</td>\n    <td>{{shipment.status}}</td>\n    <td><mat-icon matTooltip=\"{{shipment.recipientAddr1+','+shipment.recipientCity+','+shipment.recipientRegion}}\">info</mat-icon></td>\n  </tr>\n \n</table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-new-shipment/create-new-shipment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateNewShipmentCreateNewShipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parent-div\" *ngIf=\"showShippingConfirmation==false\">\n<form class=\"example-form\" #contactForm=\"ngForm\">\n    <div style=\"vertical-align: middle;\">\n    <div class=\"inline-block-child\">\n        <div class=\"form-title\">Shipper Information</div>\n        <br />\n        <mat-form-field appearance=\"fill\">\n            <mat-label for=\"shipperFirstName\">First Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperFirstName\" [(ngModel)]=\"shipment.shipperFirstName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Last Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperLastName\" [(ngModel)]=\"shipment.shipperLastName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Company</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperCompany\" [(ngModel)]=\"shipment.shipperCompany\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 1</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperAddr1\" [(ngModel)]=\"shipment.shipperAddr1\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 2</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperAddr2\" [(ngModel)]=\"shipment.shipperAddr2\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>City</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperCity\" [(ngModel)]=\"shipment.shipperCity\" required> \n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>State</mat-label>\n            <mat-select [(ngModel)]=\"shipment.shipperRegion\" name=\"region\" required>\n                <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Postal Code</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressNumeric($event)\" name=\"shipperPostalCode\" [(ngModel)]=\"shipment.shipperPostalCode\" minlength=\"5\" maxlength=\"5\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Phone Number</mat-label>\n            <input matInput type=\"tel\" (keypress)=\"keyPressNumeric($event)\" name=\"shipperPhoneNumber\" [(ngModel)]=\"shipment.shipperPhoneNumber\" minlength=\"10\" maxlength=\"10\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Email Address</mat-label>\n            <input matInput type=\"email\" name=\"shipperEmail\" [(ngModel)]=\"shipment.shipperEmail\">\n        </mat-form-field>\n        <div class=\"clear-button\">\n            <button class=\"clear-button\" *ngIf=\"showRestoreShipperInfo==false\" mat-raised-button matTooltip=\"This will clear the shipper information.\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"confirmDialogClearShipperInfo()\" >Clear Shipper Info</button>\n            <button class=\"clear-button\" *ngIf=\"showRestoreShipperInfo\" mat-raised-button matTooltip=\"This will restore previously cleared shipper info.\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"confirmDialogClearShipperInfo()\" >Restore Shipper Info</button>\n        </div>\n    </div>\n    <div class=\"inline-block-child\">\n        <img src=\"/assets/shipper_arrow.png\" style=\"width: 200px; height: auto;\" />\n    </div>\n\n    <div class=\"inline-block-child\">\n        <div class=\"form-title\">Recipient Information</div>\n        <br />\n        <mat-form-field appearance=\"fill\">\n            <mat-label>First Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"recipientFirstName\" [(ngModel)]=\"shipment.recipientFirstName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Last Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\"name=\"recipientLastName\" [(ngModel)]=\"shipment.recipientLastName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Company</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientCompany\" [(ngModel)]=\"shipment.recipientCompany\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 1</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientAddr1\" [(ngModel)]=\"shipment.recipientAddr1\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 2</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientAddr2Company\" [(ngModel)]=\"shipment.recipientAddr2\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>City</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"recipientCity\" [(ngModel)]=\"shipment.recipientCity\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>State</mat-label>\n            <mat-select [(ngModel)]=\"shipment.recipientRegion\" name=\"region\" required>\n                <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Postal Code</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressNumeric($event)\" name=\"recipientPostalCode\" [(ngModel)]=\"shipment.recipientPostalCode\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Phone Number</mat-label>\n            <input matInput type=\"tel\" (keypress)=\"keyPressNumeric($event)\" name=\"recipientPhoneNumber\" [(ngModel)]=\"shipment.recipientPhoneNumber\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Email Address</mat-label>\n            <input matInput type=\"email\" name=\"recipientEmail\" [(ngModel)]=\"shipment.recipientEmail\">\n        </mat-form-field>\n        <div class=\"clear-button\">\n            <button class=\"clear-button\" *ngIf=\"showRestoreRecipientInfo==false\" mat-raised-button matTooltip=\"This will clear the recipient information.\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"confirmDialogClearRecipientInfo()\" >Clear Recipient Info</button>\n            <button class=\"clear-button\" *ngIf=\"showRestoreRecipientInfo\" mat-raised-button matTooltip=\"This will restore previously cleared recipient information.\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"confirmDialogClearRecipientInfo()\" >Restore Recipient Info</button>\n        </div>\n    </div>\n    <div *ngIf=\"missingInformation\" class=\"inline-block-child missing-info\">\n        <span *ngFor=\"let error of errorList\">\n            <span >{{error}}</span>\n            <br />\n        </span>\n    </div> \n\n    <div style=\"margin-top: 10px; \">\n        <span style=\"font-weight: bold; font-size: larger;\">Package Information</span>\n        <br />\n        <br />\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Width (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageWidth\" [(ngModel)]=\"shipment.packageWidth\" min=\"1\">\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Length (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageLength\" [(ngModel)]=\"shipment.packageLength\" min=\"1\">\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Height (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageHeight\" [(ngModel)]=\"shipment.packageHeight\" min=\"1\">\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Weight (Pounds)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageWeight\" [(ngModel)]=\"shipment.packageWeight\" min=\"1\">\n            </mat-form-field>\n    </div>\n\n    <div class=\"inline-block-child\" style=\"margin-top: 25px;\">\n        <button mat-raised-button class=\"submit-button\" type =\"button\" (click)=\"confirmCancelShipment()\">Cancel Shipment</button>\n    </div>\n    <div class=\"inline-block-child\" style=\"margin-left: 225px;\">\n        <button  mat-raised-button color=\"primary\" class=\"submit-button\" type =\"button\" (click)=\"confirmDialogSubmitForShipment()\">Submit for Shipment</button>\n    </div>\n</div>\n</form>\n</div>\n\n\n<div *ngIf=\"showShippingConfirmation\" class=\"parent-div\">\n    <div>\n        <span>Congratulations! Your Shipment is Confirmed!</span>\n        <br />\n        <br />\n        <span class=\"blink_text\" style=\"font-size: 25px;color: red;\">Your tracking number is: {{shipment.trackingNumber}} </span>\n        <br />\n    </div>\n    <div class=\"float-child\">\n        <span>Shipper Info</span>\n        <br />\n        <span>{{shipment.shipperFirstName}} {{shipment.shipperLastName}}</span>\n        <br *ngIf=\"shipment.shipperCompany\"/>\n        <span>{{shipment.shipperCompany}}</span>\n        <br />\n        <span>{{shipment.shipperAddr1}}</span>\n        <br *ngIf=\"shipment.shipperAddr2\"/>\n        <span>{{shipment.shipperAddr2}}</span>\n        <br />\n        <span>{{shipment.shipperCity}}, {{shipment.shipperRegion}}</span>\n        <br />\n        <span>{{shipment.shipperPostalCode}}</span>\n        <br />\n        <span>{{shipment.shipperPhoneNumber}}</span>\n        <br />\n        <span>{{shipment.shipperEmail}}</span>\n    </div>\n            <div class=\"float-child\">\n                <span>Recipient Info</span>\n                <br />\n                <span>{{shipment.recipientFirstName}} {{shipment.recipientLastName}}</span>\n                        <br *ngIf=\"shipment.recipientCompany\"/>\n                <span>{{shipment.recipientCompany}}</span>\n                <br />\n                <span>{{shipment.recipientAddr1}}</span>\n                <br *ngIf=\"shipment.recipientAddr2\"/>\n                <span>{{shipment.recipientAddr2}}</span>\n                <br />\n                <span>{{shipment.recipientCity}}, {{shipment.recipientRegion}}</span>\n                <br />\n                <span>{{shipment.recipientPostalCode}}</span>\n                <br />\n                <span>{{shipment.recipientPhoneNumber}}</span>\n                <br />\n                <span>{{shipment.recipientEmail}}</span>\n            </div>\n    <div style=\"float: right; width: 750px; margin-top: 50px;\">\n        <button mat-raised-button color=\"primary\" class=\"submit-button\" (click)=\"makeAnotherShipment()\">Create Another Shipment</button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editshipment/editshipment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditshipmentEditshipmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!editingAShipment\">\n    <div *ngIf=\"shipments.length == 0\" style=\"padding:10px;\">\n        <h3>No Shipments Available for edit, Please create a shipment and come again !</h3>\n    </div>\n    <div *ngFor=\"let shipment of shipments\">\n        <div class=\"parent-div\">\n            <div class=\"float-child\">\n                <span>Shipper Info</span>\n                <br />\n                <span>{{shipment.shipperFirstName}} {{shipment.shipperLastName}}</span>\n                <br *ngIf=\"shipment.shipperCompany\"/>\n                <span>{{shipment.shipperCompany}}</span>\n                <br />\n                <span>{{shipment.shipperAddr1}}</span>\n                <br *ngIf=\"shipment.shipperAddr2\"/>\n                <span>{{shipment.shipperAddr2}}</span>\n                <br />\n                <span>{{shipment.shipperCity}}, {{shipment.shipperRegion}}</span>\n                <br />\n                <span>{{shipment.shipperPostalCode}} {{shipment.shipperCountry}}</span>\n                <br />\n                <span>{{shipment.shipperPhoneNumber}}</span>\n                <br />\n                <span>{{shipment.shipperEmail}}</span>\n            </div>\n            <div class=\"float-child\">\n                <span>Recipient Info</span>\n                <br />\n                <span>{{shipment.recipientFirstName}} {{shipment.recipientLastName}}</span>\n                        <br *ngIf=\"shipment.recipientCompany\"/>\n                <span>{{shipment.recipientCompany}}</span>\n                <br />\n                <span>{{shipment.recipientAddr1}}</span>\n                <br *ngIf=\"shipment.recipientAddr2\"/>\n                <span>{{shipment.recipientAddr2}}</span>\n                <br />\n                <span>{{shipment.recipientCity}}, {{shipment.recipientRegion}}</span>\n                <br />\n                <span>{{shipment.recipientPostalCode}} {{shipment.recipientCountry}}</span>\n                <br />\n                <span>{{shipment.recipientPhoneNumber}}</span>\n                <br />\n                <span>{{shipment.recipientEmail}}</span>\n            </div>\n            <div class=\"float-child\" style=\"width:150%;\">\n                <span>Tracking Number: {{shipment.trackingNumber}}</span>\n                <br />\n                <span style=\"padding-right:150px; margin-right: 125px;\">Width: {{shipment.packageWidth}}in. Length: {{shipment.packageLength}}in. Height: {{shipment.packageHeight}}in. Weight: {{shipment.packageWeight}}lbs</span>\n                <br />\n                <button mat-raised-button matTooltip=\"Test\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"editShipment(this.shipment)\" >Edit This Shipment</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"parent-div\" *ngIf=\"editingAShipment\">\n<form class=\"example-form\" #contactForm=\"ngForm\">\n    <div class=\"inline-block-child\">\n        <span>Shipper</span>\n        <br />\n        <mat-form-field appearance=\"fill\">\n            <mat-label for=\"shipperFirstName\">First Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperFirstName\" [(ngModel)]=\"shipment.shipperFirstName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Last Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperLastName\" [(ngModel)]=\"shipment.shipperLastName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" >\n            <mat-label>Company</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperCompany\" [(ngModel)]=\"shipment.shipperCompany\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 1</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperAddr1\" [(ngModel)]=\"shipment.shipperAddr1\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 2</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"shipperAddr2\" [(ngModel)]=\"shipment.shipperAddr2\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>City</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"shipperCity\" [(ngModel)]=\"shipment.shipperCity\" required> \n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>State</mat-label>\n            <mat-select [(ngModel)]=\"shipment.shipperRegion\" name=\"region\" required>\n                <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Postal Code</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressNumeric($event)\" name=\"shipperPostalCode\" [(ngModel)]=\"shipment.shipperPostalCode\" minlength=\"5\" maxlength=\"5\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Phone Number</mat-label>\n            <input matInput type=\"tel\" (keypress)=\"keyPressNumeric($event)\" name=\"shipperPhoneNumber\" [(ngModel)]=\"shipment.shipperPhoneNumber\" minlength=\"10\" maxlength=\"10\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Email Address</mat-label>\n            <input matInput type=\"email\" name=\"shipperEmail\" [(ngModel)]=\"shipment.shipperEmail\">\n        </mat-form-field>\n        <button style=\"margin-right: 150px; margin-bottom:25px;\" mat-raised-button matTooltip=\"This will copy the shipper information into the corresponding recipient fields.\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"shippingToSelf()\" >Copy to Recipient Info</button>\n    </div>\n    <div class=\"inline-block-child\">\n        <span>Recipient</span>\n        <br />\n        <mat-form-field appearance=\"fill\">\n            <mat-label>First Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"recipientFirstName\" [(ngModel)]=\"shipment.recipientFirstName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Last Name</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\"name=\"recipientLastName\" [(ngModel)]=\"shipment.recipientLastName\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Company</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientCompany\" [(ngModel)]=\"shipment.recipientCompany\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 1</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientAddr1\" [(ngModel)]=\"shipment.recipientAddr1\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Address Line 2</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlphaNumeric($event)\" name=\"recipientAddr2Company\" [(ngModel)]=\"shipment.recipientAddr2\">\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>City</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressAlpha($event)\" name=\"recipientCity\" [(ngModel)]=\"shipment.recipientCity\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>State</mat-label>\n            <mat-select [(ngModel)]=\"shipment.recipientRegion\" name=\"region\" required>\n                <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Postal Code</mat-label>\n            <input matInput type=\"text\" (keypress)=\"keyPressNumeric($event)\" name=\"recipientPostalCode\" [(ngModel)]=\"shipment.recipientPostalCode\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Phone Number</mat-label>\n            <input matInput type=\"tel\" (keypress)=\"keyPressNumeric($event)\" name=\"recipientPhoneNumber\" [(ngModel)]=\"shipment.recipientPhoneNumber\" required>\n        </mat-form-field>\n        <mat-form-field appearance=\"fill\" class=\"address-class\">\n            <mat-label>Email Address</mat-label>\n            <input matInput type=\"email\" name=\"recipientEmail\" [(ngModel)]=\"shipment.recipientEmail\">\n        </mat-form-field>\n        <button style=\"margin-bottom: 15px;\" mat-raised-button matTooltip=\"This will clear the form\" aria-label=\"Test\" type=\"button\" color=\"primary\" (click)=\"clearForm()\" >Clear All Info</button>\n    </div>\n    <div *ngIf=\"missingInformation\" class=\"inline-block-child missing-info\">\n        <span *ngFor=\"let error of errorList\">\n            <span >{{error}}</span>\n            <br />\n        </span>\n    </div> \n\n    <div style=\"margin-top: 10px;\">\n        <span>Package Information</span>\n        <br />\n        <span style=\"margin-top: 10px; margin-bottom: 10px; display: block;\">Dimensions</span>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Width (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageWidth\" [(ngModel)]=\"shipment.packageWidth\" min=\"1\">\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Length (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageLength\" [(ngModel)]=\"shipment.packageLength\" min=\"1\">\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Height (Inches)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageHeight\" [(ngModel)]=\"shipment.packageHeight\" min=\"1\">\n            </mat-form-field>\n            <br />\n            <span>Weight</span>\n            <br />\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Weight (Pounds)</mat-label>\n                <input matInput type=\"number\" (keypress)=\"keyPressNumeric($event)\" name=\"packageWeight\" [(ngModel)]=\"shipment.packageWeight\" min=\"1\">\n            </mat-form-field>\n    </div>\n\n    <div style=\"float: left; width: 750px; margin-top: 25px;\">\n        <button mat-raised-button color=\"primary\" class=\"submit-button\" type =\"button\" (click)=\"cancelEditing()\">Cancel Editing</button>\n        <button style=\"float: right;\" mat-raised-button color=\"primary\" class=\"submit-button\" type =\"button\" (click)=\"saveEditChanges()\">Submit Shipment Edits</button>\n    </div> \n</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" >\n  <button mat-icon-button class=\"example-icon favorite-icon\" routerLink=\"/\" title=\"Go to Home Page\">\n    <h1 routerLink=\"/\" >Shipping Tracking</h1>\n  </button>\n</mat-toolbar>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/lib/w3-theme-black.css\">\n<div class=\"example-button-container\" style=\"padding: 50px;\">\n      \n  <div class=\"w3-row-padding w3-center w3-margin-top\" *ngIf=\"_router.url == '/'\">\n    <button class=\"w3-third\" mat-raised-button color=\"secondary\" routerLink=\"/shipper\">\n      <div class=\"w3-card w3-container\" style=\"min-height:460px\">\n        <img style=\"width: 350px; height: 250px;\" src=\"/assets/shipper.png\" alt=\"\" />\n       <p>\n        <button mat-raised-button color=\"primary\" routerLink=\"/shipper\" style=\"font-size: 25px;\" aria-label=\"Example icon button with a home icon\">\n          Shipper\n        </button>\n        </p>\n      <p>Create New/Update Shipments</p>\n\n      </div>\n    </button>\n    \n    <button class=\"w3-third\" mat-raised-button color=\"secondary\" routerLink=\"/courier\">\n      <div class=\"w3-card w3-container\" style=\"min-height:460px\">\n        <div style=\"padding: 5px;\"></div>\n        <img style=\"width: 250px;\" style=\"height:250px; margin-top: 25px; margin-bottom: 15px;\" src=\"/assets/courier.png\" alt=\"\">\n        <p>\n          <button mat-raised-button color=\"primary\" routerLink=\"/courier\" style=\"font-size: 25px;\" aria-label=\"Example icon button with a home icon\">\n            Courier\n          </button>\n          </p>\n      <p>Courier Dashboard</p>\n    \n      </div>\n    </button>\n    \n    <button class=\"w3-third\" mat-raised-button color=\"secondary\" routerLink=\"/shippingtracking\">\n      <div class=\"w3-card w3-container\" style=\"min-height:460px\">\n        <img style=\"width: 250px;\" style=\"height:250px; margin-top: 25px; margin-bottom: 15px;\" src=\"/assets/track.png\" alt=\"\">\n        <p>\n          <i class=\"fas fa-shipping-fast\"></i>\n          <button routerLink=\"/shippingtracking\" mat-raised-button color=\"primary\" style=\"font-size: 25px;\" aria-label=\"Example icon button with a home icon\">\n            Track\n          </button>\n          </p>\n      <p>Track your package</p>\n      </div>\n    </button>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shippermodule/home/home.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsShippermoduleHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" >\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Shipper Module</h1>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" routerLink=\"/\" title=\"Home Page\">\n      <mat-icon>home</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\" opened=\"true\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"newshipment\">Create New Shipment</a>\n        <a mat-list-item routerLink=\"editshipment\">Edit Shipment</a>\n        <a mat-list-item routerLink=\"shippingtracking\">Track Shipment</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div style=\"width: 100%; height: auto;\">\n        <app-breadcrumb></app-breadcrumb>\n      </div>\n      <div *ngIf=\"_router.url == '/shipper'\">\n        <div style=\"padding-left: 50px;\">\n            <h3>Welcome!</h3>  \n            <img style=\"width: 250px;\" style=\"height:250px; margin-top: 25px; margin-bottom: 15px;\" src=\"/assets/shipper.png\" alt=\"\">  \n            <p>you can now go ahead and manage your shipments from the sub menu</p>  \n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usertracking/usertracking.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsertrackingUsertrackingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 330px;margin-left: auto;margin-right: auto;\">\n  <div style=\"padding-top: 10px; padding-bottom: 10px;\">\n    <h3>Track Shipment</h3>\n    <span>Please enter your shipment tracking number to know about you shipment's status</span>\n  </div>\n  <div>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Tracking Number</mat-label>\n      <input matInput placeholder=\"#\" (blur)=\"showTrackingInfo=false;\" type=\"number\" [(ngModel)]=\"trackingId\"> \n    </mat-form-field>\n      <button mat-raised-button color=\"primary\" style=\"size: 50px;\" (click)=\"trackShipment()\">\n        Submit\n      </button>\n  </div>\n  <hr>\n  <div *ngIf=\"showTrackingInfo\">\n    <div>\n      <p>\n        <span><b>Delivery To:</b></span><br>\n        {{shipment.recipientAddr1+','+shipment.recipientCity+','+shipment.recipientRegion}}\n      </p>\n    </div>\n    <mat-vertical-stepper orientation=\"vertical\">\n      <mat-step>\n        <ng-template matStepLabel>Package Received for Delivery</ng-template>\n        <p>At {{shipment.shipperCity}} delivery center</p>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Package out for delivery</ng-template>\n          <p>Package was processed to left delivery center</p>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Package reached nearest Hub</ng-template>\n        <p>Package at {{shipment.recipientCity}}</p>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Package Delivered</ng-template>\n        <p>Package was delivered to assigned address</p>\n      </mat-step>\n    </mat-vertical-stepper>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_shippermodule_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/shippermodule/home/home.component */
    "./src/app/components/shippermodule/home/home.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_usertracking_usertracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/usertracking/usertracking.component */
    "./src/app/components/usertracking/usertracking.component.ts");
    /* harmony import */


    var _components_couriermodule_courierhome_courierhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/couriermodule/courierhome/courierhome.component */
    "./src/app/components/couriermodule/courierhome/courierhome.component.ts");
    /* harmony import */


    var _components_create_new_shipment_create_new_shipment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/create-new-shipment/create-new-shipment.component */
    "./src/app/components/create-new-shipment/create-new-shipment.component.ts");
    /* harmony import */


    var _components_editshipment_editshipment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/editshipment/editshipment.component */
    "./src/app/components/editshipment/editshipment.component.ts");
    /* harmony import */


    var _components_couriermodule_viewshipment_viewshipment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/couriermodule/viewshipment/viewshipment.component */
    "./src/app/components/couriermodule/viewshipment/viewshipment.component.ts");
    /* harmony import */


    var _components_couriermodule_courierupdateshipment_courierupdateshipment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/couriermodule/courierupdateshipment/courierupdateshipment.component */
    "./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.ts");

    var routes = [{
      path: '',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
      data: {
        breadcrumb: 'Home'
      },
      children: [{
        path: 'shippingtracking',
        component: _components_usertracking_usertracking_component__WEBPACK_IMPORTED_MODULE_5__["UsertrackingComponent"],
        data: {
          breadcrumb: 'Tracking'
        }
      }]
    }, {
      path: 'courier',
      component: _components_couriermodule_courierhome_courierhome_component__WEBPACK_IMPORTED_MODULE_6__["CourierhomeComponent"],
      data: {
        breadcrumb: 'Courier Module'
      },
      children: [{
        path: 'viewshipment',
        component: _components_couriermodule_viewshipment_viewshipment_component__WEBPACK_IMPORTED_MODULE_9__["ViewshipmentComponent"],
        data: {
          breadcrumb: 'View Shipment'
        }
      }, {
        path: 'updateshipment',
        component: _components_couriermodule_courierupdateshipment_courierupdateshipment_component__WEBPACK_IMPORTED_MODULE_10__["CourierupdateshipmentComponent"],
        data: {
          breadcrumb: 'Update Shipment'
        }
      }]
    }, {
      path: 'shipper',
      component: _components_shippermodule_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      data: {
        breadcrumb: 'Shipper'
      },
      children: [{
        path: 'newshipment',
        component: _components_create_new_shipment_create_new_shipment_component__WEBPACK_IMPORTED_MODULE_7__["CreateNewShipmentComponent"],
        data: {
          breadcrumb: 'Create Shipment'
        }
      }, {
        path: 'editshipment',
        component: _components_editshipment_editshipment_component__WEBPACK_IMPORTED_MODULE_8__["EditshipmentComponent"],
        data: {
          breadcrumb: 'Edit Shipment'
        }
      }, {
        path: 'shippingtracking',
        component: _components_usertracking_usertracking_component__WEBPACK_IMPORTED_MODULE_5__["UsertrackingComponent"],
        data: {
          breadcrumb: 'Tracking'
        }
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css": function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ng-shippingTracking';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_shippermodule_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shippermodule/home/home.component */
    "./src/app/components/shippermodule/home/home.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _components_usertracking_usertracking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/usertracking/usertracking.component */
    "./src/app/components/usertracking/usertracking.component.ts");
    /* harmony import */


    var _components_couriermodule_courierhome_courierhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/couriermodule/courierhome/courierhome.component */
    "./src/app/components/couriermodule/courierhome/courierhome.component.ts");
    /* harmony import */


    var _components_create_new_shipment_create_new_shipment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/create-new-shipment/create-new-shipment.component */
    "./src/app/components/create-new-shipment/create-new-shipment.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_editshipment_editshipment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/editshipment/editshipment.component */
    "./src/app/components/editshipment/editshipment.component.ts");
    /* harmony import */


    var _components_couriermodule_viewshipment_viewshipment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/couriermodule/viewshipment/viewshipment.component */
    "./src/app/components/couriermodule/viewshipment/viewshipment.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _components_couriermodule_courierupdateshipment_courierupdateshipment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/couriermodule/courierupdateshipment/courierupdateshipment.component */
    "./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/confirmDialogComponent/confirmdialog.component */
    "./src/app/components/confirmDialogComponent/confirmdialog.component.ts");
    /* harmony import */


    var _components_breadcrumbs_breadcrumb_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/breadcrumbs/breadcrumb.component */
    "./src/app/components/breadcrumbs/breadcrumb.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"], _components_shippermodule_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_usertracking_usertracking_component__WEBPACK_IMPORTED_MODULE_18__["UsertrackingComponent"], _components_couriermodule_courierhome_courierhome_component__WEBPACK_IMPORTED_MODULE_19__["CourierhomeComponent"], _components_create_new_shipment_create_new_shipment_component__WEBPACK_IMPORTED_MODULE_20__["CreateNewShipmentComponent"], _components_editshipment_editshipment_component__WEBPACK_IMPORTED_MODULE_22__["EditshipmentComponent"], _components_couriermodule_viewshipment_viewshipment_component__WEBPACK_IMPORTED_MODULE_23__["ViewshipmentComponent"], _components_couriermodule_courierupdateshipment_courierupdateshipment_component__WEBPACK_IMPORTED_MODULE_25__["CourierupdateshipmentComponent"], _components_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmDialogComponent"], _components_breadcrumbs_breadcrumb_component__WEBPACK_IMPORTED_MODULE_29__["BreadcrumbComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_components_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmDialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common.service.ts": function srcAppCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService() {
        _classCallCheck(this, CommonService);

        this.shipments = [];
      }

      _createClass(CommonService, [{
        key: "getShippments",
        value: function getShippments() {
          return this.shipments;
        }
      }]);

      return CommonService;
    }();

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/components/breadcrumbs/breadcrumb.component.css": function srcAppComponentsBreadcrumbsBreadcrumbComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".breadcrumb {\n    background: none;\n    font-size: 0.8em;\n    margin: 0;\n}\n.breadcrumb a, .breadcrumb span {\n    color: darkgrey;\n}\n.breadcrumb a:hover, .breadcrumb span:hover {\n    color: dimgrey;\n    text-decoration: none;\n}\n.breadcrumb li {\n    list-style: none;\n    float: left;\n    margin: 5px;\n}\n.breadcrumb li:last-child {\n    margin-right: 20px;\n}\n.breadcrumb li::after {\n    content: \"->\";\n    color: darkgrey;\n}\n.breadcrumb li:last-child::after {\n    content: \"\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBtYXJnaW46IDA7XG59XG4uYnJlYWRjcnVtYiBhLCAuYnJlYWRjcnVtYiBzcGFuIHtcbiAgICBjb2xvcjogZGFya2dyZXk7XG59XG4uYnJlYWRjcnVtYiBhOmhvdmVyLCAuYnJlYWRjcnVtYiBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogZGltZ3JleTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnJlYWRjcnVtYiBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5icmVhZGNydW1iIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5icmVhZGNydW1iIGxpOjphZnRlciB7XG4gICAgY29udGVudDogXCItPlwiO1xuICAgIGNvbG9yOiBkYXJrZ3JleTtcbn1cbi5icmVhZGNydW1iIGxpOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/breadcrumbs/breadcrumb.component.ts": function srcAppComponentsBreadcrumbsBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(router, activatedRoute) {
        _classCallCheck(this, BreadcrumbComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function () {
            _this.breadcrumbs = _this.buildBreadCrumb(_this.activatedRoute.root);
          });
        }
        /**
         * Recursively build breadcrumb according to activated route.
         * @param route
         * @param url
         * @param breadcrumbs
         */

      }, {
        key: "buildBreadCrumb",
        value: function buildBreadCrumb(route) {
          var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          //If no routeConfig is avalailable we are on the root path
          var label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
          var isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
          var path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : ''; // If the route is dynamic route such as ':id', remove it

          var lastRoutePart = path.split('/').pop();
          var isDynamicRoute = lastRoutePart.startsWith(':');

          if (isDynamicRoute && !!route.snapshot) {
            var paramName = lastRoutePart.split(':')[1];
            path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
            label = route.snapshot.params[paramName];
          } //In the routeConfig the complete path is not available,
          //so we rebuild it each time


          var nextUrl = path ? "".concat(url, "/").concat(path) : url;
          var breadcrumb = {
            label: label,
            url: nextUrl
          }; // Only adding route with non-empty label

          var newBreadcrumbs = breadcrumb.label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

          if (route.firstChild) {
            //If we are not on our current path yet,
            //there will be more children to look after, to build our breadcumb
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
          }

          return newBreadcrumbs;
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breadcrumbs/breadcrumb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumb.component.css */
      "./src/app/components/breadcrumbs/breadcrumb.component.css"))["default"]]
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/components/confirmDialogComponent/confirmdialog.component.css": function srcAppComponentsConfirmDialogComponentConfirmdialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-button {\n    margin-left: auto;\n    font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtRGlhbG9nQ29tcG9uZW50L2NvbmZpcm1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpcm1EaWFsb2dDb21wb25lbnQvY29uZmlybWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/confirmDialogComponent/confirmdialog.component.ts": function srcAppComponentsConfirmDialogComponentConfirmdialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function () {
      return ConfirmDialogModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data; // Update view with given values

        this.title = data.title;
        this.message = data.message;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onConfirm",
        value: function onConfirm() {
          // Close the dialog, return true
          this.dialogRef.close(true);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          // Close the dialog, return false
          this.dialogRef.close(false);
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: ConfirmDialogModel,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-confirm-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmdialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmDialogComponent/confirmdialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmdialog.component.css */
      "./src/app/components/confirmDialogComponent/confirmdialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], ConfirmDialogComponent);
    /**
     * Class to represent confirm dialog model.
     *
     * It has been kept here to keep it as part of shared component.
     */

    var ConfirmDialogModel = function ConfirmDialogModel(title, message) {
      _classCallCheck(this, ConfirmDialogModel);

      this.title = title;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/components/couriermodule/courierhome/courierhome.component.css": function srcAppComponentsCouriermoduleCourierhomeCourierhomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VyaWVybW9kdWxlL2NvdXJpZXJob21lL2NvdXJpZXJob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzBGQUN3RjtFQUN4RixPQUFPO0FBQ1Q7O0FBRUE7RUFDRTsrREFDNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJpZXJtb2R1bGUvY291cmllcmhvbWUvY291cmllcmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyO1xufVxuXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/couriermodule/courierhome/courierhome.component.ts": function srcAppComponentsCouriermoduleCourierhomeCourierhomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourierhomeComponent", function () {
      return CourierhomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /** @title Responsive sidenav */


    var CourierhomeComponent = /*#__PURE__*/function () {
      function CourierhomeComponent(changeDetectorRef, media, _router) {
        _classCallCheck(this, CourierhomeComponent);

        this._router = _router;
        this.isOnLandingPage = true;
        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.fillerContent = Array.from({
          length: 50
        }, function () {
          return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(CourierhomeComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return CourierhomeComponent;
    }();

    CourierhomeComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CourierhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-courierhome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./courierhome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/courierhome/courierhome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./courierhome.component.css */
      "./src/app/components/couriermodule/courierhome/courierhome.component.css"))["default"]]
    })], CourierhomeComponent);
    /***/
  },

  /***/
  "./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.css": function srcAppComponentsCouriermoduleCourierupdateshipmentCourierupdateshipmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n.mat-raised-button:hover{\n  background-color:#a7a7a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VyaWVybW9kdWxlL2NvdXJpZXJ1cGRhdGVzaGlwbWVudC9jb3VyaWVydXBkYXRlc2hpcG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJpZXJtb2R1bGUvY291cmllcnVwZGF0ZXNoaXBtZW50L2NvdXJpZXJ1cGRhdGVzaGlwbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICBtYXJnaW46IDA7IFxufVxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNhN2E3YTc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.ts": function srcAppComponentsCouriermoduleCourierupdateshipmentCourierupdateshipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourierupdateshipmentComponent", function () {
      return CourierupdateshipmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common.service */
    "./src/app/common.service.ts");

    var CourierupdateshipmentComponent = /*#__PURE__*/function () {
      function CourierupdateshipmentComponent(commonService, _snackBar) {
        _classCallCheck(this, CourierupdateshipmentComponent);

        this.commonService = commonService;
        this._snackBar = _snackBar;
        this.trackingId = null;
        this.status = 'in-transit';
      }

      _createClass(CourierupdateshipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action);
        }
      }, {
        key: "updateStatus",
        value: function updateStatus() {
          if (this.trackingId > 0 && this.commonService.getShippments().length <= this.trackingId) {
            var index = this.trackingId - 1;
            this.commonService.shipments[index].status = this.status;
            this.openSnackBar('Status Updated', 'close');
          } else {
            this.openSnackBar('Invalid Tracking Id', 'close');
          }
        }
      }]);

      return CourierupdateshipmentComponent;
    }();

    CourierupdateshipmentComponent.ctorParameters = function () {
      return [{
        type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    CourierupdateshipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-courierupdateshipment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./courierupdateshipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./courierupdateshipment.component.css */
      "./src/app/components/couriermodule/courierupdateshipment/courierupdateshipment.component.css"))["default"]]
    })], CourierupdateshipmentComponent);
    /***/
  },

  /***/
  "./src/app/components/couriermodule/viewshipment/viewshipment.component.css": function srcAppComponentsCouriermoduleViewshipmentViewshipmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n  \n  \n  \n  td, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n  }\n  \n  \n  \n  tr:nth-child(even) {\n    background-color: #dddddd;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VyaWVybW9kdWxlL3ZpZXdzaGlwbWVudC92aWV3c2hpcG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsV0FBVztFQUNiOzs7O0VBSUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7OztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VyaWVybW9kdWxlL3ZpZXdzaGlwbWVudC92aWV3c2hpcG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICB0ZCwgdGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/couriermodule/viewshipment/viewshipment.component.ts": function srcAppComponentsCouriermoduleViewshipmentViewshipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewshipmentComponent", function () {
      return ViewshipmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common.service */
    "./src/app/common.service.ts");

    var ViewshipmentComponent = /*#__PURE__*/function () {
      function ViewshipmentComponent(commonService) {
        _classCallCheck(this, ViewshipmentComponent);

        this.commonService = commonService;
        this.shipments = [];
        this.shipments = this.commonService.getShippments();
      }

      _createClass(ViewshipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewshipmentComponent;
    }();

    ViewshipmentComponent.ctorParameters = function () {
      return [{
        type: src_app_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    ViewshipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-viewshipment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewshipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/couriermodule/viewshipment/viewshipment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewshipment.component.css */
      "./src/app/components/couriermodule/viewshipment/viewshipment.component.css"))["default"]]
    })], ViewshipmentComponent);
    /***/
  },

  /***/
  "./src/app/components/create-new-shipment/create-new-shipment.component.css": function srcAppComponentsCreateNewShipmentCreateNewShipmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inline-block-child {\n    display: inline-block;\n    max-width: 500px;\n    text-align: center;\n    margin: 15px;\n}\n\n.parent-div {\n    margin: auto;\n    width: 95%;\n    text-align: center;\n}\n\n.submit-button {\n    height: 75px!important;\n    width: 250px!important;\n    min-width: unset!important;\n    font-size: 24px;\n    margin: auto;\n    margin-bottom: 25px;\n}\n\n.address-class {\n    width: 420px!important;\n    min-width: unset!important;\n}\n\n.float-child {\n    width: 25%;\n    float: left;\n    padding: 20px;\n}\n\n.float-parent {\n    padding: 20px;\n}\n\n.missing-info {\n\n    color: red;\n}\n\n.mat-form-field {\n    margin-left: 10px;\n}\n\n.blink_text\n{\n    animation:1s blinker linear infinite;\n    -webkit-animation:1s blinker linear infinite;\n    -moz-animation:1s blinker linear infinite;\n    color: red;\n}\n\n@-webkit-keyframes blinker\n{  \n    0% { opacity: 1.0; }\n    50% { opacity: 0.0; }\n    100% { opacity: 1.0; }\n}\n\n@keyframes blinker\n{  \n    0% { opacity: 1.0; }\n    50% { opacity: 0.0; }\n    100% { opacity: 1.0; }\n }\n\n.mat-raised-button:hover{\n    background-color:#a7a7a7;\n  }\n\n.form-title{\n      font-weight: bold;\n      font-size: x-large;\n      text-align: center;\n  }\n\n.clear-button {\n      text-align: center;\n      font-size: 16px;\n      margin: auto;\n      min-width: unset!important;\n      height: 35px!important;\n      width: 200px!important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtbmV3LXNoaXBtZW50L2NyZWF0ZS1uZXctc2hpcG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBOztJQUVJLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMseUNBQXlDO0lBQ3pDLFVBQVU7QUFDZDs7QUFTQTs7SUFFSSxLQUFLLFlBQVksRUFBRTtJQUNuQixNQUFNLFlBQVksRUFBRTtJQUNwQixPQUFPLFlBQVksRUFBRTtBQUN6Qjs7QUFFQTs7SUFFSSxLQUFLLFlBQVksRUFBRTtJQUNuQixNQUFNLFlBQVksRUFBRTtJQUNwQixPQUFPLFlBQVksRUFBRTtDQUN4Qjs7QUFFQTtJQUNHLHdCQUF3QjtFQUMxQjs7QUFFQTtNQUNJLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixZQUFZO01BQ1osMEJBQTBCO01BQzFCLHNCQUFzQjtNQUN0QixzQkFBc0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1uZXctc2hpcG1lbnQvY3JlYXRlLW5ldy1zaGlwbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZS1ibG9jay1jaGlsZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweDtcbn1cblxuLnBhcmVudC1kaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGhlaWdodDogNzVweCFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1MHB4IWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IHVuc2V0IWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5hZGRyZXNzLWNsYXNzIHtcbiAgICB3aWR0aDogNDIwcHghaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xufVxuXG4uZmxvYXQtY2hpbGQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmZsb2F0LXBhcmVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1pc3NpbmctaW5mbyB7XG5cbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbi5ibGlua190ZXh0XG57XG4gICAgYW5pbWF0aW9uOjFzIGJsaW5rZXIgbGluZWFyIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOjFzIGJsaW5rZXIgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOjFzIGJsaW5rZXIgbGluZWFyIGluZmluaXRlO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbkAtbW96LWtleWZyYW1lcyBibGlua2VyXG57ICBcbiAgICAwJSB7IG9wYWNpdHk6IDEuMDsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxLjA7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rZXJcbnsgIFxuICAgIDAlIHsgb3BhY2l0eTogMS4wOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXJcbnsgIFxuICAgIDAlIHsgb3BhY2l0eTogMS4wOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxuIH1cblxuIC5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhN2E3YTc7XG4gIH1cblxuICAuZm9ybS10aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNsZWFyLWJ1dHRvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtaW4td2lkdGg6IHVuc2V0IWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMzVweCFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMjAwcHghaW1wb3J0YW50O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/create-new-shipment/create-new-shipment.component.ts": function srcAppComponentsCreateNewShipmentCreateNewShipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewShipmentComponent", function () {
      return CreateNewShipmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_shipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/shipment */
    "./src/app/models/shipment.ts");
    /* harmony import */


    var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../confirmDialogComponent/confirmdialog.component */
    "./src/app/components/confirmDialogComponent/confirmdialog.component.ts");

    var CreateNewShipmentComponent = /*#__PURE__*/function () {
      function CreateNewShipmentComponent(commonService, dialog, router) {
        _classCallCheck(this, CreateNewShipmentComponent);

        this.commonService = commonService;
        this.dialog = dialog;
        this.router = router;
        this.showRestoreShipperInfo = false;
        this.showRestoreRecipientInfo = false;
        this.showShippingConfirmation = false;
        this.missingInformation = false;
        this.errorList = [];
        this.shipment = new _models_shipment__WEBPACK_IMPORTED_MODULE_2__["Shipment"]();
        this.shipmentBackupInfo = new _models_shipment__WEBPACK_IMPORTED_MODULE_2__["Shipment"]();
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
      }

      _createClass(CreateNewShipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitShipment",
        value: function submitShipment() {
          this.errorList = [];
          this.missingInformation = false;

          if (this.shipmentIsValid()) {
            this.showShippingConfirmation = !this.showShippingConfirmation;
            var trackingNumber = this.commonService.getShippments().length + 1;
            this.shipment.trackingNumber = trackingNumber;
            this.shipment.status = 'in-transit';
            this.commonService.shipments.push(this.shipment);
          }
        }
      }, {
        key: "confirmCancelShipment",
        value: function confirmCancelShipment() {
          var _this2 = this;

          var message = "Are you sure you want to cancel the shipment?";
          var dialogData = new _confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              _this2.router.navigate(['/shipper']);
            }
          });
        }
      }, {
        key: "makeAnotherShipment",
        value: function makeAnotherShipment() {
          this.showShippingConfirmation = !this.showShippingConfirmation;
          this.clearShipperForm();
          this.clearRecipientForm();
          this.shipment.packageHeight = null;
          this.shipment.packageWeight = null;
          this.shipment.packageLength = null;
          this.shipment.packageWidth = null;
        }
      }, {
        key: "confirmDialogClearShipperInfo",
        value: function confirmDialogClearShipperInfo() {
          var _this3 = this;

          var message;

          if (this.showRestoreShipperInfo) {
            message = "Are you sure you want to restore all Shipper information? Current information will be lost.";
          } else {
            message = "Are you sure you want to clear all Shipper information?";
          }

          var dialogData = new _confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult && !_this3.showRestoreShipperInfo) {
              _this3.clearShipperForm();
            } else if (dialogResult && _this3.showRestoreShipperInfo) {
              _this3.restoreShipperInfo();
            }
          });
        }
      }, {
        key: "confirmDialogClearRecipientInfo",
        value: function confirmDialogClearRecipientInfo() {
          var _this4 = this;

          var message;

          if (this.showRestoreRecipientInfo) {
            message = "Are you sure you want to restore all Recipient information? Current information will be lost.";
          } else {
            message = "Are you sure you want to clear all Recipient information?";
          }

          var dialogData = new _confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult && !_this4.showRestoreRecipientInfo) {
              _this4.clearRecipientForm();
            } else if (dialogResult && _this4.showRestoreRecipientInfo) {
              _this4.restoreRecipientInfo();
            }
          });
        }
      }, {
        key: "confirmDialogSubmitForShipment",
        value: function confirmDialogSubmitForShipment() {
          var _this5 = this;

          var message = "Are you sure you want to submit this shipment?";
          var dialogData = new _confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(_confirmDialogComponent_confirmdialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            maxWidth: "400px",
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              _this5.submitShipment();
            }
          });
        }
      }, {
        key: "imperialToMetric",
        value: function imperialToMetric() {}
      }, {
        key: "metricToImperial",
        value: function metricToImperial() {}
      }, {
        key: "shipmentIsValid",
        value: function shipmentIsValid() {
          //Shipper Checks
          if (this.shipment.shipperFirstName == "") {
            this.errorList.push("Shipper First name is required. ");
          }

          if (this.shipment.shipperLastName == "") {
            this.errorList.push("Shipper Last name is required. ");
          }

          if (this.shipment.shipperAddr1 == "") {
            this.errorList.push("Shipper Address Line 1 is required. ");
          }

          if (this.shipment.shipperCity == "") {
            this.errorList.push("Shipper City is required. ");
          }

          if (this.shipment.shipperRegion == "") {
            this.errorList.push("Shipper Region is required. ");
          }

          if (this.shipment.shipperPostalCode == "") {
            this.errorList.push("Shipper Postal Code is required (5 digits). ");
          }

          if (this.shipment.shipperPhoneNumber == "") {
            this.errorList.push("Shipper Phone Number is required (10 digits). ");
          } //Recipient Checks


          if (this.shipment.recipientFirstName == "") {
            this.errorList.push("Recipient First name is required. ");
          }

          if (this.shipment.recipientLastName == "") {
            this.errorList.push("Recipient Last name is required. ");
          }

          if (this.shipment.recipientAddr1 == "") {
            this.errorList.push("Recipient Address Line 1 is required. ");
          }

          if (this.shipment.recipientCity == "") {
            this.errorList.push("Recipient City is required. ");
          }

          if (this.shipment.recipientRegion == "") {
            this.errorList.push("Recipient Region is required. ");
          }

          if (this.shipment.recipientPostalCode == "") {
            this.errorList.push("Recipient Postal Code is required (5 digits). ");
          }

          if (this.shipment.recipientPhoneNumber == "") {
            this.errorList.push("Recipient Phone Number is required (10 digits). ");
          } //Package Checks


          if (this.shipment.packageWidth <= 0) {
            this.errorList.push("Package Width is required. ");
          }

          if (this.shipment.packageLength <= 0) {
            this.errorList.push("Package Length is required. ");
          }

          if (this.shipment.packageHeight <= 0) {
            this.errorList.push("Package Height is required. ");
          }

          if (this.shipment.packageWeight <= 0) {
            this.errorList.push("Package Weight is required. ");
          }

          if (this.errorList.length != 0) {
            this.missingInformation = true;
            return false;
          }

          return true;
        }
      }, {
        key: "keyPressAlphaNumeric",
        value: function keyPressAlphaNumeric(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[ a-zA-Z0-9'-]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "keyPressAlpha",
        value: function keyPressAlpha(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[a-zA-Z'-]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "keyPressNumeric",
        value: function keyPressNumeric(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[0-9]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "shippingToSelf",
        value: function shippingToSelf() {
          this.shipment.recipientFirstName = this.shipment.shipperFirstName, this.shipment.recipientLastName = this.shipment.shipperLastName, this.shipment.recipientCompany = this.shipment.shipperCompany, this.shipment.recipientAddr1 = this.shipment.shipperAddr1, this.shipment.recipientAddr2 = this.shipment.shipperAddr2, this.shipment.recipientCity = this.shipment.shipperCity, this.shipment.recipientRegion = this.shipment.shipperRegion, this.shipment.recipientPostalCode = this.shipment.shipperPostalCode, this.shipment.recipientPhoneNumber = this.shipment.shipperPhoneNumber, this.shipment.recipientEmail = this.shipment.shipperEmail;
        }
      }, {
        key: "swapAddresses",
        value: function swapAddresses() {}
      }, {
        key: "clearShipperForm",
        value: function clearShipperForm() {
          this.showRestoreShipperInfo = !this.showRestoreShipperInfo;
          this.shipmentBackupInfo.shipperFirstName = this.shipment.shipperFirstName;
          this.shipmentBackupInfo.shipperLastName = this.shipment.shipperLastName;
          this.shipmentBackupInfo.shipperCompany = this.shipment.shipperCompany;
          this.shipmentBackupInfo.shipperAddr1 = this.shipment.shipperAddr1;
          this.shipmentBackupInfo.shipperAddr2 = this.shipment.shipperAddr2;
          this.shipmentBackupInfo.shipperCity = this.shipment.shipperCity;
          this.shipmentBackupInfo.shipperRegion = this.shipment.shipperRegion;
          this.shipmentBackupInfo.shipperPostalCode = this.shipment.shipperPostalCode;
          this.shipmentBackupInfo.shipperPhoneNumber = this.shipment.shipperPhoneNumber;
          this.shipmentBackupInfo.shipperEmail = this.shipment.shipperEmail;
          this.errorList = [];
          this.missingInformation = false;
          this.shipment.shipperFirstName = "";
          this.shipment.shipperLastName = "";
          this.shipment.shipperCompany = "";
          this.shipment.shipperAddr1 = "";
          this.shipment.shipperAddr2 = "";
          this.shipment.shipperCity = "";
          this.shipment.shipperRegion = "";
          this.shipment.shipperPostalCode = "";
          this.shipment.shipperPhoneNumber = "";
          this.shipment.shipperEmail = "";
        }
      }, {
        key: "clearRecipientForm",
        value: function clearRecipientForm() {
          this.showRestoreRecipientInfo = !this.showRestoreRecipientInfo;
          this.shipmentBackupInfo.recipientFirstName = this.shipment.recipientFirstName;
          this.shipmentBackupInfo.recipientLastName = this.shipment.recipientLastName;
          this.shipmentBackupInfo.recipientCompany = this.shipment.recipientCompany;
          this.shipmentBackupInfo.recipientAddr1 = this.shipment.recipientAddr1;
          this.shipmentBackupInfo.recipientAddr2 = this.shipment.recipientAddr2;
          this.shipmentBackupInfo.recipientCity = this.shipment.recipientCity;
          this.shipmentBackupInfo.recipientRegion = this.shipment.recipientRegion;
          this.shipmentBackupInfo.recipientPostalCode = this.shipment.recipientPostalCode;
          this.shipmentBackupInfo.recipientPhoneNumber = this.shipment.recipientPhoneNumber;
          this.shipmentBackupInfo.recipientEmail = this.shipment.recipientEmail;
          this.errorList = [];
          this.missingInformation = false;
          this.shipment.recipientFirstName = "";
          this.shipment.recipientLastName = "";
          this.shipment.recipientCompany = "";
          this.shipment.recipientAddr1 = "";
          this.shipment.recipientAddr2 = "";
          this.shipment.recipientCity = "";
          this.shipment.recipientRegion = "";
          this.shipment.recipientPostalCode = "";
          this.shipment.recipientPhoneNumber = "";
          this.shipment.recipientEmail = "";
        }
      }, {
        key: "restoreShipperInfo",
        value: function restoreShipperInfo() {
          this.showRestoreShipperInfo = !this.showRestoreShipperInfo;
          this.shipment.shipperFirstName = this.shipmentBackupInfo.shipperFirstName;
          this.shipment.shipperLastName = this.shipmentBackupInfo.shipperLastName;
          this.shipment.shipperCompany = this.shipmentBackupInfo.shipperCompany;
          this.shipment.shipperAddr1 = this.shipmentBackupInfo.shipperAddr1;
          this.shipment.shipperAddr2 = this.shipmentBackupInfo.shipperAddr2;
          this.shipment.shipperCity = this.shipmentBackupInfo.shipperCity;
          this.shipment.shipperRegion = this.shipmentBackupInfo.shipperRegion;
          this.shipment.shipperPostalCode = this.shipmentBackupInfo.shipperPostalCode;
          this.shipment.shipperPhoneNumber = this.shipmentBackupInfo.shipperPhoneNumber;
          this.shipment.shipperEmail = this.shipmentBackupInfo.shipperEmail;
          this.shipmentBackupInfo.shipperFirstName = "";
          this.shipmentBackupInfo.shipperLastName = "";
          this.shipmentBackupInfo.shipperCompany = "";
          this.shipmentBackupInfo.shipperAddr1 = "";
          this.shipmentBackupInfo.shipperAddr2 = "";
          this.shipmentBackupInfo.shipperCity = "";
          this.shipmentBackupInfo.shipperRegion = "";
          this.shipmentBackupInfo.shipperPostalCode = "";
          this.shipmentBackupInfo.shipperPhoneNumber = "";
          this.shipmentBackupInfo.shipperEmail = "";
        }
      }, {
        key: "restoreRecipientInfo",
        value: function restoreRecipientInfo() {
          this.showRestoreRecipientInfo = !this.showRestoreRecipientInfo;
          this.shipment.recipientFirstName = this.shipmentBackupInfo.recipientFirstName;
          this.shipment.recipientLastName = this.shipmentBackupInfo.recipientLastName;
          this.shipment.recipientCompany = this.shipmentBackupInfo.recipientCompany;
          this.shipment.recipientAddr1 = this.shipmentBackupInfo.recipientAddr1;
          this.shipment.recipientAddr2 = this.shipmentBackupInfo.recipientAddr2;
          this.shipment.recipientCity = this.shipmentBackupInfo.recipientCity;
          this.shipment.recipientRegion = this.shipmentBackupInfo.recipientRegion;
          this.shipment.recipientPostalCode = this.shipmentBackupInfo.recipientPostalCode;
          this.shipment.recipientPhoneNumber = this.shipmentBackupInfo.recipientPhoneNumber;
          this.shipment.recipientEmail = this.shipmentBackupInfo.recipientEmail;
          this.shipmentBackupInfo.recipientFirstName = "";
          this.shipmentBackupInfo.recipientLastName = "";
          this.shipmentBackupInfo.recipientCompany = "";
          this.shipmentBackupInfo.recipientAddr1 = "";
          this.shipmentBackupInfo.recipientAddr2 = "";
          this.shipmentBackupInfo.recipientCity = "";
          this.shipmentBackupInfo.recipientRegion = "";
          this.shipmentBackupInfo.recipientPostalCode = "";
          this.shipmentBackupInfo.recipientPhoneNumber = "";
          this.shipmentBackupInfo.recipientEmail = "";
        }
      }]);

      return CreateNewShipmentComponent;
    }();

    CreateNewShipmentComponent.ctorParameters = function () {
      return [{
        type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CreateNewShipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-new-shipment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-new-shipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-new-shipment/create-new-shipment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-new-shipment.component.css */
      "./src/app/components/create-new-shipment/create-new-shipment.component.css"))["default"]]
    })], CreateNewShipmentComponent);
    /***/
  },

  /***/
  "./src/app/components/editshipment/editshipment.component.css": function srcAppComponentsEditshipmentEditshipmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inline-block-child {\n    display: inline-block;\n    max-width: 500px;\n}\n\n.parent-div {\n    margin: auto;\n    margin-top: 20px;\n    width: 95%;\n    padding: 25px;\n}\n\n.submit-button {\n    height: 60px!important;\n    width: 250px!important;\n    min-width: unset!important;\n    font-size: 20px;\n}\n\n.address-class {\n    width: 420px!important;\n    min-width: unset!important;\n}\n\n.float-child {\n    width: 35%;\n    float: left;\n    padding: 10px;\n    margin-bottom: 25px;\n}\n\n.float-parent {\n    padding: 20px;\n}\n\n.missing-info {\n\n    color: red;\n}\n\nmat-form-field {\n    margin-left: 10px;\n}\n\n.mat-raised-button:hover{\n    background-color:#a7a7a7;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0c2hpcG1lbnQvZWRpdHNoaXBtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRzaGlwbWVudC9lZGl0c2hpcG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmxpbmUtYmxvY2stY2hpbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4ucGFyZW50LWRpdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA2MHB4IWltcG9ydGFudDtcbiAgICB3aWR0aDogMjUwcHghaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFkZHJlc3MtY2xhc3Mge1xuICAgIHdpZHRoOiA0MjBweCFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiB1bnNldCFpbXBvcnRhbnQ7XG59XG5cbi5mbG9hdC1jaGlsZCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mbG9hdC1wYXJlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5taXNzaW5nLWluZm8ge1xuXG4gICAgY29sb3I6IHJlZDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTdhN2E3O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/editshipment/editshipment.component.ts": function srcAppComponentsEditshipmentEditshipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditshipmentComponent", function () {
      return EditshipmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_shipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/shipment */
    "./src/app/models/shipment.ts");
    /* harmony import */


    var src_app_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common.service */
    "./src/app/common.service.ts");

    var EditshipmentComponent = /*#__PURE__*/function () {
      function EditshipmentComponent(commonService) {
        _classCallCheck(this, EditshipmentComponent);

        this.commonService = commonService;
        this.editingAShipment = false;
        this.missingInformation = false;
        this.errorList = [];
        this.shipment = new src_app_models_shipment__WEBPACK_IMPORTED_MODULE_2__["Shipment"]();
        this.shipments = [];
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        this.shipments = this.commonService.getShippments();
      }

      _createClass(EditshipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editShipment",
        value: function editShipment(shipmentToEdit) {
          this.editingAShipment = !this.editingAShipment;
          this.shipment = shipmentToEdit;
        }
      }, {
        key: "cancelEditing",
        value: function cancelEditing() {
          this.editingAShipment = !this.editingAShipment;
        }
      }, {
        key: "saveEditChanges",
        value: function saveEditChanges() {
          this.errorList = [];
          this.missingInformation = false;

          if (this.shipmentIsValid()) {
            this.editingAShipment = !this.editingAShipment;
            var index = this.shipment.trackingNumber - 1;
            this.commonService.shipments[index] = this.shipment;
          }
        }
      }, {
        key: "shipmentIsValid",
        value: function shipmentIsValid() {
          //Shipper Checks
          if (this.shipment.shipperFirstName == "") {
            this.errorList.push("Shipper First name is required. ");
          }

          if (this.shipment.shipperLastName == "") {
            this.errorList.push("Shipper Last name is required. ");
          }

          if (this.shipment.shipperAddr1 == "") {
            this.errorList.push("Shipper Address Line 1 is required. ");
          }

          if (this.shipment.shipperCity == "") {
            this.errorList.push("Shipper City is required. ");
          }

          if (this.shipment.shipperRegion == "") {
            this.errorList.push("Shipper Region is required. ");
          }

          if (this.shipment.shipperPostalCode == "") {
            this.errorList.push("Shipper Postal Code is required (5 digits). ");
          }

          if (this.shipment.shipperPhoneNumber == "") {
            this.errorList.push("Shipper Phone Number is required (10 digits). ");
          } //Recipient Checks


          if (this.shipment.recipientFirstName == "") {
            this.errorList.push("Recipient First name is required. ");
          }

          if (this.shipment.recipientLastName == "") {
            this.errorList.push("Recipient Last name is required. ");
          }

          if (this.shipment.recipientAddr1 == "") {
            this.errorList.push("Recipient Address Line 1 is required. ");
          }

          if (this.shipment.recipientCity == "") {
            this.errorList.push("Recipient City is required. ");
          }

          if (this.shipment.recipientRegion == "") {
            this.errorList.push("Recipient Region is required. ");
          }

          if (this.shipment.recipientPostalCode == "") {
            this.errorList.push("Recipient Postal Code is required (5 digits). ");
          }

          if (this.shipment.recipientPhoneNumber == "") {
            this.errorList.push("Recipient Phone Number is required (10 digits). ");
          } //Package Checks


          if (this.shipment.packageWidth <= 0) {
            this.errorList.push("Package Width is required. ");
          }

          if (this.shipment.packageLength <= 0) {
            this.errorList.push("Package Length is required. ");
          }

          if (this.shipment.packageHeight <= 0) {
            this.errorList.push("Package Height is required. ");
          }

          if (this.shipment.packageWeight <= 0) {
            this.errorList.push("Package Weight is required. ");
          }

          if (this.errorList.length != 0) {
            this.missingInformation = true;
            return false;
          }

          return true;
        }
      }, {
        key: "keyPressAlphaNumeric",
        value: function keyPressAlphaNumeric(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[ a-zA-Z0-9'-]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "keyPressAlpha",
        value: function keyPressAlpha(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[a-zA-Z'-]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "keyPressNumeric",
        value: function keyPressNumeric(event) {
          var key = String.fromCharCode(event.keyCode); // Allow numbers, alpahbets, space, underscore

          if (/[0-9]/.test(key)) {
            return true;
          } else {
            event.preventDefault();
            return false;
          }
        }
      }, {
        key: "shippingToSelf",
        value: function shippingToSelf() {
          this.shipment.recipientFirstName = this.shipment.shipperFirstName, this.shipment.recipientLastName = this.shipment.shipperLastName, this.shipment.recipientCompany = this.shipment.shipperCompany, this.shipment.recipientAddr1 = this.shipment.shipperAddr1, this.shipment.recipientAddr2 = this.shipment.shipperAddr2, this.shipment.recipientCity = this.shipment.shipperCity, this.shipment.recipientRegion = this.shipment.shipperRegion, this.shipment.recipientPostalCode = this.shipment.shipperPostalCode, this.shipment.recipientPhoneNumber = this.shipment.shipperPhoneNumber, this.shipment.recipientEmail = this.shipment.shipperEmail;
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.errorList = [];
          this.missingInformation = false;
          this.shipment.shipperFirstName = "";
          this.shipment.shipperLastName = "";
          this.shipment.shipperCompany = "", this.shipment.shipperAddr1 = "", this.shipment.shipperAddr2 = "", this.shipment.shipperCity = "", this.shipment.shipperRegion = "", this.shipment.shipperPostalCode = "", this.shipment.shipperPhoneNumber = "", this.shipment.shipperEmail = "", this.shipment.recipientFirstName = "", this.shipment.recipientLastName = "", this.shipment.recipientCompany = "", this.shipment.recipientAddr1 = "", this.shipment.recipientAddr2 = "", this.shipment.recipientCity = "", this.shipment.recipientRegion = "", this.shipment.recipientPostalCode = "", this.shipment.recipientPhoneNumber = "", this.shipment.recipientEmail = "", this.shipment.packageWidth = null, this.shipment.packageLength = null, this.shipment.packageHeight = null, this.shipment.packageWeight = null;
        }
      }]);

      return EditshipmentComponent;
    }();

    EditshipmentComponent.ctorParameters = function () {
      return [{
        type: src_app_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    EditshipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editshipment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editshipment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editshipment/editshipment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editshipment.component.css */
      "./src/app/components/editshipment/editshipment.component.css"))["default"]]
    })], EditshipmentComponent);
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.css": function srcAppComponentsLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-button-container{\n  text-align: center;\n  opacity:0.8;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-raised-button:hover{\n  background-color:#a7a7a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTowLjg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNhN2E3YTc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/landing/landing.component.ts": function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent(_router) {
        _classCallCheck(this, LandingComponent);

        this._router = _router;
        this.router = _router.url;
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/components/landing/landing.component.css"))["default"]]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/components/shippermodule/home/home.component.css": function srcAppComponentsShippermoduleHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGlwcGVybW9kdWxlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhFQUE4RTtFQUM5RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTswRkFDd0Y7RUFDeEYsT0FBTztBQUNUOztBQUVBO0VBQ0U7K0RBQzZEO0VBQzdELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGlwcGVybW9kdWxlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shippermodule/home/home.component.ts": function srcAppComponentsShippermoduleHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /** @title Responsive sidenav */


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(changeDetectorRef, media, _router) {
        _classCallCheck(this, HomeComponent);

        this._router = _router;
        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.fillerContent = Array.from({
          length: 50
        }, function () {
          return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(HomeComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'homeComponent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shippermodule/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/shippermodule/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/usertracking/usertracking.component.css": function srcAppComponentsUsertrackingUsertrackingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n.mat-raised-button:hover{\n  background-color:#a7a7a7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VydHJhY2tpbmcvdXNlcnRyYWNraW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VydHJhY2tpbmcvdXNlcnRyYWNraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXG4gIG1hcmdpbjogMDsgXG59XG4ubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6I2E3YTdhNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/usertracking/usertracking.component.ts": function srcAppComponentsUsertrackingUsertrackingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsertrackingComponent", function () {
      return UsertrackingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common.service */
    "./src/app/common.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var src_app_models_shipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/shipment */
    "./src/app/models/shipment.ts");

    var UsertrackingComponent = /*#__PURE__*/function () {
      function UsertrackingComponent(commonService, _snackBar) {
        _classCallCheck(this, UsertrackingComponent);

        this.commonService = commonService;
        this._snackBar = _snackBar;
        this.showTrackingInfo = false;
        this.trackingId = null;
        this.shipment = new src_app_models_shipment__WEBPACK_IMPORTED_MODULE_4__["Shipment"]();
      }

      _createClass(UsertrackingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action);
        }
      }, {
        key: "trackShipment",
        value: function trackShipment() {
          if (this.trackingId != null) {
            for (var i = 0; i < this.commonService.shipments.length; i++) {
              if (this.commonService.shipments[i].trackingNumber == this.trackingId) {
                this.shipment = this.commonService.shipments[i];
              }
            }
          }

          if (this.shipment.trackingNumber != this.trackingId) {
            this.openSnackBar('Invalid tracking id', 'close');
          }

          if (this.trackingId == null) {
            this.openSnackBar('Please enter tracking id', 'close');
          }
        }
      }]);

      return UsertrackingComponent;
    }();

    UsertrackingComponent.ctorParameters = function () {
      return [{
        type: src_app_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    UsertrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usertracking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usertracking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usertracking/usertracking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usertracking.component.css */
      "./src/app/components/usertracking/usertracking.component.css"))["default"]]
    })], UsertrackingComponent);
    /***/
  },

  /***/
  "./src/app/models/shipment.ts": function srcAppModelsShipmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Shipment", function () {
      return Shipment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Shipment = function Shipment() {
      _classCallCheck(this, Shipment);

      this.shipperFirstName = "";
      this.shipperLastName = "";
      this.shipperCompany = "";
      this.shipperAddr1 = "";
      this.shipperAddr2 = "";
      this.shipperCity = "";
      this.shipperRegion = "";
      this.shipperPostalCode = "";
      this.shipperCountry = "";
      this.shipperPhoneNumber = "";
      this.shipperEmail = "";
      this.recipientFirstName = "";
      this.recipientLastName = "";
      this.recipientCompany = "";
      this.recipientAddr1 = "";
      this.recipientAddr2 = "";
      this.recipientCity = "";
      this.recipientRegion = "";
      this.recipientPostalCode = "";
      this.recipientCountry = "";
      this.recipientPhoneNumber = "";
      this.recipientEmail = "";
      this.packageWidth = null;
      this.packageLength = null;
      this.packageHeight = null;
      this.packageWeight = null;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dhruv/Downloads/SWE632/ng-shiping-tracking/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
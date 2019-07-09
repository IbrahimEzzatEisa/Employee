(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n    <app-employees></app-employees>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sc';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/employee.service */ "./src/app/shared/employee.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__["EmployeesComponent"],
                _employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"]
            ],
            providers: [_shared_employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n    <thead>\n        <th>Name</th>\n        <th>Position</th>\n        <th>Mobile</th>\n        <th></th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let emp of list\">\n            <td (click)=\"onEdit(emp)\"> {{emp.empCode}} - {{emp.fullName}}</td>\n            <td (click)=\"onEdit(emp)\">{{emp.position}}</td>\n            <td (click)=\"onEdit(emp)\">{{emp.mobile}}</td>\n\n            <td>\n                <a class=\"btn text-danger\" (click)=\"onDelete(emp.id)\"> <i class=\"fa fa-trash\"></i></a>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(service, firebasestore, toastr) {
        this.service = service;
        this.firebasestore = firebasestore;
        this.toastr = toastr;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getEmployees().subscribe(function (actionArray) {
            _this.list = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.service.formData = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (id) {
        if (confirm("aAre you sure to delete this Employee ?")) {
            this.firebasestore.doc('visitor/' + id).delete();
            this.toastr.warning('Deleted Successfully', 'Okay');
        }
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " input.ng-touched.ng-invalid {\n     border-color: rgb(248, 170, 170);\n }\n \n div.validation-error {\n     width: 100%;\n     margin-top: .25rem;\n     font-size: 80%;\n     color: rgba(126, 71, 71, 0.933);\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSSxnQ0FBZ0M7Q0FDcEM7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsa0JBQWtCO0tBQ2xCLGNBQWM7S0FDZCwrQkFBK0I7Q0FDbkMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgICBib3JkZXItY29sb3I6IHJnYigyNDgsIDE3MCwgMTcwKTtcbiB9XG4gXG4gZGl2LnZhbGlkYXRpb24tZXJyb3Ige1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgbWFyZ2luLXRvcDogLjI1cmVtO1xuICAgICBmb250LXNpemU6IDgwJTtcbiAgICAgY29sb3I6IHJnYmEoMTI2LCA3MSwgNzEsIDAuOTMzKTtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/*!************************************************************!*\
  !*** ./src/app/employees/employee/employee.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\" display-4\"> EMP .Register </h1>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n    <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n\n    <div class=\"form-group\">\n        <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"FullName\" required>\n        <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">this field is required</div>\n    </div>\n    <div class=\"form-group\">\n        <input name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"position\" required>\n        <div *ngIf=\"position.invalid && position.touched\" class=\"validation-error\">this field is required</div>\n\n    </div>\n\n    <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n            <input name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"empCode\" required>\n            <div *ngIf=\"empCode.invalid && empCode.touched\" class=\"validation-error\">this field is required</div>\n\n        </div>\n        <div class=\"form-group col-md-6\">\n            <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"mobile\" required>\n            <div *ngIf=\"mobile.invalid && mobile.touched\" class=\"validation-error\">this field is required</div>\n\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">SUBMIT</button>\n    </div>\n\n\n</form>"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(service, firestore, toastr) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.restForm();
    };
    EmployeeComponent.prototype.restForm = function (form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            mobile: '',
            empCode: '',
        };
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null)
            this.firestore.collection('visitor').add(data);
        else
            this.firestore.doc('visitor/' + form.value.id).update(data);
        this.toastr.info('Update Successfully', 'Thanks');
        this.restForm(form);
        this.toastr.success("Submitted successfully", "Employees . Register");
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-5\">\n        <app-employee></app-employee>\n    </div>\n    <div class=\"col-md-7\">\n        <app-employee-list></app-employee-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () { };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(firebasestore) {
        this.firebasestore = firebasestore;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.firebasestore.collection('visitor').snapshotChanges();
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCuyKIRxDXWy-xahsvhbD03qiBJwgEzLxQ",
        authDomain: "visitor-84bf7.firebaseapp.com",
        databaseURL: "https://visitor-84bf7.firebaseio.com",
        projectId: "visitor-84bf7",
        storageBucket: "visitor-84bf7.appspot.com",
        messagingSenderId: "8590859017",
        appId: "1:8590859017:web:7800038991fb8c01"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/sc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
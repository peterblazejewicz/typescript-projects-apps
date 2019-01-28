"use strict";
/// <reference path="../model/user.ts" />
var manager;
(function (manager) {
    var app;
    (function (app) {
        var components;
        (function (components) {
            var AppComponent = /** @class */ (function () {
                function AppComponent(container) {
                    this.container = container;
                }
                AppComponent.prototype.init = function () {
                    var user = { firstName: "Jonh", lastName: "Doe" };
                    var div = document.createElement("div");
                    div.textContent = "Hello " + user.firstName + " " + user.lastName + "!";
                    this.container.appendChild(div);
                };
                return AppComponent;
            }());
            components.AppComponent = AppComponent;
        })(components = app.components || (app.components = {}));
    })(app = manager.app || (manager.app = {}));
})(manager || (manager = {}));
/// <reference path="./app/components/app.component.ts"/>
var apps;
(function (apps) {
    var Viewer;
    (function (Viewer) {
        window.addEventListener("load", function (e) {
            var target = document.querySelector("div");
            var app = new manager.app.components.AppComponent(target);
            app.init();
        });
    })(Viewer = apps.Viewer || (apps.Viewer = {}));
})(apps || (apps = {}));
//# sourceMappingURL=manager.js.map
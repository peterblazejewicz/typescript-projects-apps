"use strict";"use strict";
var shared;
(function (shared) {
    var components;
    (function (components) {
        var DefaultAppComponent = /** @class */ (function () {
            function DefaultAppComponent(container) {
                this.container = container;
            }
            return DefaultAppComponent;
        }());
        components.DefaultAppComponent = DefaultAppComponent;
    })(components = shared.components || (shared.components = {}));
})(shared || (shared = {}));
//# sourceMappingURL=shared.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var viewer;
(function (viewer) {
    var app;
    (function (app) {
        var components;
        (function (components) {
            var AppComponent = /** @class */ (function (_super) {
                __extends(AppComponent, _super);
                function AppComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                AppComponent.prototype.init = function () {
                    var user = { firstName: "Jonh", lastName: "Doe" };
                    var div = document.createElement("div");
                    div.textContent = "Hello " + user.firstName + " " + user.lastName + "!";
                    this.container.appendChild(div);
                };
                return AppComponent;
            }(shared.components.DefaultAppComponent));
            components.AppComponent = AppComponent;
        })(components = app.components || (app.components = {}));
    })(app = viewer.app || (viewer.app = {}));
})(viewer || (viewer = {}));
/// <reference path="./app/components/app.component.ts"/>
var apps;
(function (apps) {
    var Viewer;
    (function (Viewer) {
        window.addEventListener("load", function (e) {
            var target = document.querySelector("div");
            var app = new viewer.app.components.AppComponent(target);
            app.init();
        });
    })(Viewer = apps.Viewer || (apps.Viewer = {}));
})(apps || (apps = {}));
//# sourceMappingURL=viewer.js.map
"use strict";
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
                    var user = {
                        firstName: "Jonh",
                        lastName: "Doe"
                    };
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
//# sourceMappingURL=app.component.js.map
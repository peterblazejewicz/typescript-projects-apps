"use strict";
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
//# sourceMappingURL=main.js.map
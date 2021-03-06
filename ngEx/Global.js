"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core");
var NgServices_1 = require("./NgServices");
exports.providers = [];
exports.servicesProviders = [];
var isDebug = false;
function addPipe(pipe, metadata) {
    exports.providers.push({ provide: core_1.PLATFORM_PIPES, useValue: [pipe], multi: true });
}
function addDirective(directive, metadata) {
    exports.providers.push({ provide: core_1.PLATFORM_DIRECTIVES, useValue: [directive], multi: true });
}
function addComponent(component, metadata) {
    if (isDebug) {
        addDebugStyles(metadata, component);
    }
    exports.providers.push({ provide: core_1.PLATFORM_DIRECTIVES, useValue: [component], multi: true });
}
function addService(service, metadata) {
    exports.servicesProviders.push(service);
    //providers.push(service);
}
function addDebugStyles(metadata, target) {
    if (!metadata.styles) {
        metadata.styles = [];
    }
    metadata.styles.push("\n        :host{\n            display: block;\n            border: 3px solid red;\n        }\n    ");
    Reflect.defineMetadata('annotations', [metadata], target);
}
function debugMode() {
    isDebug = true;
}
exports.debugMode = debugMode;
function Global() {
    return function (target) {
        Reflect.getMetadata('annotations', target)
            .forEach(function (a) {
            if (a.constructor.name === 'InjectableMetadata') {
                addService(target, a);
            }
            else if (a.constructor.name === 'PipeMetadata') {
                addPipe(target, a);
            }
            else if (a.constructor.name === 'DirectiveMetadata') {
                addDirective(target, a);
            }
            else if (a.constructor.name === 'ComponentMetadata') {
                addComponent(target, a);
            }
        });
        return target;
    };
}
exports.Global = Global;
function myBootstrap(type, prvs) {
    if (prvs === void 0) { prvs = []; }
    exports.providers.push(exports.servicesProviders);
    return platform_browser_dynamic_1.bootstrap(type, exports.providers.concat(prvs))
        .then(function (cmpRef) {
        NgServices_1.ngServices.injector = cmpRef.injector._view.parentInjector;
        //ngExOnInit
        exports.servicesProviders.forEach(function (serviceClass) {
            var service = NgServices_1.ngServices.injector.get(serviceClass);
            if (service.ngExOnInit) {
                service.ngExOnInit();
            }
        });
    });
}
exports.myBootstrap = myBootstrap;
//# sourceMappingURL=Global.js.map
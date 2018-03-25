"use strict";
exports.__esModule = true;
var HandlerA = /** @class */ (function () {
    function HandlerA() {
        console.log('Handler A activated');
    }
    return HandlerA;
}());
exports.HandlerA = HandlerA;
var HandlerStandard = /** @class */ (function () {
    function HandlerStandard(message) {
        console.log('Default Handler');
    }
    return HandlerStandard;
}());
exports.HandlerStandard = HandlerStandard;
var ResponseService = /** @class */ (function () {
    function ResponseService() {
        this.handler = this.setDefaultHandler(HandlerStandard, 'instanziated standard handler');
        this.handler(true, HandlerA);
        this.handler(false, HandlerA);
    }
    ResponseService.prototype.setDefaultHandler = function (standard, message) {
        /*      return function (bool, handler) {
        
                    if(bool) {
                        return new handler();
                    } else {
                        return standard();
                    }
                }
        */
        return function (bool, handler) { return bool ? new handler() : standard(message); };
    };
    return ResponseService;
}());
exports.ResponseService = ResponseService;
new ResponseService();

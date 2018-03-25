var HandlerA = /** @class */ (function () {
    function HandlerA() {
        console.log('Handler A activated');
    }
    return HandlerA;
}());

var HandlerStandard = /** @class */ (function () {
    function HandlerStandard(message) {
        console.log('Default Handler');
    }
    return HandlerStandard;
}());

var ResponseService = /** @class */ (function () {

    function ResponseService() {
        this.handler = this.setDefaultHandler(HandlerStandard, 'instanziated standard handler');
        this.handler(true, HandlerA);
        this.handler(false, HandlerA);
    }

    ResponseService.prototype.setDefaultHandler = function (standard, message) {
        return function (bool, handler) {
            return bool ? new handler(message) : standard(message);
        };
    };
    
    return ResponseService;
}());

new ResponseService();

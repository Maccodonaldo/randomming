
class HandlerA {
    constructor(){
        console.log('Handler A activated')
    }
}

class HandlerStandard {
    constructor(message) {
        console.log('Default Handler')
    }
}


class ResponseService {
    handler: any;

    constructor() {
        this.handler = this.setDefaultHandler(HandlerStandard, 'instanziated standard handler')
        this.handler(true, HandlerA) 
        this.handler(false, HandlerA) 
    }

    setDefaultHandler(standard: any, message: string) {
        return function (bool, handler) {
            return bool ? new handler(message) : standard(message)
        }
    }
    
}

new ResponseService();

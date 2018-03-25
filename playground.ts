
export class HandlerA {
    constructor(){
        console.log('Handler A activated')
    }
}

export class HandlerStandard {
    constructor(message) {
        console.log('Default Handler')
    }
}


export class ResponseService {
    handler: any;

    constructor() {
        this.handler = this.setDefaultHandler(HandlerStandard, 'instanziated standard handler')
        this.handler(true, HandlerA) 
        this.handler(false, HandlerA) 
    }

    setDefaultHandler(standard: any, message: string) {

/*      return function (bool, handler) {

            if(bool) {
                return new handler();
            } else {
                return standard();
            }
        } 
*/
        return (bool, handler) => bool ? new handler() : standard(message)
    }
    
}

new ResponseService();

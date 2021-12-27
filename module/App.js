'use strict';

export default class App {
    constructor() {
        
    }

    scopeTest(message) {
        if (!message) {
            console.log('App');
        } else {
            console.log(message);
        }
    }
};

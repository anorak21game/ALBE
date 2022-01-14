'use strict';

export default class DocumentManipulation {
    constructor() {
        
    }

    createElement(tag, className) {
        let element = document.createElement(tag);
        if (className) element.classList.add(className);
        
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }
};

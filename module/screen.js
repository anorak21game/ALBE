'use strict';

import DocumentManipulation from './documentManipulation.js';

export default class Screen extends DocumentManipulation {
    constructor() {
        super();

        this.root = this.getElement('#root');
        this.screen = this.createElement('div', 'screen');

        this.root.append(this.screen);
    }
};

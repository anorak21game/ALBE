'use strict';

import App from '../module/App.js';
import Layer from '../module/Layer.js';
import Block from '../module/Block.js';
import Element from '../module/Element.js';

const testApp = new App();
const testLayer = new Layer();
const testBlock = new Block();
const testElemnt = new Element();

testApp.scopeTest();
testLayer.scopeTest('Layer');
testBlock.scopeTest('Block');
testElemnt.scopeTest('Element');

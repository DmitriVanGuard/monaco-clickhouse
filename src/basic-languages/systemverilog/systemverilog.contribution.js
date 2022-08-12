'use strict';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var __contribution_1 = require('../_.contribution');
(0, __contribution_1.registerLanguage)({
	id: 'systemverilog',
	extensions: ['.sv', '.svh'],
	aliases: ['SV', 'sv', 'SystemVerilog', 'systemverilog'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/systemverilog/systemverilog'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./systemverilog');
			});
		}
	}
});
(0, __contribution_1.registerLanguage)({
	id: 'verilog',
	extensions: ['.v', '.vh'],
	aliases: ['V', 'v', 'Verilog', 'verilog'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/systemverilog/systemverilog'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./systemverilog');
			});
		}
	}
});

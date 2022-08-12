'use strict';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var __contribution_1 = require('../_.contribution');
(0, __contribution_1.registerLanguage)({
	id: 'c',
	extensions: ['.c', '.h'],
	aliases: ['C', 'c'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/cpp/cpp'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./cpp');
			});
		}
	}
});
(0, __contribution_1.registerLanguage)({
	id: 'cpp',
	extensions: ['.cpp', '.cc', '.cxx', '.hpp', '.hh', '.hxx'],
	aliases: ['C++', 'Cpp', 'cpp'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/cpp/cpp'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./cpp');
			});
		}
	}
});

'use strict';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var __contribution_1 = require('../_.contribution');
(0, __contribution_1.registerLanguage)({
	id: 'bat',
	extensions: ['.bat', '.cmd'],
	aliases: ['Batch', 'bat'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/bat/bat'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./bat');
			});
		}
	}
});

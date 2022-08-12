'use strict';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var __contribution_1 = require('../_.contribution');
(0, __contribution_1.registerLanguage)({
	id: 'javascript',
	extensions: ['.js', '.es6', '.jsx', '.mjs', '.cjs'],
	firstLine: '^#!.*\\bnode',
	filenames: ['jakefile'],
	aliases: ['JavaScript', 'javascript', 'js'],
	mimetypes: ['text/javascript'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/javascript/javascript'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./javascript');
			});
		}
	}
});

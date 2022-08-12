'use strict';
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var __contribution_1 = require('../_.contribution');
(0, __contribution_1.registerLanguage)({
	id: 'html',
	extensions: ['.html', '.htm', '.shtml', '.xhtml', '.mdoc', '.jsp', '.asp', '.aspx', '.jshtm'],
	aliases: ['HTML', 'htm', 'html', 'xhtml'],
	mimetypes: ['text/html', 'text/x-jshtm', 'text/template', 'text/ng-template'],
	loader: function () {
		if (AMD) {
			return new Promise(function (resolve, reject) {
				require(['vs/basic-languages/html/html'], resolve, reject);
			});
		} else {
			return Promise.resolve().then(function () {
				return require('./html');
			});
		}
	}
});

'use strict'

var repeat = require('lodash.repeat')

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string')
	}

	opts = opts || {}
	opts.space = opts.space || 2

	str = str.replace(/^\t/gm, repeat(' ', opts.space))

	return str
}

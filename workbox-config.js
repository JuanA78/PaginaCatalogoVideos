module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpeg,html,js,json,mp4}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
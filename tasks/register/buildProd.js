module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'concat',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};

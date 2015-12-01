var gulp = require('gulp');
var mocha = require('gulp-mocha');

var config = {
    paths: {
        testjs: './tests/test.js',
        files: './*.js'
    }
};

gulp.task('watch', () => {
    gulp.watch(config.paths.testjs, ['tests']);
    gulp.watch(config.paths.files, ['tests']);
});

gulp.task('tests', function(){
    return gulp.src(config.paths.testjs, {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['tests', 'watch']);



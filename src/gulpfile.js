var gulp = require('gulp');
var sass = require('gulp-sass');

var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('jasmine', function() {
  return gulp.src(['src/app/**/*.js', 'spec/**/*.spec.js'])
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('scss', function() {
  gulp.src('resources/sass/global.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
  gulp.run("scss");

  gulp.watch('resources/sass/**/*.scss', function(event) {
    gulp.run('scss');
  });
});

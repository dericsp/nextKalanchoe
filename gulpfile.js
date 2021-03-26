const imagemin = require('gulp-imagemin');
const gulp = require('gulp');

function defaultTask(cb) {
    gulp.src('public/*')
  .pipe(imagemin())
  .pipe(gulp.dest('public/'))
    
    cb();
}

exports.default = defaultTask
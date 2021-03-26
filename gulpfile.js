const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');


gulp.task('minify-css', () => {
    return gulp.src('components/*.css')
      .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
    .pipe(gulp.dest('components'));
  });
  
function defaultTask(cb) {
//     gulp.src('public/*')
//   .pipe(imagemin())
//   .pipe(gulp.dest('public/'))
    
    cb();
}

exports.default = defaultTask
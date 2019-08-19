var gulp = require('gulp');

gulp.task('task-name', function () {
    return gulp.src('README.md') 
      .pipe(gulp.dest('./build')) 
  })
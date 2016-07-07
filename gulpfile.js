var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('transpile', function () {
    return gulp.src(['ES6/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

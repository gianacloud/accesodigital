let gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-clean-css'),
    header = require('gulp-header');

var banner = ['/**',
  ' * [PLENCO] Diego Mariano Plencovich',
  ' * SOSRemoto.com @version v10.2017',
  ' * @link https://plen.co',
  ' * PRODUCTION - Update: ${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}',
  ' */',
  ''].join('\n');

gulp.task('all-js', function () {
    return gulp.src([
        './_resources/assets/js/jquery-3.2.1.js',
        './_resources/assets/bootstrap/js/bootstrap.js',
        './_resources/assets/js/main.js'
    ],  {base: './'})
    .pipe(concat('./assets/js/bundle.js'))
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(gulp.dest('./'))
});

gulp.task('all-css', function () {
    return gulp.src([
        './_resources/assets/bootstrap/css/bootstrap.css',
        './_resources/assets/font-awesome/css/font-awesome.css',
        './_resources/assets/style.css',
    ],  {base: './'})
    .pipe(concat('./assets/css/styles.css'))
    .pipe(minifycss())
    .pipe(header(banner))
    .pipe(gulp.dest('./'))
});

gulp.task('minify-all', gulp.series('all-js', 'all-css'));

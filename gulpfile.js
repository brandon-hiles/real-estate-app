const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const reload = browserSync.reload
var exec = require('child_process').exec;

gulp.task('default', ['styles', 'webpack', 'browser-sync'], () => {
  gulp.watch('./src/sass/**/*', ['styles'])
  gulp.watch('./src/js/client/**/*', ['webpack'])
  gulp.watch(['./public/**/*', './public/*', '!public/js/client/**/.#*js', '!public/css/**/.#*css']).on('change', reload)
})

gulp.task('styles', () => {
  gulp.src('src/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', ['styles'], function () {

  browserSync.init({
        server: './public',
        notify: false,
        open: false //change this to true if you want the broser to open automatically
    });
})

gulp.task('webpack', (cb) => {
  exec('webpack', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
})

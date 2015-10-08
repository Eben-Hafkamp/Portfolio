// /////////////////////////////////////////////////////////
// Required
////////////////////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    csslint = require('gulp-csslint');


// /////////////////////////////////////////////////////////
// Scripts Task
////////////////////////////////////////////////////////////

gulp.task('scripts', function() {
    gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
        .pipe(plumber())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(reload({stream: true}));
});

// /////////////////////////////////////////////////////////
// Compass / SASS Tasks
////////////////////////////////////////////////////////////

 gulp.task('compass', function(){
     gulp.src('app/scss/style.scss')
         .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
         .pipe(compass({
             config_file: './config.rb',
             css: 'app/css',
             sass: 'app/scss',
             require: ['susy']
         }))
         .pipe(autoprefixer('last 2 versions'))
         .pipe(csslint())
         .pipe(csslint.reporter())
         .pipe(sourcemaps.write())
     .pipe(gulp.dest('app/css/'))
     .pipe(reload({stream: true}));
 });


// gulp.task('compass', function() {
//   gulp.src('/app/scss/*.scss')
//       .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
//       .pipe(compass({
//           css: 'app/css',
//           sass: 'app/scss',
//           image: 'app/img'
//       }))
//       .pipe(autoprefixer('last 2 versions'))
//   .pipe(gulp.dest('app/css'))
//   .pipe(reload({stream: true}));;
// });


// /////////////////////////////////////////////////////////
// HTML Tasks
////////////////////////////////////////////////////////////

gulp.task('html', function() {
    gulp.src('app/**/*.html')
    .pipe(reload({stream: true}));
});

// /////////////////////////////////////////////////////////
// Browser-Sync Tasks
////////////////////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './app/'
        }
    });
});

// /////////////////////////////////////////////////////////
// Watch Tasks
////////////////////////////////////////////////////////////

gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/scss/**/*.scss', ['compass']);
    gulp.watch('app/**/*.html', ['html']);
})

// /////////////////////////////////////////////////////////
// Default Task
////////////////////////////////////////////////////////////

gulp.task('default', ['scripts', 'compass', 'html', 'browser-sync', 'watch']);

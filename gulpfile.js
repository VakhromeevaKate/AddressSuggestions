var gulp = require('gulp'),
    cache = require('gulp-cache'),
    size = require('gulp-size'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

// Work with styles
gulp.task('styles', function () {
    return gulp.src([
        'css/mobile/jquery-confirm.css',
        'css/mobile/toastr.min.css',
        'css/mobile/slidebars.min.css',
        'css/mobile/style.css'
    ])
        .pipe(autoprefixer('last 10 version'))
        .pipe(concatCSS('styles.min.css'))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('css/mobile'));
});

// Work with javascript files
gulp.task('scripts', function () {
    return gulp.src([
            'js/vendor/jquery-3.1.1.js',
            'js/jquery.cookie.js',
            'js/vendor/modernizr.js',
            'js/vendor/popper.js',
            'js/bootstrap/bootstrap.js',
            'js/vendor/slick.js',
            'js/counter.js',
            'js/vendor/cleave.js',
            'js/vendor/jquery-confirm.js',
            'js/vendor/toastr.min.js',
            'js/vendor/slidebars.min.js',
            'js/vendor/yandex.maps.js',
            'js/vendor/order.js',
            'js/app/main.js',
            'js/vendor/kernel.js',
            'js/object_manager.js'
        ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/mobile'));
});

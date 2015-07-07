/// <binding BeforeBuild='default' Clean='_clean' />
var gulp = require('gulp'),
    del = require("del"),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver');

// run init tasks
gulp.task('default', ['dependencies', 'angular2', 'js', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
    gulp.src('wwwroot')
      .pipe(webserver({
          open: true
      }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.css', ['css']);
});

// move dependencies into build dir 
gulp.task('dependencies', function () {
    return gulp.src([
      'node_modules/angular2/node_modules/rx/dist/rx.js',
      'node_modules/angular2/node_modules/traceur/bin/traceur.js',
      'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/angular2/node_modules/zone.js/dist/zone.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.js',
      'node_modules/systemjs/dist/system.js.map'
    ])
      .pipe(gulp.dest('wwwroot/lib'));
});

// tanspile, concat & move angular
gulp.task('angular2', function () {
    return gulp.src([
      traceur.RUNTIME_PATH,
      'node_modules/angular2/es6/prod/*.js',
      '!node_modules/angular2/es6/prod/es5build.js',
      'node_modules/angular2/es6/prod/src/**/*.js'
    ], {
        base: 'node_modules/angular2/es6/prod'
    })
      .pipe(rename(function (path) {
          path.dirname = 'angular2/' + path.dirname;
          path.extname = '';
      }))
      .pipe(traceur({
          modules: 'instantiate',
          moduleName: true
      }))
      .pipe(concat('angular2.js'))
      .pipe(gulp.dest('wwwroot/lib'));
});

// transpile & move js
gulp.task('js', function () {
    return gulp.src('src/**/*.js')
      .pipe(rename({
          extname: ''
      }))
      .pipe(traceur({
          modules: 'instantiate',
          moduleName: true,
          annotations: true,
          types: true
      }))
      .pipe(rename({
          extname: '.js'
      }))
      .pipe(gulp.dest('wwwroot'));
});

// move html
gulp.task('html', function () {
    return gulp.src('src/**/*.html')
      .pipe(gulp.dest('wwwroot'))
});

// move css
gulp.task('css', function () {
    return gulp.src('src/**/*.css')
      .pipe(gulp.dest('wwwroot'))
});

//#region Clean-up Tasks
gulp.task("_clean", function (cb) {
    del([
        "wwwroot/**"
    ], cb);
});
//#endregion
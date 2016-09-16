var gulp = require('gulp');

var gulp = require('gulp');

var config = {
    jsDependencies: [
        "node_modules/core-js/client/shim.min.js",
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/systemjs/dist/system.src.js"
    ]
};

gulp.task('migrate-js-dependencies', function () {
    gulp.src('node_modules/@angular/**/*').pipe(gulp.dest('Angular2Startup.Web/scripts/dependencies/@angular'));
    gulp.src('node_modules/rxjs/**/*').pipe(gulp.dest('Angular2Startup.Web/scripts/dependencies/rxjs'));

    gulp.src(config.jsDependencies).pipe(gulp.dest('Angular2Startup.Web/scripts/dependencies'));
});

gulp.task('default', ['migrate-js-dependencies'], function () { });
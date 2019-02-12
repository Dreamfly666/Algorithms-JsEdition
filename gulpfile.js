var gulp = require('gulp'),
browserSync = require('browser-sync');
gulp.task('browser-sync',function(){
    browserSync.init({
        files:['./**/*.js'],
        server:{
            baseDir:'./',
            index:'index.html'
        },
        port:"8030"
    })
});
gulp.task('default',['browser-sync']);
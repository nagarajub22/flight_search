const { src, dest, series } = require('gulp');

function moveToDist() {
    return src('./src/js/*.js')
    .pipe(dest('./dist/js'));
}

exports.js = series(moveToDist);
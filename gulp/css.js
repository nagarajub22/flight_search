const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');

function sass2css() {
    return src([
        './src/scss/styles.scss'
    ])
    .pipe(
        sass({fiber: true}).on('error', sass.logError)
    )
    .pipe(
        dest('./dist/')
    )
}

exports.css = series(sass2css);
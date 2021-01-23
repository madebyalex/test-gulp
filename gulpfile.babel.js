import gulp from 'gulp';
import gpug from 'gulp-pug';
import del from 'del';

const routes = {
  pug: {
    src: 'src/*.pug',
    dest: 'build',
  },
};

function pug(done) {
  gulp.src(routes.pug.src).pipe(gpug()).pipe(gulp.dest(routes.pug.dest));
  done();
}

function prepare(done) {
  del([routes.pug.dest]);
  done();
}

function compile(done) {
  gulp.series([pug]);
  done();
}

export const dev = gulp.series([prepare, compile]);

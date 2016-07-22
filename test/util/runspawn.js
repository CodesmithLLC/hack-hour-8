var spawn = require('child_process').spawn;

module.exports = function(file, done) {
  ps = spawn('node_modules/.bin/mocha', [file]);
  ps.on('exit', function(code) {
    if (code === 0) done();
    else if (!code) throw new Error('taking way too long...');
    throw new Error('failure on tests');
  });
  ps.on('error', function(err) {
    throw err;
  });
  setTimeout(function() {
    ps.kill('SIGINT');
  }, 4800);
};

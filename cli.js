#!/usr/bin/env node
var path = require('path')

var file = process.argv[2]
console.log(file)
testFilePath = path.resolve(file)

var exec = require('child_process').exec;
var cmd = 'npm run test';
var cmd = `CONFIG=${__dirname}/runtime.webpack.config.babel.js BABEL_DISABLE_CACHE=1 NODE_ENV=AVA ${__dirname}/node_modules/ava/cli.js --no-cache --require babel-register ${testFilePath}`
// `--tap | ${__dirname}/node_modules/faucet/bin/cmd.js`


var a = exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  // console.log(stdout)
});

// a.stdout.pipe(process.stdout);
a.stdout.on('data', function(data) {
//   console.log(data.toString()); 
  process.stdout.write(data.toString()); 
});
a.stderr.on('data', function(data) {
  process.stdout.write(data.toString()); 
});

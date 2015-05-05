// package metadata file for Meteor.js
'use strict';

var packageName = 'outatime:jwt-simple';
var where = 'server';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: packageJson.description,
  version: packageJson.version,
  // documentation: 'meteor/README.md',
  git: 'https://github.com/hokaccha/node-jwt-simple.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);
  api.export('jwt', where);
  api.addFiles('jwt.js', where);
});

Package.onTest(function (api) {
  api.use(packageName);
  api.use('tinytest');
  api.addFiles('test.js', where);
});

Npm.depends({
  "jwt-simple": "0.3.0"
});

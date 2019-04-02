Package.describe({
  name: 'igoandsee:methods-import',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('methods-import.js','server');
});

Npm.depends({
  "xlsx": "0.14.2"
})

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('igoandsee:methods-import');
  api.mainModule('methods-import-tests.js');
});

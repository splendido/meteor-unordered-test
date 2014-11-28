Package.describe({
  name: 'modular:base',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
      'jag:pince@0.0.5',
  ], ['client', 'server']);

  api.addFiles('lib/main.js');

  api.addFiles([
    'lib/server_startup.js',
  ], 'server');

  api.addFiles([
    'lib/client_startup.js',
  ], 'client');

  api.export([
    'ModularClassLog',
    'ModularBC',
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('modular:base');
  api.addFiles('tests/main.js');
});

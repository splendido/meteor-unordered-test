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

  api.export([
    'ModularClassLog',
    'ModularBC',
  ], ['client', 'server']);
});

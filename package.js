Package.describe({
  name: "mrspark:autocomplete",
  summary: "Client/server autocompletion designed for Meteor's collections and reactivity",
  version: "1.0.0",
  git: "https://github.com/mizzao/meteor-autocomplete.git"
});

Package.onUse(function (api) {
  api.versionsFrom("3.0.4");

  api.use(['blaze@3.0.0', 'templating@1.4.4', 'jquery@1.11.11', 'check', 'tracker'], 'client');
  api.use(['coffeescript@1.0.0 || 2.0.0', 'underscore']); // both
  api.use(['mongo', 'ddp']);

  api.use("dandv:caret-position@2.1.1", 'client');

  // Our files
  api.addFiles([
    'autocomplete.css',
    'inputs.html',
    'autocomplete-client.coffee',
    'templates.coffee'
  ], 'client');
  
  api.addFiles([
    'autocomplete-server.coffee'
  ], 'server');

  api.export('Autocomplete', 'server');
  api.export('AutocompleteTest', {testOnly: true});
});

Package.onTest(function(api) {
  api.use("mrspark:autocomplete");

  api.use('coffeescript@2.4.1');
  api.use('mongo');
  api.use('tinytest');

  api.addFiles('tests/rule_tests.coffee', 'client');
  api.addFiles('tests/regex_tests.coffee', 'client');
  api.addFiles('tests/param_tests.coffee', 'client');
  api.addFiles('tests/security_tests.coffee');
});

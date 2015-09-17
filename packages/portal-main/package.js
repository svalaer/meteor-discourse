Package.describe({
  name: 'svalaer:portal-main',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'twbs:bootstrap',
    'coffeescript',
    'stylus',
    'chuangbo:marked',
    'mquandalle:jade'
  ]);

  api.versionsFrom('1.1.0.3');
  api.addFiles([
    'lib/client/routes.coffee',
    // 'lib/client/stylesheets/main.styl',
    'lib/client/templates/index.jade',
    'lib/client/templates/index.coffee',
  ], 'client', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('svalaer:portal-main');
  api.addFiles('portal-main-tests.js');
});

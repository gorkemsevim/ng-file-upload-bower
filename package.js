Package.describe({
  name: "danialf:ng-file-upload",
  "version": "12.3.0",
  summary: "Lightweight Angular directive to upload files with optional FileAPI shim for cross browser support",
  git: "https://github.com/gorkemsevim/ng-file-upload"
});

Package.onUse(function (api) {
  api.use('angular:angular@1.2.0', 'client');
  api.addFiles('ng-file-upload-all.js', 'client');
});


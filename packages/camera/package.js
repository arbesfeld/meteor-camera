Package.describe({
  summary: "Take pictures!",
  version: "1.0.0",
});

Cordova.depends({
  "org.apache.cordova.camera":"0.3.0"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use("templating");

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles('photo-browser.js', ['client.browser']);
  api.addFiles('photo-cordova.js', ['client.cordova']);
});
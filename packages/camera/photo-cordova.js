function onSuccess(imageData) {
  MeteorCamera.onNewPhoto("data:image/jpeg;base64," + imageData);
}

function onFail(message) {
  alert('Failed because: ' + message);
}

Template.camera.shouldShowVideo = function () {
  return false;
};

Template.camera.events({
  'click .button': function () {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 30,
      targetWidth: 160,
      targetHeight: 120,
      destinationType: Camera.DestinationType.DATA_URL
    });
  }
});
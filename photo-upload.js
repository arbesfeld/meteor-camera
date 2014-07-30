Photos = new Meteor.Collection("photos");

if (Meteor.isClient) {
  MeteorCamera.onNewPhoto = function (src) {
    Photos.insert({src: src});
  };

  Template.all_photos.photos = function () {
    return Photos.find();
  };

  Template.all_photos.events({
    'click .button': function () {
      Meteor.call("removeAll");
    }
  });
}


if (Meteor.isServer) {
  Meteor.methods({
    removeAll: function () {
      Photos.remove({});
    }
  });
}
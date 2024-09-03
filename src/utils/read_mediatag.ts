var jsmediatags = require("jsmediatags");

jsmediatags.read("./music-file.mp3", {
  onSuccess: function(tag) {
    console.log(tag);
  },
  onError: function(error) {
    console.log(':(', error.type, error.info);
  }
});
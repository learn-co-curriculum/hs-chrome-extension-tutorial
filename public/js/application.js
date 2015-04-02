//fill up the video array with gif urls
yourVideos = [];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * yourVideos.length));
  $("#your-video").attr("src", yourVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
  var dateText = moment().format('MMMM Do YYYY, h:mm:ss a')
  $('#date').html(dateText)[1];
});

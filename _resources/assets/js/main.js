jQuery(document).ready(function () {
    $.getJSON('//api.ipify.org?format=jsonp&callback=?', function(data) {
      var ipUser = JSON.stringify(data.ip, null, 2);
      $('#ipUser').append('IP: '+ipUser.replace(/^"(.+)"$/,'$1'));
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).foundation();

// ci-dessous le commutateur d'information "Programmes"
$('.is-hover a').on('mouseover', function () {
  var idx = $(this).parent().index() + 2;
  $('.info:nth-child(' + idx + ')').addClass('info-visible');
  $('.info:nth-child(' + idx + ')').siblings().removeClass('info-visible');
});

$('.dropdown').on('mouseout', function () {
  $('.info:nth-child(1)').addClass('info-visible').siblings().removeClass('info-visible');
});
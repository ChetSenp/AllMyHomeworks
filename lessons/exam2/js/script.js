$(document).ready(function(){
	$('.banner-slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1800,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let map;
let pos = { lat: 45.555221, lng: -122.747284 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 15,
  });
  const marker = new google.maps.Marker({
    position: pos,
	map: map,
	icon: '../../img/marker.svg',
  });
}
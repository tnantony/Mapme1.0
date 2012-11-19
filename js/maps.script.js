var directionDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  jQuery.gmap = function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bangalore = new google.maps.LatLng(12.976457,77.579956);
    var myOptions = {
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: bangalore
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
  }
  
  jQuery.gCalc = function calcRoute(start, end, waypoi) {  
   var waypts = [];
    var checkboxArray = waypoi;
    for (var i = 0; i < checkboxArray.length; i++) {
              waypts.push({
            location:checkboxArray[i],
            stopover:true});
          }
	
       var request = {
        origin: start, 
        destination: end,
		waypoints:waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.DirectionsTravelMode.WALKING
    };
directionsService.route(request, function(result, status) {
  if (status == google.maps.DirectionsStatus.OK) {
   directionsDisplay.setDirections(result);
  }
 });
 
 directionsDisplay.setMap(map);

 //directionsDisplay.setPanel(document.getElementById("directions"));
}

var wp = new Array("Hoskote, Karnataka", "Kolar, Karnataka");

$(function() {
$.gmap();
$.gCalc('Bengaluru, Karnataka','Devanahalli, Karnataka',wp);
});
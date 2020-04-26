require(["esri/views/MapView","esri/Map","esri/widgets/BasemapGallery",
"esri/layers/FeatureLayer"],
 function(MapView , Map,BasemapGallery,FeatureLayer) { 
 var mypop = {
	 title: "Geocode El Mokkatam" , 
	 content : "Govarnment:{addr_province}"+"<br>" +
	 "House Number : {addr_housenumber}" 
 }
 var wellsRenderer = {
  type: "simple",
  symbol: {
    type: "simple-marker", 
    size: 6,
    color: "red",
    outline: {  
      width: 0.5,
      color: "white"
    }
  }
 }
 var mylayer = new FeatureLayer ({
	 url : "http://localhost:6080/arcgis/rest/services/Geocoding/MapServer/0" ,
	 popupTemplate: mypop , 
	 renderer: wellsRenderer
 })
 
 var mymap = new Map ({
	  basemap: 'streets-night-vector' , 
	  layers : mylayer , 
 });
 var myBasemap = new BasemapGallery ({
	  view: myview
 })
 var myview = new MapView ({
	 map: mymap,  
  container: "map"
 });
// myview.ui.add(myBasemap, {
//  position: "top-right"
//});
 });
 
 

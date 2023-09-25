// Initialize and add the map
let map;

async function initMap() {
  // The location of Machakos University
  const position = { lat: -1.5309, lng: 37.2628 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Machakos University
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Machakos University
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Machakos University",
  });
}

initMap();

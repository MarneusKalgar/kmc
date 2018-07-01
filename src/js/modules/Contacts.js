/* global google */
export default class {
  constructor(block) {
    this.block = block;
    // const blockName = this.block[0].getAttribute('class').split(' ')[0];
    this.map = document.getElementById('map');
  }

  initMap() {
    const center = { lat: +this.map.getAttribute('data-lat'), lng: +this.map.getAttribute('data-lng') };
    const map = new google.maps.Map(this.map, {
      center,
      zoom: 12
    });
    new google.maps.Marker({ position: center, map });
  }
}

export default class {
  constructor(block) {
    this.block = block;
    // const blockName = this.block[0].getAttribute('class').split(' ')[0];
    this.map = document.getElementById('map');
  }

  initMap() {
    new google.maps.Map(this.map, { // eslint-disable-line
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}

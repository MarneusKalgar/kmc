/* global google */
export class Contacts {
  constructor(block) {
    this.block = block;
    this.map = document.getElementById('map');
    this.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDNlBvo4iwNwENMDLv7R692NTXgEXM_a2I&callback=googleMapsScriptLoaded';
  }

  googleMapsScriptLoaded() {
    const center = { lat: +this.map.getAttribute('data-lat'), lng: +this.map.getAttribute('data-lng') };
    const map = new google.maps.Map(this.map, {
      center,
      zoom: 12
    });
    new google.maps.Marker({ position: center, map });
  }

  appendMapScript() {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', this.src);
    document.body.appendChild(scriptEl);
  }
}

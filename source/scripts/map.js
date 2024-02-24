/* global L:readonly */
const map = L.map('map')
  .on('load', () => {
    const imageMap = document.querySelector('.footer__picture');
    imageMap.classList.add('footer__picture--hidden');
  })
  .setView({
    lat: 59.968142,
    lng: 30.316425,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl:  '../images/icons/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.968342,
    lng: 30.317515,
  },
  {
    icon: pinIcon,
  }
);

marker.addTo(map);

createBike = (id, brand, model, year, price, image) => ({
  id,
  brand,
  model,
  year,
  price,
  image
});

const bikes = [
  createBike(1, "Rondo", "Ruut ST", 2019, 1000, "assets/images/rondo-ruut.jpg"),
  createBike(
    1,
    "Lynskey",
    "Lynskey GR270 Titanium",
    2019,
    2000,
    "assets/images/Lynskey-GR270-Titanium.jpg"
  ),
  createBike(1, "Basso", " Palta", 2019, 1500, "assets/images/basso-palta.jpg")
];

new Vue({
  el: "#app",
  data: {
    bikes
  }
});

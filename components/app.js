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
    2,
    "Lynskey",
    "Lynskey GR270 Titanium",
    2019,
    2000,
    "assets/images/Lynskey-GR270-Titanium.jpg"
  ),
  createBike(3, "Basso", " Palta", 2019, 1500, "assets/images/basso-palta.jpg")
];

new Vue({
  el: "#app",
  data: {
    bikes,
    bike: bikes[0],
    selectedBike: 0
  },
  methods: {
    selectBike: function(index) {
      console.log(`select bike ${index}`);
      this.bike = bikes[index];
      this.selectedBike = index;
    }
  }
});

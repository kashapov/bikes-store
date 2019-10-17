createBike = (id, brand, model, year, price, image, sizes, details) => ({
  id,
  brand,
  model,
  year,
  price,
  image,
  sizes,
  details
});

const bikes = [
  createBike(
    1,
    "Rondo",
    "Ruut ST",
    2019,
    1000,
    "assets/images/rondo-ruut.jpg",
    "L, M, XL",
    ["frame: steel", "fork: carbon", "speed: 1x12", "brakes: hydraulic"]
  ),
  createBike(
    2,
    "Lynskey",
    "Lynskey GR270 Titanium",
    2019,
    2000,
    "assets/images/Lynskey-GR270-Titanium.jpg",
    "S, L, XL",
    ["frame: titan", "fork: carbon", "speed: 2x10", "brakes: hydraulic"]
  ),
  createBike(
    3,
    "Basso",
    " Palta",
    2019,
    1500,
    "assets/images/basso-palta.jpg",
    "M",
    ["frame: carbon", "fork: carbon", "speed: 1x11", "brakes: hydraulic"]
  )
];

new Vue({
  el: "#app",
  data: {
    bikes,
    bike: bikes[0],
    selectedBike: 0,
    isBikeDetails: false,
    search: "",
    isModalCart: false
  },
  methods: {
    selectBike: function(index) {
      // console.log(`select bike ${index}`);
      this.bike = bikes[index];
      this.selectedBike = index;
    }
  },
  computed: {
    detailsBtnText() {
      return this.isBikeDetails ? "Hide details" : "Show details";
    },
    filteredBikes() {
      return this.bikes.filter(bike => {
        return (
          bike.brand.toLowerCase().includes(this.search.toLowerCase()) ||
          bike.model.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  }
});

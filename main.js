class Product {
  // class responsible for creating product objects
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

const app = Vue.createApp({
  data() {
    return {
      products: [
        new Product(
          "Blue Socks",
          "A pair of warm, fuzzy blue socks",
          12.99,
          "assets/images/socks_blue.jpg"
        ),
        new Product(
          "Green Socks",
          "A pair of warm, fuzzy green socks",
          14.99,
          "assets/images/socks_green.jpg"
        ),
      ],
    };
  },
});

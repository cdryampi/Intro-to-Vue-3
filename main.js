class Product {
  constructor(name, description, price, onSale, stock, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.onSale = onSale;
    this.stock = stock;
    this.image = image;
  }
  changeStock() {
    this.stock -= 1;
    if (this.stock === 0) {
      this.onSale = false;
    }
  }
}
const app = Vue.createApp({
  data() {
    return {
      products: [
        new Product(
          "Blue Shoes",
          "A simple description for Blue Shoes",
          100,
          true,
          10,
          "./assets/images/socks_blue.jpg"
        ),
        new Product(
          "Green Shoes",
          "A simple description for Green Shoes",
          200,
          true,
          15,
          "./assets/images/socks_green.jpg"
        ),
      ],
    };
  },
});

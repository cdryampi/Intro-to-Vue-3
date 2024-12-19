class Product {
  constructor(id, name, image, inStock, details, variants, sizes) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.inStock = inStock;
    this.details = details;
    this.variants = variants;
    this.sizes = sizes;
    this.default_color = variants[0].color;
  }

  getImage() {
    switch (this.default_color) {
      case "blue":
        return this.image.blue;
      case "green":
        return this.image.green;
    }
  }
  changeColor(color) {
    this.default_color = color;
    console.log("Color changed to " + color);
  }
}

const app = Vue.createApp({
  data() {
    return {
      products: [
        new Product(
          1,
          "Shoes",
          {
            blue: "./assets/images/socks_blue.jpg",
            green: "./assets/images/socks_green.jpg",
          },
          true,
          [
            { id: 2223, material: "50% cotton" },
            { id: 2224, material: "30% wool" },
            { id: 2225, material: "20% polyester" },
          ],
          [
            { id: 1111, color: "blue" },
            { id: 1112, color: "green" },
          ],
          [
            { id: 3331, size: "S" },
            { id: 3332, size: "M" },
            { id: 3333, size: "L" },
          ]
        ),
      ],
    };
  },
});

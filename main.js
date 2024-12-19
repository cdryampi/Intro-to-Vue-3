const app = Vue.createApp({
  data() {
    return {
      title: "Vue3 Shopping Cart",
      description: "This is a shopping cart",
      products: {
        "product-1": {
          name: "socks blue",
          price: 100,
          qty: 0,
          description: "This is a product 1",
          image: "./assets/images/socks_blue.jpg",
        },
        "product-2": {
          name: "socks green",
          price: 200,
          qty: 0,
          description: "This is a product 2",
          image: "./assets/images/socks_green.jpg",
        },
      },
    };
  },
});

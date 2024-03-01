export const carousalData = [
    {
      id: 1,
      imgUrl: require("../../assets/images/amex.png"),
      price: 2345,
      cardType: "American Express",
      cardNumber: "****1234",
      backgroundColor: "#0f60d6",
      textColor: "white",
    },
    {
      id: 2,
      imgUrl: require("../../assets/images/apple.png"),
      price: 4654,
      cardType: "Apple",
      cardNumber: "****5678",
      backgroundColor: "red",
      textColor: "white",
    },
    {
      id: 3,
      imgUrl: require("../../assets/images/cashapp.png"),
      price: 3300,
      cardType: "CashApp",
      cardNumber: "****9876",
      backgroundColor: "#55a630",
      textColor: "white",
    },
    {
      id: 4,
      imgUrl: require("../../assets/images/amazon.png"),
      price: 1700,
      cardType: "Amazon",
      cardNumber: "****5432",
      backgroundColor: "brown",
      textColor: "#ea468e",
    },
    {
      id: 5,
      imgUrl: require("../../assets/images/xfinity.png"),
      price: 2100,
      cardType: "Xfinity",
      cardNumber: "****2468",
      backgroundColor: "purple",
      textColor: "white",
    },
    // Add more items as needed
  ];
  
  export const transactionData = [
    {
      id: 1,
      name: "Hulu",
      type: "Subscription",
      amount: "$99.00",
      date: "12 December",
      imageSource: require("../../assets/images/hulu.png"),
    },
    {
      id: 2,
      name: "Ethiopian Airlines",
      type: "Subscription",
      amount: "$12.99",
      date: "15 December",
      imageSource: require("../../assets/images/ethiopian.png"),
    },
    {
      id: 3,
      name: "Geico",
      type: "Subscription",
      amount: "$9.99",
      date: "18 December",
      imageSource: require("../../assets/images/geico.png"),
    },
    {
      id: 4,
      name: "Crunchyroll",
      type: "Subscription",
      amount: "$11.99",
      date: "20 December",
      imageSource: require("../../assets/images/crunchyroll.png"),
    },
    {
      id: 5,
      name: "Chick-Fil-A",
      type: "Subscription",
      amount: "$14.99",
      date: "22 December",
      imageSource: require("../../assets/images/chickfila.png"),
    },
  ];
  
  // Format the price property to be a string with dollar formatting
  carousalData.forEach((item) => {
    item.price = item.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  });
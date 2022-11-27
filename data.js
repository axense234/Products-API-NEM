const products = [
  {
    _id: "6378e260d675209062dab198",
    name: "Corn(edited)",
    tag: "vegetable",
    price: 3,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105143/Products%20API/corn.jpg",
    sale: "10%",
    macros_100g: {
      carbs: "21 grams",
      proteins: "3.4 grams",
      fats: "1.5 grams",
      calories: "96 calories",
    },
    purchases: 10,
    createdAt: "2022-11-19T14:04:16.096Z",
    updatedAt: "2022-11-22T08:00:11.903Z",
    __v: 0,
  },
  {
    _id: "6378f068c6d98919a2a9ffd4",
    name: "Apples",
    tag: "fruit",
    price: 4.36,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105180/Products%20API/apple.png",
    sale: "10%",
    macros_100g: {
      carbs: "12.5 grams",
      proteins: "0.2 grams",
      fats: "0.2 grams",
      calories: "47.5 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:04:08.626Z",
    updatedAt: "2022-11-22T08:03:01.793Z",
    __v: 0,
  },
  {
    _id: "6378f078c6d98919a2a9ffd6",
    name: "Potatoes",
    tag: "vegetable",
    price: 1.76,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105201/Products%20API/potato.png",
    sale: "10%",
    macros_100g: {
      carbs: "17 grams",
      proteins: "2 grams",
      fats: "0 grams",
      calories: "77 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:04:24.568Z",
    updatedAt: "2022-11-22T08:05:17.026Z",
    __v: 0,
  },
  {
    _id: "6378f083c6d98919a2a9ffd8",
    name: "Tomatoes",
    tag: "vegetable",
    price: 3.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105349/Products%20API/tomato.png",
    sale: "0%",
    macros_100g: {
      carbs: "4 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "17 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:04:35.299Z",
    updatedAt: "2022-11-19T15:04:35.299Z",
    __v: 0,
  },
  {
    _id: "6378f0a9c6d98919a2a9ffda",
    name: "Cucumbers",
    tag: "vegetable",
    price: 3.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105415/Products%20API/cucumber.png",
    sale: "0%",
    macros_100g: {
      carbs: "3 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "13 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:05:13.493Z",
    updatedAt: "2022-11-19T15:05:13.493Z",
    __v: 0,
  },
  {
    _id: "6378f0b7c6d98919a2a9ffdc",
    name: "Grapes",
    tag: "fruit",
    price: 9.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105458/Products%20API/grapes.png",
    sale: "0%",
    macros_100g: {
      carbs: "18 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "69 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:05:27.353Z",
    updatedAt: "2022-11-19T15:05:27.353Z",
    __v: 0,
  },
  {
    _id: "6378f0cdc6d98919a2a9ffde",
    name: "Watermelon",
    tag: "fruit",
    price: 7.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105766/Products%20API/watermelon.jpg",
    sale: "0%",
    macros_100g: {
      carbs: "8 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "30 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:05:49.890Z",
    updatedAt: "2022-11-19T15:05:49.890Z",
    __v: 0,
  },
  {
    _id: "6378f0d8c6d98919a2a9ffe0",
    name: "Pears",
    tag: "fruit",
    price: 4.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105808/Products%20API/pears.png",
    sale: "0%",
    macros_100g: {
      carbs: "16 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "58 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:06:00.126Z",
    updatedAt: "2022-11-19T15:06:00.126Z",
    __v: 0,
  },
  {
    _id: "6378f0e4c6d98919a2a9ffe2",
    name: "Bananas",
    tag: "fruit",
    price: 1.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105841/Products%20API/bananas.png",
    sale: "0%",
    macros_100g: {
      carbs: "23 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "89 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:06:12.670Z",
    updatedAt: "2022-11-19T15:06:12.670Z",
    __v: 0,
  },
  {
    _id: "6378f0efc6d98919a2a9ffe4",
    name: "Milk",
    tag: "dairy",
    price: 13.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669105876/Products%20API/milk.png",
    sale: "0%",
    macros_100g: {
      carbs: "79 grams",
      proteins: "6 grams",
      fats: "2 grams",
      calories: "355 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:06:23.007Z",
    updatedAt: "2022-11-19T15:06:23.007Z",
    __v: 0,
  },
  {
    _id: "6378f0f7c6d98919a2a9ffe6",
    name: "Cheese",
    tag: "dairy",
    price: 16.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106016/Products%20API/cheese.png",
    sale: "0%",
    macros_100g: {
      carbs: "1 grams",
      proteins: "25 grams",
      fats: "33 grams",
      calories: "403 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:06:31.083Z",
    updatedAt: "2022-11-19T15:06:31.083Z",
    __v: 0,
  },
  {
    _id: "6378f115c6d98919a2a9ffe8",
    name: "Butter",
    tag: "dairy",
    price: 8.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106060/Products%20API/butter.webp",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "33 grams",
      fats: "55 grams",
      calories: "509 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:07:01.234Z",
    updatedAt: "2022-11-19T15:07:01.234Z",
    __v: 0,
  },
  {
    _id: "6378f11fc6d98919a2a9ffea",
    name: "Yogurt",
    tag: "dairy",
    price: 8.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106095/Products%20API/yogurt.png",
    sale: "0%",
    macros_100g: {
      carbs: "15 grams",
      proteins: "4 grams",
      fats: "4 grams",
      calories: "107 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:07:11.995Z",
    updatedAt: "2022-11-19T15:07:11.995Z",
    __v: 0,
  },
  {
    _id: "6378f166c6d98919a2a9ffec",
    name: "Yellow Mustard",
    tag: "condiment",
    price: 1.2,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106142/Products%20API/yellow%20mustard.png",
    sale: "0%",
    macros_100g: {
      carbs: "5 grams",
      proteins: "4 grams",
      fats: "4 grams",
      calories: "66 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:08:22.316Z",
    updatedAt: "2022-11-19T15:08:22.316Z",
    __v: 0,
  },
  {
    _id: "6378f173c6d98919a2a9ffee",
    name: "Vinegar",
    tag: "condiment",
    price: 1.55,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106202/Products%20API/vinegar.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "0 grams",
      fats: "0 grams",
      calories: "18 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:08:35.205Z",
    updatedAt: "2022-11-19T15:08:35.205Z",
    __v: 0,
  },
  {
    _id: "6378f17dc6d98919a2a9fff0",
    name: "Ketchup",
    tag: "condiment",
    price: 1.85,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106241/Products%20API/ketchup.png",
    sale: "0%",
    macros_100g: {
      carbs: "26 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "115 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:08:45.637Z",
    updatedAt: "2022-11-19T15:08:45.637Z",
    __v: 0,
  },
  {
    _id: "6378f184c6d98919a2a9fff2",
    name: "Hot Sauce",
    tag: "condiment",
    price: 2.2,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106288/Products%20API/hot%20sauce.png",
    sale: "0%",
    macros_100g: {
      carbs: "13 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "63 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:08:52.983Z",
    updatedAt: "2022-11-19T15:08:52.983Z",
    __v: 0,
  },
  {
    _id: "6378f192c6d98919a2a9fff4",
    name: "Mayonnaise",
    tag: "condiment",
    price: 2.45,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106410/Products%20API/mayonnaise.png",
    sale: "0%",
    macros_100g: {
      carbs: "1 grams",
      proteins: "1 grams",
      fats: "75 grams",
      calories: "680 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:09:06.545Z",
    updatedAt: "2022-11-19T15:09:06.545Z",
    __v: 0,
  },
  {
    _id: "6378f1ffc6d98919a2a9fff6",
    name: "Canned Tuna",
    tag: "canned",
    price: 3.45,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106453/Products%20API/canned%20tuna.jpg",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "30 grams",
      fats: "1 grams",
      calories: "120 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:10:55.187Z",
    updatedAt: "2022-11-19T15:10:55.187Z",
    __v: 0,
  },
  {
    _id: "6378f20cc6d98919a2a9fff8",
    name: "Canned Peaches",
    tag: "canned",
    price: 8.99,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106494/Products%20API/canned%20peaches.jpg",
    sale: "0%",
    macros_100g: {
      carbs: "29 grams",
      proteins: "2 grams",
      fats: "0 grams",
      calories: "110 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:11:08.434Z",
    updatedAt: "2022-11-19T15:11:08.434Z",
    __v: 0,
  },
  {
    _id: "6378f21cc6d98919a2a9fffa",
    name: "Canned Sardines",
    tag: "canned",
    price: 8.2,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669106559/Products%20API/canned%20sardines.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "16 grams",
      fats: "18 grams",
      calories: "230 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:11:24.431Z",
    updatedAt: "2022-11-19T15:11:24.431Z",
    __v: 0,
  },
  {
    _id: "6378f24a5e3529068d4eb4a5",
    name: "Barley",
    tag: "grain",
    price: 3.3,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669107637/Products%20API/barley.png",
    sale: "0%",
    macros_100g: {
      carbs: "73.4 grams",
      proteins: "12.4 grams",
      fats: "2.3 grams",
      calories: "354 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:12:10.376Z",
    updatedAt: "2022-11-19T15:12:10.376Z",
    __v: 0,
  },
  {
    _id: "6378f2555e3529068d4eb4a7",
    name: "Brown Rice",
    tag: "grain",
    price: 3.9,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669107796/Products%20API/brown%20rice.png",
    sale: "0%",
    macros_100g: {
      carbs: "72 grams",
      proteins: "8 grams",
      fats: "2 grams",
      calories: "349 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:12:21.754Z",
    updatedAt: "2022-11-19T15:12:21.754Z",
    __v: 0,
  },
  {
    _id: "6378f26b5e3529068d4eb4a9",
    name: "Wheat",
    tag: "grain",
    price: 5.2,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669107887/Products%20API/wheat.png",
    sale: "0%",
    macros_100g: {
      carbs: "46 grams",
      proteins: "8 grams",
      fats: "1.3 grams",
      calories: "214 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:12:43.071Z",
    updatedAt: "2022-11-19T15:12:43.071Z",
    __v: 0,
  },
  {
    _id: "6378f2795e3529068d4eb4ab",
    name: "Oats",
    tag: "grain",
    price: 5.45,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669107960/Products%20API/oats.png",
    sale: "0%",
    macros_100g: {
      carbs: "66 grams",
      proteins: "17 grams",
      fats: "7 grams",
      calories: "389 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:12:57.781Z",
    updatedAt: "2022-11-19T15:12:57.781Z",
    __v: 0,
  },
  {
    _id: "6378f2875e3529068d4eb4ad",
    name: "Quinoa",
    tag: "grain",
    price: 5.55,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108020/Products%20API/quinoa.png",
    sale: "0%",
    macros_100g: {
      carbs: "26 grams",
      proteins: "5 grams",
      fats: "2 grams",
      calories: "143 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:13:11.225Z",
    updatedAt: "2022-11-19T15:13:11.225Z",
    __v: 0,
  },
  {
    _id: "6378f2a25e3529068d4eb4af",
    name: "Water",
    tag: "beverage",
    price: 10.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108102/Products%20API/water%20bottle.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "0 grams",
      fats: "0 grams",
      calories: "0 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:13:38.246Z",
    updatedAt: "2022-11-19T15:15:12.439Z",
    __v: 0,
  },
  {
    _id: "6378f2a85e3529068d4eb4b1",
    name: "Tea",
    tag: "beverage",
    price: 15.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108219/Products%20API/tea.png",
    sale: "0%",
    macros_100g: {
      carbs: "4 grams",
      proteins: "24 grams",
      fats: "1 grams",
      calories: "124 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:13:44.170Z",
    updatedAt: "2022-11-19T15:15:25.017Z",
    __v: 0,
  },
  {
    _id: "6378f2b65e3529068d4eb4b3",
    name: "Coffee",
    tag: "beverage",
    price: 25.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108306/Products%20API/coffee.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "0 grams",
      fats: "0 grams",
      calories: "0 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:13:58.028Z",
    updatedAt: "2022-11-19T15:15:37.756Z",
    __v: 0,
  },
  {
    _id: "6378f2cb5e3529068d4eb4b5",
    name: "Beer",
    tag: "beverage",
    price: 25.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108342/Products%20API/beer.png",
    sale: "0%",
    macros_100g: {
      carbs: "4 grams",
      proteins: "0 grams",
      fats: "0 grams",
      calories: "45 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:14:19.610Z",
    updatedAt: "2022-11-19T15:14:19.610Z",
    __v: 0,
  },
  {
    _id: "6378f2d35e3529068d4eb4b7",
    name: "Wine",
    tag: "beverage",
    price: 45.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108461/Products%20API/wine.jpg",
    sale: "0%",
    macros_100g: {
      carbs: "14 grams",
      proteins: "1 grams",
      fats: "0 grams",
      calories: "65 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:14:27.619Z",
    updatedAt: "2022-11-19T15:14:27.619Z",
    __v: 0,
  },
  {
    _id: "6378f3395e3529068d4eb4bd",
    name: "Pork",
    tag: "meat",
    price: 65.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108515/Products%20API/pork.jpg",
    sale: "0%",
    macros_100g: {
      carbs: "5 grams",
      proteins: "16 grams",
      fats: "17 grams",
      calories: "236 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:16:09.001Z",
    updatedAt: "2022-11-19T15:16:09.001Z",
    __v: 0,
  },
  {
    _id: "6378f33e5e3529068d4eb4bf",
    name: "Chicken",
    tag: "meat",
    price: 35.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108601/Products%20API/chicken%20breast.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "31 grams",
      fats: "6 grams",
      calories: "106 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:16:14.294Z",
    updatedAt: "2022-11-19T15:16:14.294Z",
    __v: 0,
  },
  {
    _id: "6378f3495e3529068d4eb4c1",
    name: "Turkey",
    tag: "meat",
    price: 105.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108737/Products%20API/turkey%20breast.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "18 grams",
      fats: "12 grams",
      calories: "87 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:16:25.880Z",
    updatedAt: "2022-11-19T15:16:25.880Z",
    __v: 0,
  },
  {
    _id: "6378f3535e3529068d4eb4c3",
    name: "Lamb",
    tag: "meat",
    price: 125.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108820/Products%20API/lamb.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "33 grams",
      fats: "5 grams",
      calories: "127 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:16:35.797Z",
    updatedAt: "2022-11-19T15:16:35.797Z",
    __v: 0,
  },
  {
    _id: "6378f3685e3529068d4eb4c5",
    name: "Duck",
    tag: "meat",
    price: 55.25,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669108929/Products%20API/duck.png",
    sale: "0%",
    macros_100g: {
      carbs: "0 grams",
      proteins: "16 grams",
      fats: "18 grams",
      calories: "220 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:16:56.425Z",
    updatedAt: "2022-11-19T15:16:56.425Z",
    __v: 0,
  },
  {
    _id: "6378f3835e3529068d4eb4c7",
    name: "Soap",
    tag: "hygiene",
    price: 5.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109005/Products%20API/soap.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:17:23.477Z",
    updatedAt: "2022-11-19T15:17:23.477Z",
    __v: 0,
  },
  {
    _id: "6378f3905e3529068d4eb4c9",
    name: "Toothbrush",
    tag: "hygiene",
    price: 6.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109037/Products%20API/toothbrush.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:17:36.845Z",
    updatedAt: "2022-11-19T15:17:36.845Z",
    __v: 0,
  },
  {
    _id: "6378f3975e3529068d4eb4cb",
    name: "Toothpaste",
    tag: "hygiene",
    price: 3.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109078/Products%20API/toothpaste.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:17:43.336Z",
    updatedAt: "2022-11-19T15:17:43.336Z",
    __v: 0,
  },
  {
    _id: "6378f3a25e3529068d4eb4cd",
    name: "Shampoo",
    tag: "hygiene",
    price: 2.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109127/Products%20API/shampoo.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:17:54.118Z",
    updatedAt: "2022-11-19T15:17:54.118Z",
    __v: 0,
  },
  {
    _id: "6378f3ae5e3529068d4eb4cf",
    name: "Conditioner",
    tag: "hygiene",
    price: 4.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109298/Products%20API/conditioner.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:18:06.887Z",
    updatedAt: "2022-11-19T15:18:06.887Z",
    __v: 0,
  },
  {
    _id: "6378f3bc5e3529068d4eb4d1",
    name: "Deodorant",
    tag: "hygiene",
    price: 10.35,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109339/Products%20API/deodorant.png",
    sale: "0%",
    purchases: 0,
    createdAt: "2022-11-19T15:18:20.950Z",
    updatedAt: "2022-11-19T15:18:20.950Z",
    __v: 0,
  },
  {
    _id: "6378f3e65e3529068d4eb4d3",
    name: "Cat Food",
    tag: "animals",
    price: 40.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109374/Products%20API/cat%20food.png",
    sale: "0%",
    macros_100g: {
      carbs: "29 grams",
      proteins: "7 grams",
      fats: "18 grams",
      calories: "250 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:19:02.254Z",
    updatedAt: "2022-11-19T15:19:02.254Z",
    __v: 0,
  },
  {
    _id: "6378f3eb5e3529068d4eb4d5",
    name: "Dog Food",
    tag: "animals",
    price: 45.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109490/Products%20API/dog%20food.png",
    sale: "0%",
    macros_100g: {
      carbs: "50 grams",
      proteins: "20 grams",
      fats: "5 grams",
      calories: "337 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:19:07.373Z",
    updatedAt: "2022-11-19T15:19:07.373Z",
    __v: 0,
  },
  {
    _id: "6378f4075e3529068d4eb4d8",
    name: "Bread Crumbs",
    tag: "animals",
    price: 60.5,
    thumb:
      "https://res.cloudinary.com/birthdayreminder/image/upload/v1669109620/Products%20API/bread%20crumbs.png",
    sale: "0%",
    macros_100g: {
      carbs: "21 grams",
      proteins: "4 grams",
      fats: "2 grams",
      calories: "110 calories",
    },
    purchases: 0,
    createdAt: "2022-11-19T15:19:35.480Z",
    updatedAt: "2022-11-19T15:19:35.480Z",
    __v: 0,
  },
];

module.exports = products;
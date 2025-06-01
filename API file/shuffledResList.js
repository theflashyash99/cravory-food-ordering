const shuffledResList = [
  {
    id: 1,
    name: "KFC",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.1,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e38f9b01-4ba1-41ee-9478-bd7792e1f424_569370.JPG"
  },
  {
    id: 2,
    name: "Wendy's Burgers",
    cuisine: ["Burgers", "American", "Fast Food", "Snacks"],
    star: 4.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/2f038f87-b647-4612-8c1a-ee6c9e1ddeb4_12557.JPG"
  },
  {
    id: 3,
    name: "Roshan Di Kulfi",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/crl0impfugnw66bipiqt"
  },
  {
    id: 4,
    name: "Bangla Sweet House",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 2.9,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/8c8838cb-3437-475b-903a-26057b2105df_534652%20(1).jpg"
  },
  {
    id: 5,
    name: "Dosa Hub",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ff8ky1slxu751qpowukh"
  },
  {
    id: 6,
    name: "Wow! Momo",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.5,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/ec8fd5f7-4573-471b-a32e-272aa84c468a_185225.jpg"
  },
  {
    id: 7,
    name: "Gianis - Ice Cream, Shakes & Sundaes",
    cuisine: "Burger, North Indian, Asian",
    star: "4.4 stars",
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2365e2117e199c2b9a2cfa643c31b05c"
  },
  {
    id: 8,
    name: "Bakington",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 2.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/29b35919-c5b6-4417-9d0b-43f3847afc64_400985.jpg"
  },
  {
    id: 9,
    name: "Honey & Dough",
    cuisine: "Burger, North Indian, Asian",
    star: "3.1 stars",
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b9f3278aa437785772e368cfe584b342"
  },
  {
    id: 10,
    name: "Theobroma",
    cuisine: ["Bakery", "Desserts", "Janakpuri"],
    star: 3.6,
    time: "40 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/361ac1d9-7094-40df-b3b5-0afae4d89bf4_337439.jpg"
  },
  {
    id: 11,
    name: "McDonald's",
    cuisine: ["American", "Tilak Nagar"],
    star: 4.2,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/199a7c7b-d3f0-4d1e-a1cd-60be14ec5020_254117.JPG"
  },
  {
    id: 12,
    name: "Punjab Sweet Corner",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 2.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bc4cef82dd73ceca92d0695e58b017b6"
  },
  {
    id: 13,
    name: "Creme Castle - Cakes",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 5.0,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aoojcgijlsryzyeachrz"
  },
  {
    id: 14,
    name: "Grill Station",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.7,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/97377e54937c079fe269d744aa66274a"
  },
  {
    id: 15,
    name: "Biryani Blues",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 1.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e38f9b01-4ba1-41ee-9478-bd7792e1f424_569370.JPG"
  },
  {
    id: 16,
    name: "Karim's",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.9,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/t55bmgihr0woug1t6xiu"
  },
  {
    id: 17,
    name: "Giani",
    cuisine: "Burger, North Indian, Asian",
    star: "4.4 stars",
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aoojcgijlsryzyeachrz"
  },
  {
    id: 18,
    name: "Meghana Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    star: 2.1,
    time: "90 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/4/b6261a53-f280-459c-aa02-f84fac4587c6_5af0ca37-29be-4399-baab-19264ab4e29a.jpg",
    alt: "Meghana Food"
  },
  {
    id: 19,
    name: "Mad Over Donuts",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 3.7,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/e4738371-174f-427c-ba7f-16492b9a39cc_6481.jpg"
  },
  {
    id: 20,
    name: "Daily Kitchen - Homely Meals",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750457.JPG"
  },
  {
    id: 21,
    name: "Chaayos Chai Snacks Relax",
    cuisine: "Burger, North Indian, Asian",
    star: "5.0 stars",
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_331201.JPG"
  },
  {
    id: 22,
    name: "The Calzones",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.1,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/16/3723ac9e-ade0-4aa8-9ec2-88a7b9ecaa8b_926030.jpg"
  },
  {
    id: 23,
    name: "Mishtanam By Aggarwal Sweets",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 3.9,
    time: "45 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/9878247a-04da-4494-a05f-60f28be4391d_489921%20(1).jpg"
  },
  {
    id: 24,
    name: "Amul Ice Cream Parlour",
    cuisine: ["Burger", "North Indian", "Asian"],
    star: 4.4,
    time: "38 min",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/13/c24cea6b-ca5b-4954-88c3-d103d64d46b5_1025727.JPG"
  }
];
 export default shuffledResList;
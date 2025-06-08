const combinedMenu = [
  {
    id: 1,
    company: "KFC",
    menuItems: [
     { id: 101, name: "KFC Large Bucket", price: 500, rating: 4.5, image: "https://content.jdmagicbox.com/v2/comp/bangalore/s9/080pxx80.xx80.220610223727.l3s9/catalogue/kfc-kattegenahalli-bangalore-quick-bites-outlets-e2brro0jrg.jpg" },
      { id: 102, name: "Zinger Burger", price: 150, rating: 4.6, image: "https://www.kfc.com.pk/images/menu/zinger-burger.png" },
      { id: 103, name: "Chicken Strips", price: 200, rating: 4.4, image: "https://kfc-prod.s3.amazonaws.com/images/strips.png" },
      { id: 104, name: "Popcorn Chicken", price: 180, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Popcorn_chicken.jpg" },
      { id: 105, name: "Coleslaw", price: 90, rating: 4.0, image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Coleslaw-01.jpg" },
      { id: 106, name: "Twister Wrap", price: 220, rating: 4.4, image: "https://kfc-prod.s3.amazonaws.com/images/twister.png" },
      { id: 107, name: "Mashed Potatoes", price: 100, rating: 4.2, image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Mashed_potatoes.jpg" }
    ],
  },
  {
    id: 2,
    company: "Wendy's Burger",
    menuItems: [
    { id: 201, name: "Baconator", price: 320, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Wendys_Baconator.jpg" },
      { id: 202, name: "Dave's Single", price: 250, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Daves_Single.jpg" },
      { id: 203, name: "Frosty", price: 100, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Wendy%27s_Frosty.jpg" },
      { id: 204, name: "Spicy Chicken Sandwich", price: 270, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Wendys_spicy_chicken.jpg" },
      { id: 205, name: "French Fries", price: 90, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/French_fries_2.jpg" },
      { id: 206, name: "Garden Salad", price: 130, rating: 4.2, image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Garden_Salad.jpg" },
      { id: 207, name: "Chicken Nuggets", price: 180, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Chicken_Nuggets.jpg" }
    ],
  },
  {
    id: 3,
    company: "Roshan Di Kulfi",
    menuItems: [
      { id: 301, name: "Malai Kulfi", price: 100, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Kulfi.jpg" },
      { id: 302, name: "Pista Kulfi", price: 120, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Pista_kulfi.jpg" },
      { id: 303, name: "Mango Kulfi", price: 130, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mango_Kulfi.jpg" },
      { id: 304, name: "Rose Kulfi", price: 110, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Rose_Kulfi.jpg" },
      { id: 305, name: "Badam Kulfi", price: 140, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Badam_Kulfi.jpg" },
      { id: 306, name: "Kesar Kulfi", price: 130, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kesar_Kulfi.jpg" },
      { id: 307, name: "Chocolate Kulfi", price: 150, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Chocolate_Kulfi.jpg" }
    ],
  },
  {
    id: 4,
    company: "Bangla Sweets House",
    menuItems: [
     { id: 401, name: "Rasgulla", price: 150, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Rasgulla_in_syrup.jpg" },
      { id: 402, name: "Sandesh", price: 140, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sandesh_Indian_Sweet.jpg" },
      { id: 403, name: "Cham Cham", price: 160, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cham_Cham.jpg" },
      { id: 404, name: "Kheer Kadam", price: 170, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Kheer_Kadam.jpg" },
      { id: 405, name: "Mishti Doi", price: 130, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Misti_Doi.jpg" },
      { id: 406, name: "Lal Mohan", price: 150, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Lal_Mohan.jpg" },
      { id: 407, name: "Pithe", price: 140, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Pithe.jpg" }
    ],
},
  {
    id: 5,
    company: "Dose Hub",
    menuItems: [
      { id: 501, name: "Masala Dosa", price: 120, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Masala_dosa.jpg" },
      { id: 502, name: "Plain Dosa", price: 100, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Plain_dosa.jpg" },
      { id: 503, name: "Rava Dosa", price: 130, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Rava_dosa.jpg" },
      { id: 504, name: "Onion Uthappam", price: 110, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Onion_Uthappam.jpg" },
      { id: 505, name: "Idli Sambar", price: 90, rating: 4.2, image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Idli_Sambar.jpg" },
      { id: 506, name: "Set Dosa", price: 140, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Set_dosa.jpg" },
      { id: 507, name: "Coconut Chutney", price: 50, rating: 4.0, image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Coconut_Chutney.jpg" }
    ],
  },
  {
    id: 6,
    company: "Wow1 Mom Burger",
    menuItems: [
   { id: 601, name: "Wow Chicken Burger", price: 180, rating: 4.4, image: "https://wow1mom.com/images/chickenburger.jpg" },
      { id: 602, name: "Veggie Burger", price: 150, rating: 4.2, image: "https://wow1mom.com/images/veggieburger.jpg" },
      { id: 603, name: "Cheese Burger", price: 170, rating: 4.3, image: "https://wow1mom.com/images/cheeseburger.jpg" },
      { id: 604, name: "Double Patty Burger", price: 220, rating: 4.5, image: "https://wow1mom.com/images/doublepattyburger.jpg" },
      { id: 605, name: "French Fries", price: 90, rating: 4.1, image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/French_fries_2.jpg" },
      { id: 606, name: "Onion Rings", price: 120, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Onion_rings.jpg" },
      { id: 607, name: "Soft Drink", price: 80, rating: 4.0, image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Soft_drink_glass.jpg" }
    ],
  },
  {
    id: 7,
    company: "Giani's - Ice Cream, Shakes & Sundaes",
    menuItems: [
      { id: 701, name: "Vanilla Ice Cream", price: 60, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ice_Cream_Vanilla_%28cropped%29.jpg" },
      { id: 702, name: "Chocolate Shake", price: 90, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chocolate_ice_cream.jpg" },
      { id: 703, name: "Strawberry Sundae", price: 120, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Strawberry_donut.jpg" },
      { id: 704, name: "Mango Sorbet", price: 110, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Mango_sorbet.jpg" },
      { id: 705, name: "Chocolate Chip Cookie Dough", price: 130, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Chocolate_chip_cookie_dough.jpg" },
      { id: 706, name: "Oreo Shake", price: 100, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Oreo_Shake.jpg" },
      { id: 707, name: "Caramel Sundae", price: 140, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Caramel_sundae.jpg" }
    ],
  },
  {
    id: 8,
    company: "Bakington",
   menuItems: [
      { id: 801, name: "Honey Glazed Donuts", price: 120, rating: 4.6, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
      { id: 802, name: "Cinnamon Rolls", price: 100, rating: 4.5, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
      { id: 803, name: "Classic Cheesecake", price: 300, rating: 4.7, image: "https://images.unsplash.com/photo-1562440499-64b91d63c08a" },
      { id: 804, name: "Blueberry Muffin", price: 150, rating: 4.4, image: "https://images.unsplash.com/photo-1562440499-1c02c5a70d07" },
      { id: 805, name: "Red Velvet Cake", price: 350, rating: 4.8, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
      { id: 806, name: "Chocolate Croissant", price: 180, rating: 4.6, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
      { id: 807, name: "Lemon Tart", price: 200, rating: 4.7, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" }
    ],
  },
  {
    id: 9,
    company: "Honey & Dough",
    menuItems: [
      { id: 901, name: "Honey Glazed Donuts", price: 120, rating: 4.7, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
      { id: 902, name: "Cinnamon Swirls", price: 110, rating: 4.6, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
      { id: 903, name: "Maple Pecan Danish", price: 130, rating: 4.8, image: "https://images.unsplash.com/photo-1562440499-64b91d63c08a" },
      { id: 904, name: "Strawberry Danish", price: 140, rating: 4.5, image: "https://images.unsplash.com/photo-1562440499-9ed9e29cc91f" },
      { id: 905, name: "Chocolate Eclair", price: 170, rating: 4.6, image: "https://images.unsplash.com/photo-1504674900247-e26f74f7ff1e" },
      { id: 906, name: "Vanilla Bean Scone", price: 150, rating: 4.4, image: "https://images.unsplash.com/photo-1509042239860-5d0d5e4b9b25" },
      { id: 907, name: "Cranberry Muffin", price: 130, rating: 4.5, image: "https://images.unsplash.com/photo-1562440499-7b40f6a012f2" }
    ],
  },
  {
    id: 10,
    company: "Therbroma",
     menuItems: [
      { id: 1001, name: "Hot Chocolate", price: 150, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Hot_Chocolate.jpg" },
      { id: 1002, name: "Cappuccino", price: 120, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" },
      { id: 1003, name: "Espresso", price: 100, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Espresso-01.jpg" },
      { id: 1004, name: "Latte", price: 130, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Latte_art_3.jpg" },
      { id: 1005, name: "Mocha", price: 140, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Mocha_coffee.jpg" },
      { id: 1006, name: "Americano", price: 110, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Americano_coffee.jpg" },
      { id: 1007, name: "Macchiato", price: 120, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Caffe_macchiato.jpg" }
    ],
  },
  {
    id: 11,
    company: "McDonald",
    menuItems: [
      { id: 1101, name: "Big Mac", price: 250, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Big_Mac_hamburger.jpg" },
      { id: 1102, name: "McChicken", price: 200, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/McChicken_Sandwich.jpg" },
      { id: 1103, name: "French Fries", price: 100, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/French_fries_1.jpg" },
      { id: 1104, name: "McNuggets", price: 220, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/McNuggets.jpg" },
      { id: 1105, name: "Filet-O-Fish", price: 230, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Filet-o-fish_mcdonalds.jpg" },
      { id: 1106, name: "McFlurry", price: 150, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/McFlurry.jpg" },
      { id: 1107, name: "Apple Pie", price: 130, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mcdonalds_apple_pie.jpg" }
    ],
  },
  {
    id: 12,
    company: "Punjab Sweet Corner",
     menuItems: [
      { id: 1201, name: "Gulab Jamun", price: 140, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Gulab_jamun.jpg" },
      { id: 1202, name: "Jalebi", price: 130, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Jalebi_Indian_sweets.jpg" },
      { id: 1203, name: "Rasgulla", price: 150, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rasgulla.jpg" },
      { id: 1204, name: "Barfi", price: 120, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Barfi.jpg" },
      { id: 1205, name: "Peda", price: 100, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Peda.jpg" },
      { id: 1206, name: "Kaju Katli", price: 200, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Kaju_Katli.jpg" },
      { id: 1207, name: "Ladoo", price: 110, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Laddoo.jpg" }
    ],
  },
  {
    id: 13,
    company: "Creme Castle - Cake and Dessert",
     menuItems: [
      { id: 1301, name: "Chocolate Cake", price: 400, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Chocolate_cake_slice.jpg" },
      { id: 1302, name: "Vanilla Cupcake", price: 150, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Vanilla_cupcake_with_chocolate_chips.jpg" },
      { id: 1303, name: "Red Velvet Cupcake", price: 160, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Red_velvet_cupcake.jpg" },
      { id: 1304, name: "Carrot Cake", price: 380, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Carrot_cake_slice.jpg" },
      { id: 1305, name: "Black Forest Cake", price: 450, rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_forest_cake_slice.jpg" },
      { id: 1306, name: "Cheesecake Brownie", price: 350, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Cheesecake_brownie.jpg" },
      { id: 1307, name: "Lemon Drizzle Cake", price: 300, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Lemon_drizzle_cake_slice.jpg" }
    ],
},
  {
    id: 14,
    company: "Grill Station",
   menuItems: [
      { id: 1401, name: "Grilled Chicken", price: 350, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Grilled_Chicken_on_BBQ.jpg" },
      { id: 1402, name: "Grilled Fish", price: 400, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Grilled_fish.jpg" },
      { id: 1403, name: "Grilled Veggie Skewers", price: 250, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Grilled_vegetables_skewers.jpg" },
      { id: 1404, name: "BBQ Ribs", price: 450, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/BBQ_ribs.jpg" },
      { id: 1405, name: "Grilled Prawns", price: 380, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Grilled_prawns.jpg" },
      { id: 1406, name: "Grilled Lamb Chops", price: 500, rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Grilled_lamb_chops.jpg" },
      { id: 1407, name: "Grilled Corn", price: 150, rating: 4.3, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Grilled_corn_on_the_cob.jpg" }
    ],
  },
  {
    id: 15,
    company: "Biryani Blues",
    menuItems: [
       { id: 1501, name: "Hyderabadi Biryani", price: 350, rating: 4.9, image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Hyderabadi_Biryani.jpg" },
      { id: 1502, name: "Chicken Biryani", price: 300, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Chicken_Biryani.jpg" },
      { id: 1503, name: "Veg Biryani", price: 250, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Veg_Biryani.jpg" },
      { id: 1504, name: "Mutton Biryani", price: 400, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Mutton_Biryani.jpg" },
      { id: 1505, name: "Egg Biryani", price: 280, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Egg_Biryani.jpg" },
      { id: 1506, name: "Paneer Biryani", price: 270, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Paneer_Biryani.jpg" },
      { id: 1507, name: "Fish Biryani", price: 380, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Fish_Biryani.jpg" }
    ],
  },
  {
    id: 16,
    company: "Karim's",
    menuItems: [
    { id: 1601, name: "Mutton Korma", price: 500, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mutton_Korma.jpg" },
      { id: 1602, name: "Chicken Seekh Kebab", price: 300, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Chicken_Seekh_Kebab.jpg" },
      { id: 1603, name: "Nihari", price: 450, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Nihari.jpg" },
      { id: 1604, name: "Chicken Biryani", price: 350, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Chicken_Biryani.jpg" },
      { id: 1605, name: "Kaleji Masala", price: 400, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kaleji_Masala.jpg" },
      { id: 1606, name: "Roghani Naan", price: 100, rating: 4.4, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Roghani_Naan.jpg" },
      { id: 1607, name: "Seekh Kebab", price: 320, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Seekh_Kebab.jpg" }
    ],
  },
  {
    id: 17,
    company: "Giani - Burger & North Indian Food",
    menuItems: [
       { id: 1701, name: "Classic Chicken Burger", price: 150, rating: 4.3, image: "https://example.com/giani_chicken_burger.jpg" },
      { id: 1702, name: "Paneer Tikka Burger", price: 140, rating: 4.4, image: "https://example.com/giani_paneer_burger.jpg" },
      { id: 1703, name: "Butter Chicken", price: 320, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Butter_chicken.jpg" },
      { id: 1704, name: "Dal Makhani", price: 200, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Dal_Makhani.jpg" },
      { id: 1705, name: "Veg Burger", price: 130, rating: 4.3, image: "https://example.com/giani_veg_burger.jpg" },
      { id: 1706, name: "Chicken Tikka", price: 350, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Chicken_Tikka.jpg" },
      { id: 1707, name: "Paneer Butter Masala", price: 280, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Paneer_Butter_Masala.jpg" }
    ],
  },
  {
    id: 18,
    company: "Meghana Food",
   menuItems: [
      { id: 1801, name: "Chicken 65", price: 280, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chicken_65.jpg" },
      { id: 1802, name: "Masala Dosa", price: 120, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Masala_Dosa.jpg" },
      { id: 1803, name: "Mutton Biryani", price: 400, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Mutton_Biryani.jpg" },
      { id: 1804, name: "Paneer Butter Masala", price: 280, rating: 4.6, image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Paneer_Butter_Masala.jpg" },
      { id: 1805, name: "Chicken Biryani", price: 350, rating: 4.7, image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Chicken_Biryani.jpg" },
      { id: 1806, name: "Veg Biryani", price: 250, rating: 4.5, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Veg_Biryani.jpg" },
      { id: 1807, name: "Gongura Mutton", price: 450, rating: 4.8, image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Gongura_Mutton.jpg" }
    ],
  },
  {
    id: 19,
    company: "Mad Over Donuts",
    menuItems: [
        { "id": 1901, "name": "Choco Fudge Donut", "price": 100, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Chocolate_donut.jpg" },
      { "id": 1902, "name": "Strawberry Donut", "price": 100, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Strawberry_donut.jpg" },
      { "id": 1903, "name": "Glazed Donut", "price": 90, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Glazed_donut.jpg" },
      { "id": 1904, "name": "Blueberry Donut", "price": 110, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Blueberry_donut.jpg" },
      { "id": 1905, "name": "Sugar Donut", "price": 85, "rating": 4.2, "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Sugar_donut.jpg" },
      { "id": 1906, "name": "Vanilla Donut", "price": 95, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Vanilla_donut.jpg" },
      { "id": 1907, "name": "Cinnamon Donut", "price": 100, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cinnamon_donut.jpg" }
    ],
  },
  {
    id: 20,
    company: "Daily Kitchen Home Meals",
    menuItems: [
      { "id": 2001, "name": "Dal Tadka", "price": 120, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dal_tadka.jpg" },
      { "id": 2002, "name": "Jeera Rice", "price": 90, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Jeera_rice.jpg" },
      { "id": 2003, "name": "Paneer Butter Masala", "price": 150, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Paneer_butter_masala.jpg" },
      { "id": 2004, "name": "Roti", "price": 20, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Indian_roti.jpg" },
      { "id": 2005, "name": "Mixed Veg Curry", "price": 130, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Mixed_vegetable_curry.jpg" },
      { "id": 2006, "name": "Rajma", "price": 110, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Rajma_dish.jpg" },
      { "id": 2007, "name": "Boondi Raita", "price": 60, "rating": 4.2, "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Raita.jpg" }
    ],
},
     {
    id: 21,
    company: "Chaayos - Chai and Snacks",
    menuItems: [
     { "id": 2101, "name": "Adrak Chai", "price": 50, "rating": 4.7, "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Indian_Chai_tea.jpg" },
      { "id": 2102, "name": "Samosa", "price": 30, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/1/11/Samosa-01.jpg" },
      { "id": 2103, "name": "Masala Chai", "price": 55, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/Masala_chai_tea.jpg" },
      { "id": 2104, "name": "Paneer Tikka", "price": 120, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/3/33/Paneer_Tikka.jpg" },
      { "id": 2105, "name": "Kachori", "price": 35, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Kachori_01.jpg" },
      { "id": 2106, "name": "Veg Sandwich", "price": 60, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/1/11/Veg_sandwich.jpg" },
      { "id": 2107, "name": "Chocolate Muffin", "price": 80, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Chocolate_muffin.jpg" }
    ],
  },
  {
    id: 22,
    company: "The Calzones",
    menuItems: [
          { "id": 2201, "name": "Chicken Calzone", "price": 250, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Calzone.jpg" },
      { "id": 2202, "name": "Veg Calzone", "price": 200, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Veggie_calzone.jpg" },
      { "id": 2203, "name": "Pepperoni Calzone", "price": 270, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Pepperoni_pizza.jpg" },
      { "id": 2204, "name": "Cheese Calzone", "price": 230, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Cheese_calzone.jpg" },
      { "id": 2205, "name": "Mushroom Calzone", "price": 220, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mushroom_pizza.jpg" },
      { "id": 2206, "name": "Spinach Calzone", "price": 210, "rating": 4.2, "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/Spinach_pizza.jpg" },
      { "id": 2207, "name": "BBQ Chicken Calzone", "price": 280, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/BBQ_chicken_pizza.jpg" }
    ]
     ,
  },
  {
    id: 23,
    company: "Mishtanam Aggarwal",
    menuItems: [
     { "id": 2301, "name": "Rabri", "price": 120, "rating": 4.7, "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Rabri_Dessert.jpg" },
      { "id": 2302, "name": "Kheer", "price": 100, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Kheer_-_Indian_Dessert.jpg" },
      { "id": 2303, "name": "Gulab Jamun", "price": 90, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Gulab_jamun_2.jpg" },
      { "id": 2304, "name": "Jalebi", "price": 80, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jalebi.jpg" },
      { "id": 2305, "name": "Ladoo", "price": 70, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/4/43/Ladoo.jpg" },
      { "id": 2306, "name": "Barfi", "price": 90, "rating": 4.3, "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Barfi.jpg" },
      { "id": 2307, "name": "Peda", "price": 95, "rating": 4.2, "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Peda.jpg" }
    ],
  },
  {
    id: 24,
    company: "Amul Ice Cream Parlour",
    menuItems: [
     { "id": 2401, "name": "Vanilla Ice Cream", "price": 60, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ice_Cream_Vanilla_%28cropped%29.jpg" },
      { "id": 2402, "name": "Chocolate Ice Cream", "price": 70, "rating": 4.7, "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Chocolate_ice_cream.jpg" },
      { "id": 2403, "name": "Mango Ice Cream", "price": 65, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Mango_ice_cream.jpg" },
      { "id": 2404, "name": "Strawberry Ice Cream", "price": 65, "rating": 4.4, "image": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Strawberry_ice_cream.jpg" },
      { "id": 2405, "name": "Butterscotch Ice Cream", "price": 70, "rating": 4.6, "image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Butterscotch_ice_cream.jpg" },
      { "id": 2406, "name": "Coffee Ice Cream", "price": 75, "rating": 4.5, "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Coffee_ice_cream.jpg" },
      { "id": 2407, "name": "Pista Ice Cream", "price": 80, "rating": 4.7, "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Pista_ice_cream.jpg" }
    ],
  
  }

];

export default combinedMenu;
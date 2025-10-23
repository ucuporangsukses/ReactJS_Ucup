let id = 1;
function p(brand, title, price) {
  return { id: String(id++), brand, title, price, image: "/assets/placeholder.jpg", description: `${brand} ${title} - stylish & comfy.` };
}

const PRODUCTS = [
  // Nike (5)
  p("Nike", "Air Max 90", 120),
  p("Nike", "Jordan Hoodie", 90),
  p("Nike", "Dri-Fit Tee", 35),
  p("Nike", "Sports Shorts", 30),
  p("Nike", "Running Cap", 20),

  // Adidas (5)
  p("Adidas", "Ultraboost", 150),
  p("Adidas", "Adicolor Hoodie", 85),
  p("Adidas", "3-Stripes Tee", 40),
  p("Adidas", "Tiro Track Pants", 55),
  p("Adidas", "Baseball Cap", 18),

  // Converse (5)
  p("Converse", "Chuck Taylor All Star", 70),
  p("Converse", "Canvas Tee", 28),
  p("Converse", "Denim Jacket", 95),
  p("Converse", "High Socks", 12),
  p("Converse", "Retro Hoodie", 60),

  // Uniqlo (5)
  p("Uniqlo", "U Crew Neck Tee", 20),
  p("Uniqlo", "Blocktech Parka", 120),
  p("Uniqlo", "Flannel Shirt", 45),
  p("Uniqlo", "Heattech Legging", 25),
  p("Uniqlo", "Relaxed Jeans", 50),

  // H&M (5)
  p("H&M", "Basic Cotton Tee", 15),
  p("H&M", "Faux Leather Jacket", 110),
  p("H&M", "Ribbed Sweater", 35),
  p("H&M", "Chino Pants", 40),
  p("H&M", "Bucket Hat", 18),

  // Kangol (5)
  p("Kangol", "Wool 504 Cap", 48),
  p("Kangol", "Tropic Casual Hat", 38),
  p("Kangol", "Logo Tee", 30),
  p("Kangol", "Vintage Jacket", 99),
  p("Kangol", "Casual Shorts", 28),

  // Prada (5)
  p("Prada", "Saffiano Leather Bag", 950),
  p("Prada", "Logo T-Shirt", 250),
  p("Prada", "Silk Scarf", 320),
  p("Prada", "Techno Jacket", 1500),
  p("Prada", "Designer Belt", 420),

  // Burberry (5)
  p("Burberry", "Trench Coat", 1200),
  p("Burberry", "Classic Scarf", 380),
  p("Burberry", "Vintage Tee", 220),
  p("Burberry", "Leather Wallet", 260),
  p("Burberry", "Check Cap", 95),

  // Calle (5)
  p("Calle", "Calle Runner Sneaker", 80),
  p("Calle", "Calle Oversized Tee", 35),
  p("Calle", "Calle Denim", 60),
  p("Calle", "Calle Hoodie", 70),
  p("Calle", "Calle Beanie", 22),
];

export function fetchProducts({ q = "", brand = "all", sort = "title" } = {}) {
  return new Promise((res) => {
    setTimeout(() => {
      let arr = PRODUCTS.slice();
      if (brand !== "all") arr = arr.filter((x) => x.brand.toLowerCase() === brand.toLowerCase());
      if (q) arr = arr.filter((x) => x.title.toLowerCase().includes(q.toLowerCase()) || x.brand.toLowerCase().includes(q.toLowerCase()));
      if (sort === "price") arr.sort((a, b) => a.price - b.price);
      else arr.sort((a, b) => a.title.localeCompare(b.title));
      res(arr);
    }, 250);
  });
}

export function fetchProductById(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const found = PRODUCTS.find((x) => x.id === id);
      if (found) res(found);
      else rej(new Error("Not found"));
    }, 200);
  });
}

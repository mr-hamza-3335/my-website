export const categoryData: {
  [key: string]: {
    title: string;
    description: string;
    heroImage: string;
    featuredProducts: Array<{
      id: number;
      name: string;
      price: number;
      image: string;
    }>;
  };
} = {
  'plant-pots': {
    title: 'Plant Pots',
    description: 'Discover our collection of stylish and functional plant pots to enhance your indoor and outdoor spaces.',
    heroImage: '/images/plant-pots-hero.jpg',
    featuredProducts: [
      { id: 1, name: 'Ceramic Plant Pot', price: 3500, image: '/images/ceramic-plant-pot.jpg' },
      { id: 2, name: 'Terracotta Planter', price: 2500, image: '/images/terracotta-planter.jpg' },
      { id: 3, name: 'Hanging Planter', price: 4000, image: '/images/hanging-planter.jpg' },
      { id: 4, name: 'Modern White Pot', price: 3000, image: '/images/modern-white-pot.jpg' },
      { id: 5, name: 'Rustic Wooden Planter', price: 4500, image: '/images/rustic-wooden-planter.jpg' },
      { id: 6, name: 'Concrete Pot Set', price: 5500, image: '/images/concrete-pot-set.jpg' },
    ]
  },
  'ceramics': {
    title: 'Ceramics',
    description: 'Explore our handcrafted ceramic collection, featuring unique pieces for your home.',
    heroImage: '/images/ceramics-hero.jpg',
    featuredProducts: [
      { id: 7, name: 'Ceramic Vase', price: 5000, image: '/images/ceramic-vase.jpg' },
      { id: 8, name: 'Ceramic Bowl Set', price: 6500, image: '/images/ceramic-bowl-set.jpg' },
      { id: 9, name: 'Ceramic Mug', price: 1500, image: '/images/ceramic-mug.jpg' },
      { id: 10, name: 'Decorative Plate', price: 3500, image: '/images/decorative-plate.jpg' },
      { id: 11, name: 'Ceramic Candle Holder', price: 2500, image: '/images/ceramic-candle-holder.jpg' },
      { id: 12, name: 'Ceramic Serving Platter', price: 4500, image: '/images/ceramic-serving-platter.jpg' },
    ]
  },
  'tables': {
    title: 'Tables',
    description: 'Find the perfect table for your space, from dining tables to coffee tables and more.',
    heroImage: '/images/tables-hero.jpg',
    featuredProducts: [
      { id: 13, name: 'Wooden Dining Table', price: 49900, image: '/images/wooden-dining-table.jpg' },
      { id: 14, name: 'Marble Coffee Table', price: 29900, image: '/images/marble-coffee-table.jpg' },
      { id: 15, name: 'Side Table', price: 14900, image: '/images/side-table.jpg' },
      { id: 16, name: 'Glass Top Dining Table', price: 54900, image: '/images/glass-top-dining-table.jpg' },
      { id: 17, name: 'Extendable Dining Table', price: 64900, image: '/images/extendable-dining-table.jpg' },
      { id: 18, name: 'Nested Coffee Tables', price: 34900, image: '/images/nested-coffee-tables.jpg' },
    ]
  },
  'chairs': {
    title: 'Chairs',
    description: 'Sit in style with our diverse range of chairs, perfect for any room in your home.',
    heroImage: '/images/chairs-hero.jpg',
    featuredProducts: [
      { id: 19, name: 'Leather Armchair', price: 39900, image: '/images/leather-armchair.jpg' },
      { id: 20, name: 'Dining Chair Set', price: 29900, image: '/images/dining-chair-set.jpg' },
      { id: 21, name: 'Office Chair', price: 19900, image: '/images/office-chair.jpg' },
      { id: 22, name: 'Rocking Chair', price: 24900, image: '/images/rocking-chair.jpg' },
      { id: 23, name: 'Bar Stools Set', price: 34900, image: '/images/bar-stools-set.jpg' },
      { id: 24, name: 'Accent Chair', price: 29900, image: '/images/accent-chair.jpg' },
    ]
  },
  'crockery': {
    title: 'Crockery',
    description: 'Elevate your dining experience with our elegant and durable crockery collection.',
    heroImage: '/images/crockery-hero.jpg',
    featuredProducts: [
      { id: 25, name: 'Dinner Plate Set', price: 7900, image: '/images/dinner-plate-set.jpg' },
      { id: 26, name: 'Soup Bowl Set', price: 5900, image: '/images/soup-bowl-set.jpg' },
      { id: 27, name: 'Serving Platter', price: 4500, image: '/images/serving-platter.jpg' },
      { id: 28, name: 'Salad Bowl', price: 3900, image: '/images/salad-bowl.jpg' },
      { id: 29, name: 'Teacup and Saucer Set', price: 6900, image: '/images/teacup-saucer-set.jpg' },
      { id: 30, name: 'Pasta Bowl Set', price: 6500, image: '/images/pasta-bowl-set.jpg' },
    ]
  },
  'tableware': {
    title: 'Tableware',
    description: 'Complete your table setting with our stylish and functional tableware collection.',
    heroImage: '/images/tableware-hero.jpg',
    featuredProducts: [
      { id: 31, name: 'Cutlery Set', price: 9900, image: '/images/cutlery-set.jpg' },
      { id: 32, name: 'Wine Glass Set', price: 6900, image: '/images/wine-glass-set.jpg' },
      { id: 33, name: 'Table Runner', price: 3500, image: '/images/table-runner.jpg' },
      { id: 34, name: 'Napkin Rings Set', price: 2900, image: '/images/napkin-rings-set.jpg' },
      { id: 35, name: 'Placemat Set', price: 4500, image: '/images/placemat-set.jpg' },
      { id: 36, name: 'Water Pitcher', price: 5900, image: '/images/water-pitcher.jpg' },
    ]
  },
  'cutlery': {
    title: 'Cutlery',
    description: 'Dine in elegance with our premium cutlery sets, perfect for everyday use and special occasions.',
    heroImage: '/images/cutlery-hero.jpg',
    featuredProducts: [
      { id: 37, name: 'Stainless Steel Cutlery Set', price: 12900, image: '/images/stainless-steel-cutlery-set.jpg' },
      { id: 38, name: 'Gold-plated Cutlery Set', price: 19900, image: '/images/gold-plated-cutlery-set.jpg' },
      { id: 39, name: 'Wooden Handle Cutlery Set', price: 8900, image: '/images/wooden-handle-cutlery-set.jpg' },
      { id: 40, name: 'Black Matte Cutlery Set', price: 14900, image: '/images/black-matte-cutlery-set.jpg' },
      { id: 41, name: 'Serving Utensil Set', price: 7900, image: '/images/serving-utensil-set.jpg' },
      { id: 42, name: 'Dessert Cutlery Set', price: 6900, image: '/images/dessert-cutlery-set.jpg' },
    ]
  }
}


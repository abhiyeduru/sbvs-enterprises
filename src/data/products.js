export const getImageUrl = (path) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${cleanPath}`;
};

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'water', name: 'Packaged Drinking Water', icon: 'Droplets' },
  { id: 'soda', name: 'Soda', icon: 'Zap' },
  { id: 'drinks', name: 'Drinks', icon: 'Wine' },
  { id: 'food', name: 'Food', icon: 'Utensils' },
];

export const WATER_SIZES = [
  { size: '250 ml', label: 'Compact Event Bottle', popular: false },
  { size: '300 ml', label: 'Travel & Dining Pack', popular: false },
  { size: '500 ml', label: 'Everyday Portable Bottle', popular: true },
  { size: '1 Litre', label: 'Standard Family Bottle', popular: true },
  { size: '2 Litres', label: 'Bulk Hydration Pack', popular: false },
];

export const PRODUCTS = [
  {
    id: 'packaged-drinking-water',
    name: 'Aquelle Packaged Drinking Water',
    category: 'water',
    categoryName: 'Packaged Drinking Water',
    tagline: 'Pure, crisp packaged drinking water in 500ml & multi-size PET bottles.',
    description: 'Aquelle Packaged Drinking Water undergoes multi-stage purification to deliver clean, crisp, and safe drinking water for households, events, B2B wholesale, and hospitality.',
    image: getImageUrl('images/water.jpg'),
    sizes: ['250 ml', '300 ml', '500 ml', '1 Litre', '2 Litres'],
    defaultSize: '500 ml',
    badge: 'Core Essential',
    isPopular: true,
    highlights: [
      'Multi-stage filtration process',
      'Available in 5 convenient sizes',
      'Hygienically bottled PET containers',
      'Ideal for events, B2B retail, and family use'
    ]
  },
  {
    id: 'lemon-soda',
    name: 'Lemon & Salt Soda',
    category: 'soda',
    categoryName: 'Soda',
    tagline: 'Zesty lemon and tangy salt fizz for instant cooling refreshment.',
    description: 'BIT 2.0 Lemon & Salt Soda delivers a crisp carbonated blend of citrus lemon and tangy salt flavor. Perfectly balanced for an instant burst of cooling refreshment.',
    image: getImageUrl('images/lemon_soda.jpg'),
    badge: 'Popular Soda',
    isPopular: true,
    highlights: ['Zesty Lemon & Salt', 'High Carbonation Fizz', 'Instant Refreshment']
  },
  {
    id: 'plain-soda',
    name: 'Plain Soda / Power Soda',
    category: 'soda',
    categoryName: 'Soda',
    tagline: 'BIT Power Soda - Extra bubbly, crystal clear carbonated soda.',
    description: 'BIT Power Soda delivers maximum carbonation and intense fizz. Crisp, crystal-clear carbonated soda bottled for instant refreshing energy.',
    image: getImageUrl('images/plain_soda.jpg'),
    badge: 'Power Fizz',
    isPopular: false,
    highlights: ['Maximum Carbonation', 'Extra Bubbly Fizz', 'Versatile Beverage Mixer']
  },
  {
    id: 'zeera-soda',
    name: 'Zeera Soda',
    category: 'soda',
    categoryName: 'Soda',
    tagline: 'Traditional Indian cumin-spiced carbonated refreshment.',
    description: 'Authentic Indian spiced soda crafted with aromatic roasted cumin and herbs. Delivers a uniquely digestive, savory, and fizzy experience.',
    image: getImageUrl('images/zeera_soda.png'),
    badge: 'Desi Favorite',
    isPopular: true,
    highlights: ['Roasted Cumin Aroma', 'Digestive Blend', 'Authentic Indian Flavor']
  },
  {
    id: 'lemon-drink',
    name: 'Lemon',
    category: 'drinks',
    categoryName: 'Drinks',
    tagline: 'Classic sweet and tangy citrus juice drink.',
    description: 'Vibrant lemon-flavored fruit beverage crafted for instant chilling refreshment on warm sunny days.',
    image: getImageUrl('images/lemon_soda.png'),
    badge: 'Refreshing',
    isPopular: false,
    highlights: ['Tangy Citrus Blend', 'Instant Energy Boost', 'Crisp Finish']
  },
  {
    id: 'clear-lemon-drink',
    name: 'Clear Lemon',
    category: 'drinks',
    categoryName: 'Drinks',
    tagline: 'Crystal clear lemon-lime sparkling beverage.',
    description: 'Clean, light, and crisp clear lemon-lime flavored drink offering a sharp citrus bite without added colors.',
    image: getImageUrl('images/clear_lemon_drink.png'),
    badge: 'Clear & Crisp',
    isPopular: true,
    highlights: ['No Artificial Color', 'Crisp Lime Punch', 'Ultra Hydrating']
  },
  {
    id: 'orange-drink',
    name: 'Orange',
    category: 'drinks',
    categoryName: 'Drinks',
    tagline: 'Bursting with sunny orange citrus delight.',
    description: 'Bright and juicy orange-flavored soft drink delivering sweet citrus joy loved by kids and adults alike.',
    image: getImageUrl('images/orange_drink.png'),
    badge: 'Fruity Blast',
    isPopular: true,
    highlights: ['Rich Orange Flavor', 'Vibrant Color & Taste', 'Party Favorite']
  },
  {
    id: 'grape-drink',
    name: 'Grape',
    category: 'drinks',
    categoryName: 'Drinks',
    tagline: 'Rich juicy grape indulgence.',
    description: 'Deep purple grape flavored drink with a sweet fruit aroma and delightfully smooth refreshing finish.',
    image: getImageUrl('images/grape_drink.png'),
    badge: 'Rich Flavor',
    isPopular: false,
    highlights: ['Juicy Grape Taste', 'Refreshing Aroma', 'Smooth Texture']
  },
  {
    id: 'cola-drink',
    name: 'Cola',
    category: 'drinks',
    categoryName: 'Drinks',
    tagline: 'Bold, fizzy cola refreshment.',
    description: 'Rich dark cola beverage with classic fizz and rich caramel notes, bottled chilled for maximum satisfaction.',
    image: getImageUrl('images/cola_drink.png'),
    badge: 'Classic Cola',
    isPopular: true,
    highlights: ['Classic Caramel Notes', 'Deep Carbonation', 'Universally Loved']
  },
  {
    id: 'pickles',
    name: 'Pickles',
    category: 'food',
    categoryName: 'Food',
    tagline: 'Authentic traditional South Indian handmade pickles.',
    description: 'Traditional South Indian pickles handcrafted with aromatic spices, cold-pressed oils, and fresh regional ingredients.',
    image: getImageUrl('images/pickles.png'),
    badge: 'Traditional Recipe',
    isPopular: true,
    highlights: ['Authentic Spices', 'Handcrafted Batches', 'Rich Aromatic Oil']
  },
  {
    id: 'powders',
    name: 'Powders',
    category: 'food',
    categoryName: 'Food',
    tagline: 'Aromatic spice powders and traditional podulu.',
    description: 'Aromatic homemade style spice blends, podulu, sambar, and chutney powders milled to perfection for authentic South Indian flavor.',
    image: getImageUrl('images/powders.png'),
    badge: 'Freshly Ground',
    isPopular: false,
    highlights: ['Fresh Spice Blend', 'Pure Ingredients', 'Versatile Culinary Powder']
  },
  {
    id: 'snacks',
    name: 'Snacks',
    category: 'food',
    categoryName: 'Food',
    tagline: 'Crispy, savory traditional South Indian snacks.',
    description: 'Golden crispy South Indian savory snacks packaged fresh to maintain crunch, flavor, and authentic taste.',
    image: getImageUrl('images/snacks.png'),
    badge: 'Crunchy Snack',
    isPopular: true,
    highlights: ['Golden Crunch', 'Hygienic Sealed Packets', 'Perfect Tea-Time Snack']
  }
];

export const COMPANY_INFO = {
  name: 'SBVS ENTERPRISES',
  tagline: 'Refreshing Products. Trusted Quality.',
  category: 'Food & Beverages',
  address: {
    street: 'Sy.No. 33, Billavaka (V)',
    post: 'S. Agraharam (P)',
    mandal: 'Rowthulapudi (M)',
    district: 'East Godavari (Dt.)',
    state: 'Andhra Pradesh',
    pincode: '533285',
    country: 'India',
    full: 'Sy.No. 33, Billavaka (V), S. Agraharam (P), Rowthulapudi (M), East Godavari (Dt.), Andhra Pradesh – 533285, India'
  },
  contact: {
    phones: [
      {
        number: '9866007536',
        display: '+91 98660 07536',
        callUrl: 'tel:+919866007536',
        whatsappUrl: 'https://wa.me/919866007536?text=Hello%20SBVS%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.'
      },
      {
        number: '7675898952',
        display: '+91 76758 98952',
        callUrl: 'tel:+917675898952',
        whatsappUrl: 'https://wa.me/917675898952?text=Hello%20SBVS%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.'
      }
    ],
    phonePlaceholder: '+91 98660 07536 / +91 76758 98952',
    phoneCallUrl: 'tel:+919866007536',
    whatsappNumber: '919866007536',
    whatsappUrl: 'https://wa.me/919866007536?text=Hello%20SBVS%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.',
    emailPlaceholder: 'enquiry@sbvsenterprises.com',
  }
};

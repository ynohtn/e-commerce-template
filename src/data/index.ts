import { v4 as uuidv4 } from 'uuid';

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products = [
  {
    id: uuidv4(),
    name: 'Black T-shirt',
    price: 26.64,
    image:
      'https://images.asos-media.com/products/asos-design-t-shirt-oversize-a-imprime-soleil-au-dos-noir/21914352-2?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'Black Hoodie',
    price: 69.99,
    image:
      'https://images.asos-media.com/products/nike-hoodie-oversize-a-mini-logo-virgule-noir/14875257-1-black?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'Black Socks',
    price: 7.99,
    image:
      'https://images.asos-media.com/products/lacoste-chaussettes-unies-noir/22732656-1-black?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'White T-shirt',
    price: 12.99,
    image:
      'https://images.asos-media.com/products/stradivarius-t-shirt-court-en-polyester-recycle-cotele-piece-ensemble-blanc/23662509-1-white?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'White Hoodie',
    price: 63.83,
    image:
      'https://images.asos-media.com/products/noisy-may-hoodie-long-creme/23122931-1-cream?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'White Socks',
    price: 6.99,
    image:
      'https://images.asos-media.com/products/adidas-running-lot-de-3-paires-de-chaussettes-rembourrees-blanc/21308995-3?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'Purple T-shirt',
    price: 23.49,
    image:
      'https://images.asos-media.com/products/asos-design-t-shirt-oversize-gaufre-violet/21467815-1-vintageviolet?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'Purple Hoodie',
    price: 98.99,
    image:
      'https://images.asos-media.com/products/asos-design-hoodie-oversize-piece-densemble-violet/22763267-1-dahliapurple?$XXL$&wid=513&fit=constrain'
  },
  {
    id: uuidv4(),
    name: 'Pink Socks',
    price: 9.99,
    image:
      'https://images.asos-media.com/products/asos-design-chaussettes-hauteur-mollet-avec-broderie-champignon-rose/21938917-1-pink?$XXL$&wid=513&fit=constrain'
  }
];

export interface DropdownType {
  text: string;
  dropdown: DropdownItemType[];
}

export interface DropdownItemType {
  text: string;
  href: string;
}

export const nav = [
  {
    text: 'Shop',
    dropdown: [
      { text: 'Everything', href: '/shop' },
      { text: 'Hoodies', href: '/shop/hoodies' },
      { text: 'Socks', href: '/shop/socks' },
      { text: 'T-shirts', href: '/shop/t-shirts' }
    ]
  },
  {
    text: 'Info',
    dropdown: [
      { text: 'Our Story', href: '/about' },
      { text: 'FAQ', href: '/faq' }
    ]
  }
];

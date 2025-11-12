import { id } from "zod/locales";


export const MENU_ITEMS = [
    { name: 'Men', link: '/men' },
    { name: 'Women', link: '/women' },
    { name: 'Top Wear', link: '/topwear' },
    { name: 'Bottom Wear', link: '/bottomwear' },
];


export const CART_ITEMS = [
    {
        productId: 1,
        name: 'T-shirt',
        size: 'M',
        color: 'Red',
        quantity: 1,
        price: 15,
        image: 'https://picsum.photos/200?random=1'
    },
    {
        productId: 2,
        name: 'Jeans',
        size: 'L',
        color: 'Blue',
        quantity: 1,
        price: 5,
        image: 'https://picsum.photos/200?random=2'
    },
    {
        productId: 3,
        name: 'Hoodie',
        size: 'S',
        color: 'Purple',
        quantity: 2,
        price: 35,
        image: 'https://picsum.photos/200?random=3'
    },
    {
        productId: 4,
        name: 'Dress',
        size: 'S',
        color: 'Green',
        quantity: 20,
        price: 25,
        image: 'https://picsum.photos/200?random=4'
    }
]

export const SHOP_LINKS = [
    { name: "Men's Top Wear", link: '/mens-topwear' },
    { name: "Women's Top Wear", link: '/womens-topwear' },
    { name: "Men's Bottom Wear", link: '/mens-bottomwear' },
    { name: "Women's Bottom Wear", link: '/womens-bottomwear' }
]

export const SUPPORT_LINKS = [
    { name: 'Help Center', link: '/help-center' },
    { name: 'Returns', link: '/returns' },
    { name: 'Shipping Info', link: '/shipping-info' },
    { name: 'Contact Us', link: '/contact-us' }
]

export const COMPANY_LINKS = [
    { name: 'About Us', link: '/about-us' },
    { name: 'Careers', link: '/careers' },
    { name: 'Press', link: '/press' },
    { name: 'Blog', link: '/blog' }
]


export const NewArrivals_ITEM = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 19.99,
        image: [
            {
              url:'https://picsum.photos/300?random=11',
              altText: 'Classic White T-Shirt Front View'
            }
        ]
    },
    {
        id: 2,
        name: 'Blue Denim Jeans',
        price: 49.99,
        image: [
            {
              url:'https://picsum.photos/300?random=12',
                altText: 'Blue Denim Jeans Front View'
            }
        ]
    },
    {
        id: 3,
        name: 'Red Hoodie', 
        price: 39.99,
        image: [
            {
              url:'https://picsum.photos/300?random=13',
                altText: 'Red Hoodie Front View'
            }]  
    },
    {
        id: 4,
        name: 'Black Leather Jacket',
        price: 89.99,
        image: [
            {
              url:'https://picsum.photos/300?random=14',
                altText: 'Black Leather Jacket Front View'
            }
        ]
    },
    {
        id: 5,
        name: 'Floral Summer Dress',
        price: 59.99,
        image: [
            {
              url:'https://picsum.photos/300?random=15',
                altText: 'Floral Summer Dress Front View'
            }
        ]   
    },
    {
        id: 6,
        name: 'Running Sneakers',
        price: 69.99,
        image: [
            {
              url:'https://picsum.photos/300?random=16',
                altText: 'Running Sneakers Side View'
            }
        ]  
    },
    {
        id: 7,
        name: 'Casual Chinos',
        price: 44.99,
        image: [
            {
                url:'https://picsum.photos/300?random=17',
                altText: 'Casual Chinos Front View'
            }
        ]  
    },
    {
        id: 8,
        name: 'Striped Polo Shirt',
        price: 29.99,
        image: [
            {
                url:'https://picsum.photos/300?random=18',
                altText: 'Striped Polo Shirt Front View'
            }
        ]  
    },
    {
        id: 9,
        name: 'Woolen Scarf',
        price: 24.99,
        image: [
            {
                url:'https://picsum.photos/300?random=19',
                altText: 'Woolen Scarf Front View'
            }
        ]  
    }
]

export const SelectedProduct = {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=21',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
};

export const SimilarProducts = [
    {
    id: 2,
    name: 'Dress',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=21',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 3,
    name: 'Hoodie',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=21',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 4,
    name: 'Classic White T-Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=21',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 5,
    name: 'Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=21',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
 }
]

export const PlaholderProducts = [
    {
    id: 6,
    name: 'Hoodie',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=55',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=64',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=24',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 7,
    name: 'Classic White T-Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=75',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=67',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=44',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 8,
    name: 'Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=41',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=22',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=12',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 9,
    name: 'Hoodie',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=42',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=23',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=2',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 11,
    name: 'Classic White T-Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=4',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=1',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=2',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
    },
    {
    id: 12,
    name: 'Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=11',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=123',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=321',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
 },
    {
    id: 12,
    name: 'Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=11',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=123',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=321',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
 },
    {
    id: 12,
    name: 'Shirt',
    price: 19.99,
    originalPrice: 29.99,
    description: 'A timeless classic, this white t-shirt is made from 100% organic cotton, offering both comfort and style. Perfect for any casual occasion, it features a crew neck and short sleeves.',
    brand: 'FashionCo',
    material: '100% Organic Cotton',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Gray'],
    images: [
        {
          url:'https://picsum.photos/400?random=11',
            altText: 'Classic White T-Shirt Front View'
        },
        {
          url:'https://picsum.photos/400?random=123',
            altText: 'Classic White T-Shirt Back View'
        },
        {
          url:'https://picsum.photos/400?random=321',
            altText: 'Classic White T-Shirt Side View'
        }
    ]
 }
]
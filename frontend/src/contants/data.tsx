import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

export const MENU_ADMIN = [
    { name: 'Users', link: '/admin/users',icons: <FaUsers /> },
    { name: 'Products', link: '/admin/products',icons:<AiFillProduct />  },
    { name: 'Orders', link: '/admin/orders',icons:<FaCartArrowDown />  },
    { name: 'Shop', link: '/',icons:<IoHome />  },
]

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

export const Order_Item = [
  {
    id: 123,
    createdAt: new Date(),
    shippingAddress: {city: 'Da Nang', country: "VN"},
    orderItems: [
      {
        name: 'Product 1',
        image: 'https://picsum.photos/500/500?random=1'
      }
    ],
    totalPrice: 100,
    isPaid: true
  },
  {
    id: 1321323,
    createdAt: new Date(),
    shippingAddress: {city: 'Hue', country: "VN"},
    orderItems: [
      {
        name: 'Product 2',
        image: 'https://picsum.photos/500/500?random=2'
      }
    ],
    totalPrice: 100,
    isPaid: true
  },
  {
    id: 333,
    createdAt: new Date(),
    shippingAddress: {city: 'Ha Noi', country: "VN"},
    orderItems: [
      {
        name: 'Product 4',
        image: 'https://picsum.photos/500/500?random=3'
      }
    ],
    totalPrice: 100,
    isPaid: true
  },
];

export const CheckOutITem = {
  products: [
  {
    name: "Stylish Jacket",
    size: 'M',
    color : 'Black',
    price: 120,
    image :'https://picsum.photos/500/500?random=3'
  },
  {
    name: "Stylish Jacket",
    size: 'M',
    color : 'Black',
    price: 120,
    image :'https://picsum.photos/500/500?random=3'
  },
  {
    name: "Stylish Jacket",
    size: 'M',
    color : 'Black',
    price: 120,
    image :'https://picsum.photos/500/500?random=3'
  }],
  totalPice: 500
}

export const CheckOrder = {
  id : 123,
  createdAt: new Date(),
  checkoutItems :[
    {
      productId: 1,
      name: "Jacket",
      color: "White",
      size: 'M',
      price: 150,
      quantity : 1,
      image :'https://picsum.photos/500/500?random=3'
    },
    {
      productId: 2,
      name: "Jacket",
      color: "White",
      size: 'L',
      price: 150,
      quantity : 1,
      image :'https://picsum.photos/500/500?random=44'
    }
  ],
  shippingAddress: {
    address: '123 Fashion Street',
    city: "New York",
    country: "USA"
  }
}

export const mockOrderDetails = {
    id : 1,
    createdAt: new Date(),
    isPaid: true,
    isDelivered: false,
    paymenMethod: 'Paypal',
    shippingMethod: 'Standard',
    shippingAddress: {city: 'New York',country: "USA"},
    orderItems: [
      {
        productId: 1,
        name: 'jacket',
        price: 120,
        quantity: 2,
        image: 'https://picsum.photos/500/500?random=25'
      },
      {
        productId: 2,
        name: 'Dress',
        price: 120,
        quantity: 2,
        image: 'https://picsum.photos/500/500?random=23'
      },
      {
        productId: 3,
        name: 'T-Shrit',
        price: 120,
        quantity: 2,
        image: 'https://picsum.photos/500/500?random=52'
      }
    ]

}

export const ORDER_LIST = [
  {
    id: '645654dasdasd67dasd',
    user: 'Admin User',
    totalPrice:'199.99',
    status: 'Delivered'
  },
  {
    id: '6dsad67dasd423432432',
    user: 'User',
    totalPrice:'199.99',
    status: 'Processing'
  },
  {
    id: '64fdsfsdasd67dasd',
    user: 'Admin User',
    totalPrice:'149.99',
    status: 'Delivered'
  },
  {
    id: '645Dsadasdasd67dasd',
    user: 'User',
    totalPrice:'699.99',
    status: 'Processing'
  }
]

export const ADMIN_USERS = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    password: 'admin123'
  },  
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'customer',
    password: 'john123'
  },  
  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'customer',
    password: 'jane123'
  }
]

export const PRODUCT_ADMIN = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1',
    stock: 50,
    size: [ 'S', 'M', 'L' ],
    color: 'Blue',
    images: ['https://picsum.photos/500/500?random=1',
      'https://picsum.photos/500/500?random=11',
    ],
    price: 29.99,
    sku: 'PROD001'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2',
    stock: 100,
    size: [ 'S', 'M', 'L' ],
    color: 'Red',
    images: ['https://picsum.photos/500/500?random=2',
      'https://picsum.photos/500/500?random=21',
    ],
    price: 39.99,
    sku: 'PROD002'
  },
  {
    id: 3,  
    name: 'Product 3',
    description: 'This is a description for Product 3',
    stock: 50,
    size: [ 'S', 'M', 'L' ],
    color: 'Blue',
    images: ['https://picsum.photos/500/500?random=3',
      'https://picsum.photos/500/500?random=31',
      'https://picsum.photos/500/500?random=32'
    ],
    price: 19.99,
    sku: 'PROD003'
  },
  {
    id: 4,  
    name: 'Product 4',
    description: 'This is a description for Product 4',
    stock: 75,
    size: [ 'S', 'M', 'L' ],
    color: 'Green',
    images: ['https://picsum.photos/500/500?random=4'],
    price: 49.99,
    sku: 'PROD004'
  },
  {
    id: 5,  
    name: 'Product 5',
    description: 'This is a description for Product 5',
    stock: 20,
    size: [ 'S' ],
    color: 'Black',
    images: ['https://picsum.photos/500/500?random=5'],
    price: 59.99,
    sku: 'PROD005'
  },
  {
    id: 6,  
    name: 'Product 6',
    description: 'This is a description for Product 6',
    stock: 30,
    size: [ 'S', 'M', 'L' ],
    color: 'White',
    images: ['https://picsum.photos/500/500?random=6'],
    price: 24.99,
    sku: 'PROD006'
  },
  {
    id: 7,  
    name: 'Product 7',
    description: 'This is a description for Product 7',
    stock: 60,
    size: [ 'S', 'M', 'L' ],
    color: 'Yellow',
    images: ['https://picsum.photos/500/500?random=7'],
    price: 34.99,
    sku: 'PROD007'
  },
  {
    id: 8,  
    name: 'Product 8',
    description: 'This is a description for Product 8',
    stock: 80,
    size: [ 'L' ],
    color: 'Purple',
    images: ['https://picsum.photos/500/500?random=8'],
    price: 44.99,
    sku: 'PROD008'
  },
  {
    id: 9,  
    name: 'Product 9',
    description: 'This is a description for Product 9',
    stock: 40,
    size: [ 'XL' ],
    color: 'Orange',
    images: ['https://picsum.photos/500/500?random=9'],
    price: 54.99,
    sku: 'PROD009'
  },
  {
    id: 10,  
    name: 'Product 10',
    description: 'This is a description for Product 10',
    stock: 90,
    size: [ 'S'],
    color: 'Pink',
    images: ['https://picsum.photos/500/500?random=10'],
    price: 64.99,
    sku: 'PROD010'
  },
  {
    id: 11,  
    name: 'Product 11',
    description: 'This is a description for Product 11',
    stock: 55,
    size: [ 'L' ],
    color: 'Brown',
    images: ['https://picsum.photos/500/500?random=11'],
    price: 74.99,
    sku: 'PROD011'
  },
  {
    id: 12,  
    name: 'Product 12',
    description: 'This is a description for Product 12',
    stock: 65,
    size: [ 'S' ],
    color: 'Gray',
    images: ['https://picsum.photos/500/500?random=12'],
    price: 84.99,
    sku: 'PROD012'
  },
  {
    id: 13,  
    name: 'Product 13',
    description: 'This is a description for Product 13',
    stock: 70,
    size: [ 'XL' ],
    color: 'Cyan',
    images: ['https://picsum.photos/500/500?random=13'],
    price: 94.99,
    sku: 'PROD013'
  },
  {
    id: 14,  
    name: 'Product 14',
    description: 'This is a description for Product 14',
    stock: 85,
    size: [ 'M' ],
    color: 'Magenta',
    images: ['https://picsum.photos/500/500?random=14'],
    price: 14.99,
    sku: 'PROD014'
  },
  {
    id: 15,  
    name: 'Product 15',
    description: 'This is a description for Product 15',
    stock: 95,
    size: [ 'L' ],
    color: 'Teal',
    images: [ 'https://picsum.photos/500/500?random=15',
      'https://picsum.photos/500/500?random=16',
      'https://picsum.photos/500/500?random=17'
    ],
    price: 24.99,
    sku: 'PROD015'
  },
  { 
    id: 16,  
    name: 'Product 16',
    description: 'This is a description for Product 16',
    stock: 45,
    size: [ 'S' ],
    color: 'Olive',
    images: [
      'https://picsum.photos/500/500?random=16',
      'https://picsum.photos/500/500?random=17',
      'https://picsum.photos/500/500?random=18'
    ],
    price: 34.99,
    sku: 'PROD016'
  }
]
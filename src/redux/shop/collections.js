const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Black Cap',
        imageUrl: 'https://i.ibb.co/0fbVNSY/habib-ayoade-Nh-WW-RW1q-O0-unsplash.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Bucket',
        imageUrl: 'https://i.ibb.co/XC018GB/ray-tiller-ee1w-HJZd-34-unsplash.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'New York',
        imageUrl: 'https://i.ibb.co/d2db0kN/atharva-tulsi-6ftd4-Rg-Udnk-unsplash.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Navy Beanie',
        imageUrl: 'https://i.ibb.co/YpgxLZp/khamkeo-vilaysing-4-l8-Xz-Xf-WWk-unsplash.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Beige Cap',
        imageUrl: 'https://i.ibb.co/1QvtXxN/ian-dooley-ufl6s-F3-VSLI-unsplash.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Beige Beanie',
        imageUrl: 'https://i.ibb.co/30VxMcx/mat-reding-Fn-JGha-GB9u-I-unsplash.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Black Snapback',
        imageUrl: 'https://i.ibb.co/9ZXgtz1/will-malott-x-Bb-IW24a-L7o-unsplash.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Navy Cap',
        imageUrl: 'https://i.ibb.co/rxXbZ9H/taylor-Xqb7-Gm-V-Vo-Q-unsplash.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Khaki Adjustable',
        imageUrl: 'https://i.ibb.co/h18Ps4m/taylor-Qc-Mlu-W4x56k-unsplash.jpg',
        price: 25
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Black Air Max',
        imageUrl: 'https://i.ibb.co/c3bnmCq/ryan-plomp-mk-Elzh0q28-E-unsplash.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'White Nike',
        imageUrl: 'https://i.ibb.co/cLjWRL1/ryan-plomp-by-SPt2ly-Szg-unsplash.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Burgundy Jordan',
        imageUrl: 'https://i.ibb.co/Y2w4vhM/lefteris-kallergis-Wte7upc-KIVo-unsplash.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/56fVp6V/nathan-jongerius-dbi-ZRVk-RQk-unsplash.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'White Reebok',
        imageUrl: 'https://i.ibb.co/TW90gDB/maureen-de-wit-c-Eot-30k978-unsplash-1.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Pink High Tops',
        imageUrl: 'https://i.ibb.co/pKswcSS/nicholas-bui-t-DWQJZ0-USow-unsplash.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Orange Air Max',
        imageUrl: 'https://i.ibb.co/8KSYC31/lefteris-kallergis-j1-Gi-Plv-SGWI-unsplash.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Green Converse',
        imageUrl: 'https://i.ibb.co/tM3Kc4T/kristian-egelund-89-KUVQJE00-Y-unsplash.jpg',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Shearling',
        imageUrl: 'https://i.ibb.co/jJcRJWp/prince-akachi-7j9j-NQx-XUCU-unsplash.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Black Windbreaker',
        imageUrl: 'https://i.ibb.co/fvS3N7W/mark-adriane-b-O3-S03-I2-Aw8-unsplash.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Black Utility',
        imageUrl: 'https://i.ibb.co/cQ1HBzy/toa-heftiba-f-La-B8-Ll-EMNo-unsplash.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Black Varsity',
        imageUrl: 'https://i.ibb.co/CPMVsqR/nathan-dumlao-x-Jo-T-Jj-PK3-E-unsplash.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Black Leather',
        imageUrl: 'https://i.ibb.co/kBDhG62/roland-denes-JD6h3h9-Ubk-unsplash.jpg',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Croptop',
        imageUrl: 'https://i.ibb.co/rc6d0J0/mike-von-Qko-DQUBj-MKk-unsplash.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Neon Top',
        imageUrl: 'https://i.ibb.co/HKnDWzN/mike-von-tz-Bzkx-MOHGQ-unsplash.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Burgundy Top',
        imageUrl: 'https://i.ibb.co/XzPwxbf/mike-von-OECfw-NARm-YM-unsplash.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Jean Jacket',
        imageUrl: 'https://i.ibb.co/ysGgL7v/humphrey-muleba-BYRssg-BTb-Aw-unsplash.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'White Hoodie',
        imageUrl: 'https://i.ibb.co/NTVrYFt/vin-stratton-V1d-X9-O1-B4p-M-unsplash.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/7KHT3r0/robert-andall-h2d-Y1o-3rp0-unsplash.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'White Graphic T-shirt',
        imageUrl: 'https://i.ibb.co/nk4p2dy/mike-von-Ay-Bz3fc-Zj-X4-unsplash.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Stripped T-shirt',
        imageUrl: 'https://i.ibb.co/xgWTH4d/mohammad-faruque-Sp-IKPT8ze-As-unsplash.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Vartsity Jacket',
        imageUrl: 'https://i.ibb.co/XjB57y9/quaid-lagan-92-YQRw3-I-unsplash.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Black T-shirt',
        imageUrl: 'https://i.ibb.co/5WmKzxT/frankie-cordoba-7c-BAngjv-lw-unsplash.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Graphic T-shirt',
        imageUrl: 'https://i.ibb.co/t4Njz4m/frankie-cordoba-Bv-Pd5zf-I-YY-unsplash.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Graphic Sweatshirt',
        imageUrl: 'https://i.ibb.co/9ZXgtz1/will-malott-x-Bb-IW24a-L7o-unsplash.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'White T-shirt',
        imageUrl: 'https://i.ibb.co/h18Ps4m/taylor-Qc-Mlu-W4x56k-unsplash.jpg',
        price: 25
      }
    ]
  }
};

// export default SHOP_DATA;

module.exports = SHOP_DATA

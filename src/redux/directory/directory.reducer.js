const INITIAL_STATE = {
  sections: [
    {
      "title": "hats",
      "imageUrl": "https://i.ibb.co/0fbVNSY/habib-ayoade-Nh-WW-RW1q-O0-unsplash.jpg",
      "id": 1,
      "linkUrl": "shop/hats"
    },
    {
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/fvS3N7W/mark-adriane-b-O3-S03-I2-Aw8-unsplash.jpg",
      "id": 2,
      "linkUrl": "shop/jackets"
    },
    {
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/8KSYC31/lefteris-kallergis-j1-Gi-Plv-SGWI-unsplash.jpg",
      "id": 3,
      "linkUrl": "shop/sneakers"
    },
    {
      "title": "womens",
      "imageUrl": "https://i.ibb.co/sbQQj3r/robert-andall-6f-Ry3-D-CGk-E-unsplash.jpg",
      "size": "large",
      "id": 4,
      "linkUrl": "shop/womens"
    },
    {
      "title": "mens",
      "imageUrl": "https://i.ibb.co/S76g498/blake-connally-VAWUrnq-Rz80-unsplash.jpg",
      "size": "large",
      "id": 5,
      "linkUrl": "shop/mens"
    }
  ]
  
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
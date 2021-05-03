import { ADD_TO_BASKET } from './product.types'

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      brand: 'Corsair',
      model: '275R',
      description: 'Airflow Tempered Glass Mid-Tower Gaming Case, Black',
      price: 80.0,
      image: 'https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=gamax019'
    },
    {
      id: 2,
      brand: 'NZXT',
      model: 'H510 Elite',
      description: 'Premium Mid-Tower ATX Case PC Gaming Case',
      price: 110.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 3,
      brand: 'Cooler Master',
      model: 'TD500',
      description: 'Mesh Airflow ATX Mid-Tower',
      price: 50.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 4,
      brand: 'Thermaltake',
      model: 'S100',
      description: 'Tempered Glass Snow Edition Micro-ATX Mini-Tower Computer Case',
      price: 75.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 5,
      brand: 'COUGAR',
      model: 'Counquer',
      description: 'Aluminum Alloy ATX Mid Tower Aluminum Frame Tempered Glass Gaming Case',
      price: 180.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 6,
      brand: 'Thermaltake',
      model: 'Core P90',
      description: 'Black Mid Tower Tempered Glass Open Frame Viewing Tt LCS Certified Gaming Computer Case',
      price: 80.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 7,
      brand: 'Thermaltake',
      model: 'Level 10',
      description: 'Titanium ATX Gaming Full Tower Computer Case',
      price: 150.0,
      image: '../Assets/_images/case-1.png'
    },
    {
      id: 8,
      brand: 'LIAN',
      model: 'PC-Y6B',
      description: 'Black Aluminum Special Chassis Computer Case SFX PSU',
      price: 150.0,
      image: '../Assets/_images/case-1.png'
    }
  ],
  basket: []
}
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer

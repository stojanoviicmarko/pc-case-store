import { ADD_TO_BASKET, RECEIVE_PRODUCTS, REMOVE_FROM_BASKET } from './product.types'

const initialState = {
  arrayOfProducts: [
    {
      id: 1,
      brand: 'Corsair',
      model: '275R',
      description: 'Airflow Tempered Glass Mid-Tower Gaming Case, Black',
      price: 80.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-1.png?alt=media&token=55009c2c-1c46-4568-8dea-1087f5a5c639'
    },
    {
      id: 2,
      brand: 'NZXT',
      model: 'H510 Elite',
      description: 'Premium Mid-Tower ATX Case PC Gaming Case',
      price: 110.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-2.png?alt=media&token=bff9de50-59ff-4ca2-9259-46e37c426193'
    },
    {
      id: 3,
      brand: 'Cooler Master',
      model: 'TD500',
      description: 'Mesh Airflow ATX Mid-Tower',
      price: 50.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-3.png?alt=media&token=08968923-0f78-4b2b-9fac-6ca08c0b0693'
    },
    {
      id: 4,
      brand: 'Thermaltake',
      model: 'S100',
      description: 'Tempered Glass Snow Edition Micro-ATX Mini-Tower Computer Case',
      price: 75.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-4.png?alt=media&token=836fa5f7-2fb7-43fe-83fb-98a9bfd536cb'
    },
    {
      id: 5,
      brand: 'COUGAR',
      model: 'Counquer',
      description: 'Aluminum Alloy ATX Mid Tower Aluminum Frame Tempered Glass Gaming Case',
      price: 180.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-7.png?alt=media&token=e08bd45b-840e-4543-8bac-4c784b2ad06a'
    },
    {
      id: 6,
      brand: 'Thermaltake',
      model: 'Core P90',
      description: 'Black Mid Tower Tempered Glass Open Frame Viewing Tt LCS Certified Gaming Computer Case',
      price: 80.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-9.png?alt=media&token=502e4bba-335b-4d7f-bc3e-8d3e1cea242c'
    },
    {
      id: 7,
      brand: 'Thermaltake',
      model: 'Level 10',
      description: 'Titanium ATX Gaming Full Tower Computer Case',
      price: 150.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-8.png?alt=media&token=e87aa0c5-f829-44b2-bbfc-71263d9a2793'
    },
    {
      id: 8,
      brand: 'LIAN',
      model: 'PC-Y6B',
      description: 'Black Aluminum Special Chassis Computer Case SFX PSU',
      price: 150.0,
      image:
        'https://firebasestorage.googleapis.com/v0/b/pc-case-store.appspot.com/o/images%2Fcase-6.png?alt=media&token=f0adae48-70c1-404b-bf43-6d85c07d0cc7'
    }
  ],
  basket: [],
  products: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [ ...state.basket, action.product ]
      }
    case RECEIVE_PRODUCTS:
      return {
        products: action.products
      }
    case REMOVE_FROM_BASKET:
      let index = state.basket.findIndex(basketItem => basketItem.id === action.item.id)
      let modifiedBasket = [ ...state.basket ]
      if (index >= 0) {
        modifiedBasket.splice(index, 1)
      } else {
        console.warn("Couldn't find basket item to remove.'")
      }
      return {
        ...state,
        basket: modifiedBasket
      }
    default:
      return state
  }
}

export default reducer

const initState = {
  images: {},
  baskets: {
    dog: [],
    cat: []
  },
  storeMessageKey: ''
}

const storeToBasket = (state, value) => {
  const {basketType, photo} = value

  const title = photo.title.toLowerCase()

  if(title === basketType && !state.baskets[basketType].includes(photo)) {
    return {
      ...state,
      baskets: {
        ...state.baskets,
        [basketType]: [...state.baskets[basketType], photo]
      },
      images: {
        ...state.images,
        photo: [ ...state.images.photo.filter(item => item.id !== photo.id)]
      },
      storeMessageKey: title
    }
  } else {
    return {
      ...state,
      storeMessageKey: 'wrong'
    }
  }
}

export default function images(state = initState, action) {
  switch (action.type) {
    case 'STORE_IMAGES':
      return { ...state, images: {...action.value} }
    case 'STORE_TO_BASKET':
      return storeToBasket(state, action.value)
    case 'CLEAR_MESSAGE':
      return {...state, storeMessageKey: ''}
    default:
      return state
  }
}

const initState = {
  images: {}
}

export default function images(state = initState, action) {
  switch (action.type) {
    case 'STORE_IMAGES':
      return { ...state, images: {...action.value} }
    default:
      return state
  }
}

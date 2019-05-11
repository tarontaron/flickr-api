export function storeImages(value) {
  return {
    type: 'STORE_IMAGES',
    value
  }
}

export function storeToBasket(basketType, photo) {
  return {
    type: 'STORE_TO_BASKET',
    value: {
      basketType,
      photo
    }
  }
}

export function clearMessage() {
  return {
    type: 'CLEAR_MESSAGE'
  }
}

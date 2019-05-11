import { createSelector } from 'reselect'

export const getImagesState = state => state.images

export const getImages = state => getImagesState(state).images

export const getPhotots = state => {
  const images = getImages(state)
  return images.photo
}

export const getBaskets = state => {
  const imagesState = getImagesState(state)
  return imagesState.baskets
}

export const getStoreMessageKey = state => {
  const imagesState = getImagesState(state)
  return imagesState.storeMessageKey
}

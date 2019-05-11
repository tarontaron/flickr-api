import { createSelector } from 'reselect'

export const getImages = state => state.images.images

export const getPhotots = state => {
  const images = getImages(state)
  return images.photo
}

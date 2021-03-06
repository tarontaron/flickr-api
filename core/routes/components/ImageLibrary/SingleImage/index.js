import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from '../ItemTypes'

const style = {
  border: '1px dashed gray'
}

const SingleImage = ({ storeToBasket, photo, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1
  return (
    <img src={photo.url_z} ref={connectDragSource} style={Object.assign({}, style, { opacity })} />
  )
}
export default DragSource(
  ItemTypes.BOX,
  {
    beginDrag: props => ({ name: props.photo.title }),
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        props.storeToBasket(`${dropResult.name}`, props.photo)
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(SingleImage)

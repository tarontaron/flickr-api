import React from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../ItemTypes'

const Basket = ({name, onClick, canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div
      className='basket'
      onClick={() => onClick(name)}
      ref={connectDropTarget}
    >
      {name}
    </div>
  )
}
export default DropTarget(
  ItemTypes.BOX,
  {
    drop: (props) => ({ name: props.name }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(Basket)

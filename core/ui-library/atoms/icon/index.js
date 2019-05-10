/* @flow */

import React from 'react'

type IIcon = {
  size?: string,
  color?: string,
  name: string,
  customClassName?: string
}

const Icon = (props: IIcon) => {
  const { size, color, name, customClassName } = props

  const style = {
    fontSize: size,
    color,
    marginRight: '5px'
  }

  return (
    <i style={style} className={`material-icons ${customClassName || ''}`}>
      {name}
    </i>
  )
}

export default Icon

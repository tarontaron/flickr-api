/* @flow */

import React from 'react'

// flow-disable-line
import Button from '@material-ui/core/Button'

type ICustomButton = {
  variant?:
    | 'text'
    | 'flat'
    | 'outlined'
    | 'contained'
    | 'raised'
    | 'fab'
    | string,
  color?: string,
  disabled?: boolean,
  className?: string,
  fullWidth?: boolean,
  onClick?: () => void,
  icon?: string | React$Element<any>,
  label?: string | React$Element<any>,
  size?: 'small' | 'medium' | 'large' | string,
  children?: string | React$Element<any> | null
}

const CustomButton = (props: ICustomButton) => {
  const {
    label,
    onClick,
    variant,
    size,
    fullWidth,
    disabled,
    color,
    icon,
    className
  } = props

  return (
    <div>
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        color={color}
        className={className}
      >
        {icon}
        {label}
      </Button>
    </div>
  )
}

export default CustomButton

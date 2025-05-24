'use client'

import React, { useMemo } from 'react'
import type { CompAuthType } from '@/types/compAuth.type'

interface BaseButtonProps {
  type?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  compAuthType?: CompAuthType
  menuAuthTypes?: CompAuthType[]
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BaseButton: React.FC<BaseButtonProps> = ({
  type = 'primary',
  disabled = false,
  size = 'lg',
  compAuthType = 'ANY',
  menuAuthTypes = [],
  children = 'Default',
  onClick
}) => {
  const buttonClasses = useMemo(() => [
    type === 'primary' ? 'bg-primary' : '',
    type === 'secondary' ? 'bg-secondary' : '',
    type === 'danger' ? 'bg-danger' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ].filter(Boolean).join(' '), [type, disabled])

  const sizeClasses = useMemo(() => [
    size === 'sm' ? 'text-sm' : '',
    size === 'md' ? 'text-md' : '',
    size === 'lg' ? 'text-lg' : ''
  ].filter(Boolean).join(' '), [size])

  const computedDisabled = useMemo(() => {
    if (compAuthType === 'ANY') return false
    return !menuAuthTypes.includes(compAuthType)
  }, [compAuthType, menuAuthTypes])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  if (computedDisabled) {
    return (
      <button
        disabled
        className={`${buttonClasses} ${sizeClasses} pointer-events-none opacity-50 cursor-not-allowed`}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={`${buttonClasses} ${sizeClasses}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default BaseButton
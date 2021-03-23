import React from 'react'
import classNames from 'classnames/bind'
import css from './styles.module.scss'

const cx = classNames.bind(css)

export interface BaseComponentProps {
  className?: string
}

function BaseComponent({ className }: BaseComponentProps) {
  return <div className={cx(className, css.BaseComponent)}></div>
}

BaseComponent.defaultProps = {}

export default BaseComponent

import React from 'react'
import { concatCSS } from '@app/shared/utils/css'
import Css from '@app/base.scss'

interface Props {
  icon: string
}

export default function Icon(props: Props): JSX.Element {
  return <span className={concatCSS('material-icons-outlined', Css.icon)}>{props.icon}</span>
}

import PropTypes from 'prop-types'
import React from 'react'
import styles from './statusLable.module.css'

export default function StatusLabel({status}) {
   const className=`${styles[status]}`
  return (
     <span className={className}>{status}</span>
  )
}

StatusLabel.prototype={
    status:PropTypes.any
}


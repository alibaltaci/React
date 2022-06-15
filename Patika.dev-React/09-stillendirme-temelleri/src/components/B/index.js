import React from 'react'

import styles from "./styles.module.css";

export default function B() {
  return (
    // styles.css
    // <div className='title'>B</div>

    // styles.module.css
    <div className={ styles.title }>B</div>
  )
}

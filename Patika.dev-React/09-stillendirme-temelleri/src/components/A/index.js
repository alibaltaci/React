import React from 'react'

import styles from "./styles.module.css";

console.log(styles);

export default function A() {
  return (

    // styles.css
    // <div className='title'>A</div>

    // styles.module.css
    <div className={ styles.title }>A</div>
  )
}

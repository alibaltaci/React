import React from 'react'

export default React.memo (function Header( {number, data} ) {

    console.log("Header component Re-Rendered!");

  return (
    <div>
      Header - {number}

      <br />
      <br />

      <code>{JSON.stringify(data)}</code>
    </div>
  )
})

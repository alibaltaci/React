import React from 'react'

export default React.memo ( function CallbackHeader({increment}) {

    console.log("CallbackHeader Component Re-Rendered!");

  return (
    <div>

      <h1>Callback Header</h1>

      <br />
      <br />

      <button onClick={increment} >Click</button>

    </div>
  )
})

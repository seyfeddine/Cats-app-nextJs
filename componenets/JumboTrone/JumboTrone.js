import React from 'react'
import { useRouter } from 'next/router'

const JumboTrone = () => {

  const router = useRouter()
  return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Cats World</h1>
    <p className="lead">Find Your new bestfriend Today, adopt a wonderfull cat</p>
    <button type="button" className="btn btn-primary" onClick={()=>router.push("/cats")}>Start Looking</button>
  </div>
</div>
  )
}

export default JumboTrone
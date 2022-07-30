import React, { Children } from 'react'
import Nav from '../componenets/Nav/Nav'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Nav/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DefaultLayout
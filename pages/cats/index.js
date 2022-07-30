import React, { useEffect, useState } from 'react'
import Card from '../../componenets/Card/Card'
import Nav from '../../componenets/Nav/Nav'
import DefaultLayout from '../../layouts/Default'

const index = () => {

    const [cats, setCats] = useState([])

    const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    console.log(data);
    setCats(data)
  }

  useEffect(() => {
    fetchCats()
  },[])

  return (
    <>
    <DefaultLayout>
    
    <div className='container mt-5'>
      <div style={{display:'flex',flexWrap:'wrap',}}>
      {cats.map(cat => (
        <Card key={cat.id}
        name = {cat.name}
        id = {cat.id}
        phone = {cat.phone}
        email = {cat.email}
        image = {cat.image}
        />
      )) }
      </div>
    </div>
    </DefaultLayout>
    </>
  )
}

export default index
5
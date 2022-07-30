import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/dist/client/router'
import DefaultLayout from '../../layouts/Default';

const Cat = () => {
    
      const [cat, setCat] = useState(null)
      const router = useRouter();
      const { id } = router.query

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json()
    setCat(data)
  } 

  useEffect(() => {
    fetchCat()
  },[])

    return (
        <DefaultLayout>
        <div>
            {
                cat && (
                    <div className='container mt-5' style={{display:"flex"}}>
                        <img src={cat.image.url} alt={cat.image.alt}></img>
                        <div className='mx-5'>
                            <h1>{cat.name}</h1>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
        </DefaultLayout>
  )
}

export default Cat
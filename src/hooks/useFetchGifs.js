import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setLoading] = useState(true)  
    
  
  useEffect(()=>{
        getGifs(category)
        .then(newImages => setImages(newImages))
        .catch(error=> console.log(error))
        .finally(()=>setLoading(false))
    },[])

    
  
    return{
        images,
        isLoading
    }

}

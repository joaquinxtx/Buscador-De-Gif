import React from 'react'
import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'
import './styles.css'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([''])
    
    const onAddCategory=(newCategory)=>{
        if(categories.includes(newCategory) )return;
        setCategories([newCategory,...categories])
    }
  return (
    <>
        <h1>Buscador de Gif</h1> 

        <AddCategory 
        
        onNewCategory={onAddCategory}
        />

        {categories.map((category) =>
            <GifGrid 
            key={category} 
            category={category} 
            />
        )}  
   
    </>
  )
}

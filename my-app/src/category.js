import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'


export const CategoryData = ({catID, setCatID}) =>{
    const [categoryList, setCategoryList] = useState([])


    useEffect(() => {
        axios
            .get('https://opentdb.com/api_category.php')
            .then((res) => setCategoryList(res.data.trivia_categories))
}, [])

    if (categoryList){
        return (
        <div>
            <h1> Choose A Category </h1>
            <div style={{marginBottom:'20px'}}>
                {categoryList.map((category) => 
                <div><button style={{borderRadius:'20px'}} key={category.id} 
                onClick={() => {setCatID(category.id)}}>
                    {category.name}</button></div>)}
            </div>
        </div>
)}

    
}


import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { OneQuestion } from './question'
// import {useNavigate} from 'react-router-dom'

export const QuestionList = ({catID}) => {
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [reloadToggle, setReloadToggle] = useState(false)

    const goHome = () => {
        window.location.reload(false)
    }

    const sayCorrect = () => {
        alert(`You are correct. Your score is ${score + 1}/10`) 
        setScore(score + 1)
    }

    const sayIncorrect = () => {
        alert("You are incorrect")
    }


    useEffect(() => {
        axios    
            .get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`)
            .then((res) => setQuestions(res.data.results))

    }, [catID, reloadToggle])


    if (questions){

        return (
        <div>
            {questions.map((q, index) => (
                <OneQuestion q={q} sayCorrect={sayCorrect} sayIncorrect={sayIncorrect} key={`${index}-${reloadToggle}`}/>
                ))}
            <div>
                <p style={{color:'green'}}><strong>Your Score {score}/10</strong></p>    
                <p style={{color:'red'}}>Did you want to try this category again?</p>
                <button style={{ borderRadius:'10px'}}
                onClick={() => {
                    setReloadToggle(!reloadToggle)
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    setScore(0)
                }}
                >Same Category</button>
                <button style={{ borderRadius:'10px'}}onClick={goHome}>Different Category</button>
            </div>
        </div>
    )}
    <div>


</div>

}
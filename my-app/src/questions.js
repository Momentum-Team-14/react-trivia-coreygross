import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'

export const QuestionList = ({catID}) => {
    const [questions, setQuestions] = useState([])
    
    
    useEffect(() => {
        axios    
            .get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`)
            .then((res) => setQuestions(res.data.results))

    }, [catID])


    if (questions){
    return (
        <div>
            {questions.map((q) => (
            <div> 
                <p>{q.question}</p> 
                <button onClick ={() => {
                        
                }
                }
                >{q.correct_answer}</button>
                {q.incorrect_answers.map((incorrect) => (
                <div>
                    <button>{incorrect}</button>
                </div>
            ))}
            </div>))}
        </div>
    )}
}
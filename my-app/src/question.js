import { useState } from "react"

export const OneQuestion = ({q, sayCorrect, sayIncorrect}) => {
    const [disable, setDisable] = useState(false)

    const htmlDecode = input => new DOMParser()
        .parseFromString(input, "text/html")
        .documentElement.textContent

    const shuffleArray = arr => {
        arr = [...arr]
        for (let i = arr.length - 1; i >= 0; i--){
            const swapIndex = Math.floor(Math.random() * i)
            const temp = arr[swapIndex]
            arr[swapIndex] = arr[i]
            arr[i] = temp
        }

    return arr
    }

    const questionList = shuffleArray([q.correct_answer, ...q.incorrect_answers])
                console.log(questionList)
            return (
            <div>
                <div> 
                    <p>{htmlDecode(q.question)}</p> 
                    {questionList.map((answer) => (
                    <div>
                        <button disabled={disable} onClick ={() => {
                            setDisable(true);
                            if (answer === q.correct_answer) {
                                sayCorrect()
                            }
                            else {
                                sayIncorrect()
                            }
                    }}
                    style={{borderRadius: '20px'}}
                    
                    >{htmlDecode(answer)}</button>
                    </div>
                ))}
                </div>

            </div>
            )
}
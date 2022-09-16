import logo from './logo.svg';
import './App.css';
import { CategoryData } from './category'
import { useState } from "react"
import { QuestionList } from './questions'


function App() {
  const [catID, setCatID] = useState(null)

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuestionDisplay catID={catID} setCatID={setCatID}
        />
      </header>
    </div>
  );
}

const QuestionDisplay = ({ catID, setCatID}) => {
  if (!catID) {

    return (
      <CategoryData catID={catID} setCatID={setCatID}
      />
    )
  }

  return (
    <QuestionList catID={catID} setCatID={setCatID}
    />
  )

}




export default App;

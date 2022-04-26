import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import DropDown from './components/DropDown';
import Navbar from './components/Navbar';
import CategoriesList from './components/CategoriesList';

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState('categoryOne')
  const [questionTxt, setQuestionTxt] = useState('')
  const [questions, setQuestions] = useState([])
  const [click, setClick] = useState(false);
  const [categoriesListClick, setCategoriesListlick] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  const categoriesClick = () => {
    setCategoriesListlick(!categoriesListClick);
    console.log('clicked')
  }

    const fetchQuestions = async () => {
        let res = await fetch(`http://localhost:3000/api/categories?category=${selectedCategory}/questions`)
        let data = await res.json()
        console.log(data)
        setQuestions(data)
    };

    useEffect(() => {
        fetchQuestions()
    }, [])

    useEffect(() => {
        fetchQuestions()
    }, [selectedCategory])

    const updateQuestionTxt = async (event) => {
        setQuestionTxt(event.currentTarget.value)
    };

    const createQuestion = async () => {
        let res = await fetch(`http://localhost:3000/api/categories?category=${selectedCategory}/questions`, {
            method: 'POST',
            body: JSON.stringify({questionTxt: questionTxt}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let data = await res.json()
        console.log(data)
        setQuestionTxt('')
        fetchQuestions()
    };

  return (
    <>
      <Navbar handleClick={handleClick} click={click} categoriesListClick={categoriesListClick} setCategoriesListlick={setCategoriesListlick} categoriesClick={categoriesClick}/>
      {click && <DropDown handleClick={handleClick} />}
      
      {categoriesListClick && <CategoriesList selectedCategory={selectedCategory} selectedCategory={selectedCategory} />}
      
      <div className={'h-screen w-screen bg-gray-50'}>
        <h1 className={'text-rigth text-xl font-ligth text-black mx-10 pt-5'}>Category {selectedCategory}</h1> 
        <div className={'flex justify-start p-12 gap-12'}>
          <textarea className={'items-center border'}value={questionTxt} onChange={updateQuestionTxt}  id="" cols="30" rows="5"></textarea>
          <button onClick={createQuestion} className={'px-2 py-1 text-white rounded h-8 bg-blue-500'}>Create Question</button>
      </div>

        {questions && <ul>
          {questions.map((question) => {
            return <li key={question.id}>{question.questionTxt}</li>
          })}
        </ul>}

      </div>

      {/* <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/to-do's" element={<Todos />} /> 
          <Route path="/contact" element={<Contact />} /> 
      </Routes> */}
      {/* </div>`` */}
  </>
  );
}

export default App;

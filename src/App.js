import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import DropDown from './components/DropDown';
import Navbar from './components/Navbar';
import CategoriesList from './components/CategoriesList';

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState('categoryOne')
  const [activeQuestion, setActiveQuestion] = useState('')
  const [questionTxt, setQuestionTxt] = useState('')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [answerTxt, setAnswerTxt] = useState('')
  const [click, setClick] = useState(false);
  const [categoriesListClick, setCategoriesListlick] = useState(false);
  // const [answerClicked,setAnswerClicked] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
    console.log('clicked')
  }
  const categoriesClick = () => {
    setCategoriesListlick(!categoriesListClick);
    console.log('clicked')
  }
  const fetchQuestions = async () => {
        let res = await fetch(`http://localhost:3000/api/categories?categoryId=${selectedCategory.id}/questions`)
        let data = await res.json()
        console.log('data',data)
        setQuestions(data)
    };
    
    // useEffect(() => {
    //     fetchQuestions()
    // }, [])

    useEffect(() => {
        fetchQuestions()
    }, [selectedCategory])

    const updateQuestionTxt = async (event) => {
        setQuestionTxt(event.currentTarget.value)
    };

    const createQuestion = async () => {
        let res = await fetch(`http://localhost:3000/api/categories?categoryId=${selectedCategory.id}/questions`, {
            method: 'POST',
            body: JSON.stringify({questionTxt: questionTxt}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
      let data = await res.json()
      console.log('created');
      console.log(data)
      setQuestionTxt('')
      fetchQuestions()
    };

    
      // Answers
      const fetchAnswers = async () => {
        let res = await fetch(`http://localhost:3000/api/questions/?questionId=${activeQuestion.id}/answers`)
        let data = await res.json()
        console.log('data',data)
        setQuestions(data)
    };
    const updateAnswerTxt = async (event) => {
      setAnswerTxt(event.currentTarget.value)
    };
    const createAnswer = async () => {
      let res = await fetch(`http://localhost:3000/api/questions/?questionId=${activeQuestion.id}/answers`, {
          method: 'POST',
          body: JSON.stringify({answerTxt: answerTxt}),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      let data = await res.json()
      console.log('created');
      console.log(data)
      setAnswerTxt('')
      fetchAnswers()
    };
  return (
    <>
      <Navbar handleClick={handleClick} click={click} categoriesListClick={categoriesListClick} setCategoriesListlick={setCategoriesListlick} categoriesClick={categoriesClick}/>
      {click && <DropDown handleClick={handleClick} />}
      
      {categoriesListClick && <CategoriesList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
      
      
      <h1>{selectedCategory.id}</h1>


      <div className={'w-screen h-screen bg-violet-100'}>
      <div className={'w-1/2 h-screen bg-gray-100'}>
          <div className={'flex justify-center'}>
            <h1 className={'logo2 text-xl mt-10'}>{selectedCategory}</h1>
            <div className={'flex justify-center p-12 gap-12'}>
                    <textarea className={'border rounded'} value={questionTxt} onChange={updateQuestionTxt}  id="" cols="30" rows="5"></textarea>
                    <button onClick={createQuestion} className={'px-2 py-1 text-white rounded h-8 bg-violet-600'}>Create Question</button>
                </div>
          </div>
          <h2 className={'logo2 text-xl mt-10'}>Question List for {selectedCategory}</h2>
          {questions && <ul>
          {questions.map((question) => {
            return <li onClick={() => setActiveQuestion(question.id)} key={question.id}>{question.questionTxt}</li>
          })}
        </ul>}
      </div>
      <div className={'w-1/2 h-screen bg-violet-200'}>
          {activeQuestion &&
            <div>
            <h1>Answers for: {activeQuestion}</h1>
            <div className={'flex justify-center p-12 gap-12'}>
                    <textarea className={'border rounded'} value={answerTxt} onChange={updateAnswerTxt}  id="" cols="30" rows="3"></textarea>
                    <button onClick={createAnswer} className={'px-2 py-1 text-white rounded h-8 bg-violet-600'}>Create Answer</button>
            </div>
            </div>}
      </div>
      </div>
      {/* <div className={'h-screen w-screen bg-gray-50'}>
        <h1 className={'text-rigth text-xl font-ligth text-black mx-10 pt-5'}>Category {selectedCategory}</h1> 
        <div className={'flex justify-start p-12 gap-12'}>
        <textarea className={'items-center border'}value={questionTxt} onChange={updateQuestionTxt}  id="" cols="30" rows="5"></textarea>
        <button onClick={createQuestion} className={'px-2 py-1 text-white rounded h-8 bg-blue-500'}>Create Question</button>
      </div>

        <h1>Questions List for {selectedCategory}</h1>
        {questions && <ul>
          {questions.map((question) => {
            return <li key={question.id}>{question.questionTxt}</li>
          })}
        </ul>}

      </div> */}

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

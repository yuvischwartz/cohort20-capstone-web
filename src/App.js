import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';

function App() {
  const [allCategories, setAllCategories] = useState();
  const [activeCategory, setActiveCategory] = useState();
  const [questionFormText, setQuestionFormText] = useState('');

  const [activeQuestion, setActiveQuestion] = useState();
  const [answerTxt, setAnswerTxt] = useState('')
  const [addAQuestionClick, setAddAquestionClick] = useState(false);
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState();
  
  
  // Categories:
  const fetchCategories = async () => {
    let categories = await fetch('http://localhost:3000/api/categories')
    categories = await categories.json()
    setAllCategories(categories)
};

// run some code that runs once when the page loads up
useEffect(() => {
    console.log('this code will run only once when the page loads up!')
    fetchCategories()
}, [])
    
  
    const fetchQuestionsForCategory = async () => {
      let questions = await fetch(`http://localhost:3000/api/categories/${activeCategory.id}/questions`)
      questions = await questions.json()
      console.log('questions', questions)
      setQuestions(questions);
      // setAllCategories(categories)
  };

  useEffect(() => {
      fetchQuestionsForCategory()
  }, [activeCategory])
  
  const onQuestionSubmit = async () => {
    // POST request
    let q = await fetch(`http://localhost:3000/api/categories/${activeCategory.id}/questions`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({questionTxt: questionFormText})
    })
};
    // Answers:
  
    const fetchAnswersForQuestion = async () => {
      let answers = await fetch(`http://localhost:3000/api/questions/?questionId=${activeQuestion.id}/answers`)
      answers = await answers.json()
      console.log('answers', answers)
      setAnswers(answers);
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
    fetchAnswersForQuestion()
  };

  const handleAddAQuestionClick = () => {
    setAddAquestionClick(!addAQuestionClick);
    console.log('clicked')
  }

  return (
    <>
      <div className={'h-fit w-full relative'}>
         <Topbar />
      <div className={'flex justify-center text-center relative mt-5 p-0'}>
          <img  
            className={'h-5/6 w-full z-0'}  
                alt='img'
                src={`/images/banner.png`}
          />
          <h1 className={'text-7xl logo z-50 absolute top-32 text-peach'}>Category {activeCategory}</h1>
        </div>
  
          <div className={'flex flex-row justify-start'}>
          <button onClick={handleAddAQuestionClick} className={'absolute left-10 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe pl-2'}>Add A Question</button>
          <button className={'absolute left-52 top-96 mt-8 px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Choose A Location<i className={'fas fa-caret-down text-md pl-1'} /></button>
          
          {addAQuestionClick && <div className={'flex justify-start mx-10 mb-5 mt-0'}>
          <textarea value={questionFormText}
            onChange={(event) => setQuestionFormText(event.currentTarget.value)}
            placeholder={'Enter Question text'}
            id="" cols="30" rows="5"
            className={'border border-black'}></textarea>
            
            <button onClick={onQuestionSubmit} className={'px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>Submit</button>
        </div>}
        </div>
          <h2 className={'logo2-italic text-xl mx-20 border-b border-black'}>North Miami Beach</h2>
          <div className={'mx-20 my-8 grid grid-cols-12 gap-8'}>
          {/* FETCH CATEGORIES */}
          <ul>
            {allCategories && allCategories.map((category, idx) => {
                {console.log(category.name)}
              return <li className={'text-red-400'} key={idx} onClick={() => setActiveCategory(category)} >{category.name}</li>
            })}
          </ul>
          {/* FETCH QUESTIONS */}
          <ul>
            {questions && questions.map((q, idx) => {
                return <li key={idx} onClick={() => setActiveQuestion(q)} >{q.name}</li>
            })}
            {/* FETCH ANSWERS */}
          </ul>
          {activeQuestion && <div>
            {answers && answers.map((answer, idx) => {
                return <li key={idx}>{answer.name}</li>
            })}</div>}
          {activeQuestion &&
            <div className={'flex justify-start mx-10 mb-5 mt-0'}>
            <textarea value={questionFormText}
              onChange={(event) => setQuestionFormText(event.currentTarget.value)}
              placeholder={'Enter Question text'}
              id="" cols="30" rows="5"
              className={'border border-black'}></textarea>
            <button className={'px-5 py-1 bg-pistachio logo2 text-black text-lg hover-bg-coffe'}>
          Create An Answer for Question:{activeQuestion}</button></div>}

          









          <div className={'col-span-3 bg-peach h-80'}>
             1 
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach h-80'}>
             1 
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
          <div className={'col-span-3 bg-peach'}>
              2
          </div>
        </div>
        <Footer />
      </div>
      {/* <Routes>
          <Route path="/" element={<Home />} /> 
      </Routes> */}
    </>
    
  )
}

export default App

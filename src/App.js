
import './App.css';
// import './style.css'
import React,{useState} from 'react';
import Books from './Book';
import BookInfo from './component/Bookinfo';
function App() {
  const[bookinfo,setBookInfo]=useState([])
  return (
    <div>
       <BookInfo bookinfo={bookinfo}/>
      <Books setBookInfo={setBookInfo}  bookinfo={bookinfo}/>
     
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';


function App({ bookData }) {
  console.log(bookData)
  return (
      <div className='App'>
          <Books bookData={bookData} />
        </div>
  );
}


function Books({ bookData }) {
  const[expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);

  return (
  <>
    {bookData.map((book) => (
      <div  className='wrapper' onClick={handleClick}>
        <div className='item'>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.shortDescription}</p>
          <p><i className="arrow right"></i> More Information</p>
          <div style={{border:'1px solid silver'}}><img className='image' src={book.coverImageUrl} alt="" />
        </div>
        </div>
        
        {expanded && <img className='image'src= 'yup' alt=''></img>}
        </div>
    ))}
  </>
  )  
}

export default App;

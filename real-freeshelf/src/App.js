import { useState } from 'react';
import './App.css';

function App() {
  const [books, setbooks] = useState(
    [{title: "You Don't know JS: Up and Going", author: "Kyle Simpson", des: "blah", img:"yup"}
  ])
  return (
      <div className='App'>

        <h1>Hello world</h1>
        <div className='book-list'>
          {books.map(books => <Books title={books.title} author={books.author} des={books.des} img={books.img} />)}

        </div>


      </div>
  

  );
}
function Books({title, author, des, img}) {
  return(
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{des}</p>
      <p>{img}</p>
    </div>
  )
}

export default App;

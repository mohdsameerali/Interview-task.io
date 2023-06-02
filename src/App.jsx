

import React, { useEffect, useState } from 'react';

import  './App.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(responseData => setData(responseData.data.children));
  }, []);

  return (
    <div className='box'>
      {data.map(item => (
        <div key={item.data.id} className="card">
          <h2 className="title">{item.data.title}</h2>
          <div  className="self-text">{item.data.selftext_html}</div>
          <a className="url" href={item.data.url}>{item.data.url}</a>
          <div className="score">Score: {item.data.score}</div>
        </div>
      ))}
    </div>
  );
};

export default App;

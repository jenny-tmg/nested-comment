import React from 'react';
import { useState } from 'react';
import './style.css';
import Comment from './components/Comment';

const comments = {
  id: 1,
  items: [
    {
      id: 1234562,
      name: 'frontend',
      items: [
        {
          id: 1234564,
          name: 'HTML',
          items: [
            ,
            {
              id: 1234565,
              name: 'CSS',
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 1234563,
      name: 'react js',
      items: [
        {
          id: 12345645,
          name: 'javascript',
          items: [],
        },
      ],
    },
  ],
};

export default function App() {
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <div className="App">
      <Comment comment={commentsData} />
    </div>
  );
}

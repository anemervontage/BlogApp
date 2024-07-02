import "./Input.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

export default function Input() {
  // Define state variables to hold input values
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [blog, setBlog] = useState('');

  const isFormValid = () => {
    return title.trim() !== '' && author.trim() !== '' && blog.trim() !== '';
  };

  const handleClick = () => {
    axios.post('https://blogapp-backend-15kn.onrender.com/api/workouts', {
      title: title,
      author: author,
      blog: blog,
    })

    .then(response => {
      console.log(response.data);
      window.location.href = '/'
    })
    .catch(error => {
      console.error(error);
    });

  
  };

  return (
    <div className="Input">
      <form className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput writeTitle"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
            required
          />
        </div>
        
        <div className="writeFormGroup">
          <input
            className="writeInput writeAuthor"
            placeholder="Your Name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write your blog..."
            type="text"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
            required
          />
        </div>
        {/* Use button inside form to submit */}
        <button className="writeSubmit" type="button" onClick={handleClick}
         disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
  );
}

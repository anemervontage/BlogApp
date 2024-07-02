import "./Home.css"
import Post from "../Navigation/Post"
import { useEffect, useState } from "react"
import axios from "axios"

  export default function Home() {

    const [workouts, setWorkouts] = useState([])

//Fetch data from API to render to home page.
  useEffect(() => {
    const fetchWorkouts = async () => {

      // Fetch API data from DB hosted on Render.
      try{
        const response = axios.get('https://blogapp-backend-15kn.onrender.com/api/workouts')
        .then((response) => {
          (setWorkouts(response.data));
        });
      }

      catch (error) {
          console.log("Failed to get blog", error)
      }
    }
    
    //call function
    fetchWorkouts()
  }, 

  [])

  

  return (
    
    
    <div className="home">
      
      <div className="posts" >
        {workouts && workouts.map(workout => (
          <div>
            
        <Post 
        Title = {workout.author} Author = {workout.title} Blog = {workout.blog}/>
        
          </div>
       
        ))} 
      </div> 

    </div>
     
  )
}

import "./Home.css"
import Navbar from "../Navigation/Navbar"
import '../Navigation/Posts.css'
import Post from "../Navigation/Post"
import { useEffect, useState } from "react"
import axios from "axios"
import Input from "./Input"





  // return (
  //   {workouts && workouts.map((workout => (
  //     <p key = {workout._id}>{workout.title}</p>
  // ))}
 
  // )
  export default function Home() {

    const [workouts, setWorkouts] = useState([])


  useEffect(() => {
    const fetchWorkouts = async () => {
      try{
        const response = axios.get('http://localhost:4000/api/workouts')
        .then((response) => {
          console.log(response.data[0]);
          console.log(response.data[1]);
          (setWorkouts(response.data));
        });


        // .then(res => (setWorkouts(response.data)))
        // .catch(err => console.log(err))
        
      }

      catch (error) {
          console.log("Failed to get blog", error)
      }

      
      // if(!response.ok){
      //   throw new Error('Network respoonse was not ok')
      // }
      // const json = await response.json()
      // console.log(json)
 
      
    }
    fetchWorkouts()
  }, [])

  

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

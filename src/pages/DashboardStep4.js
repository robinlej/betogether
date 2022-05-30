// import { useEffect } from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import VotesWheel from "../components/VotesWheel";


const DashboardStep4 = ({ nextPage, groupProject, maxStudents }) => {
  const { token } = useContext(UserContext)

  const [votesSubmitted, setVotesSubmitted] = useState(0)
  // The function fetches from a mock api an array of objects which have a default boolean false on a "hasVoted" key and when all the booleans are true, it renders the next page

  // useEffect(() => {
  //   const url = "https://6284e5593060bbd347411d5e.mockapi.io/betogether/Vote_list"

  //   const fetchVotes = async () => {
  //     try{
  //     const response = await fetch(url)
  //     const json = await response.json()
  //     for (let i = 0; i < json.length; i++) {
  //       let allVotes = json[i].hasVoted
  //       allVotes === true ? nextPage() : console.log("It did not work")
  //     }
  //   } catch (error){
  //     console.log(error)
  //   }
  // }
  // fetchVotes()
  // }, [])
  
  
  // The votes in the wheel will be changed when we'll have the data, for now I can't visualise how they will be displayed in the backend

  useEffect(() => {
    fetch(
      'https://be-together-backend.herokuapp.com/users/profile/vote_list/all',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const wishlistsReceived = data.filter(
          (wishlist) => wishlist.group_project_id === groupProject
        )
        setVotesSubmitted(wishlistsReceived.length)
        console.log(data)
      })
      .catch((err) => console.error(err))
    
    if (votesSubmitted !== maxStudents) {
      const fetchVotes = setInterval(() => {
        fetch('https://be-together-backend.herokuapp.com/users/profile/vote_list/all', {
          method:'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
          }
        })
        .then(response => response.json())
        .then(data => {
          const wishlistsReceived = data.filter(wishlist => wishlist.group_project_id === groupProject)
          setVotesSubmitted(wishlistsReceived.length)
          console.log(data)
        })
        .catch(err => console.error(err))
      }, 5000)
  
      return () => clearInterval(fetchVotes)
    }
  }, [])

  useEffect(() => {
    if (votesSubmitted === maxStudents) {
      const goToNextPage = setTimeout(() => nextPage(), 1000)
    
      return () => clearTimeout(goToNextPage)
    }
  }, [votesSubmitted])

  return (
      <VotesWheel votesSubmitted={votesSubmitted} totalVotes={maxStudents} />
  );
};

export default DashboardStep4;

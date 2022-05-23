// import { useEffect } from "react";
import VotesWheel from "../components/VotesWheel";


const DashboardStep4 = ({ nextPage }) => {
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

  const votesSubmitted = 20
  const totalVotes = 20

  if (votesSubmitted === totalVotes) nextPage()

  return (
      <VotesWheel votesSubmitted={votesSubmitted} totalVotes={totalVotes}/>
  );
};

export default DashboardStep4;

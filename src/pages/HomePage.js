import React from 'react'
import homeImage from "../layouts/homepage.jpg";
import CandidateList from './CandidateList';

export default function HomePage() {
  return (
    <div><img className='homeImage' src={homeImage}></img><h1>Search for candidate</h1>
    <CandidateList/>
    </div>
  )
}

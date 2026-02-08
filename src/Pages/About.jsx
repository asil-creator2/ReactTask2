import React from 'react'
import AboutBanner from '../Components/About/AboutBanner'
import AboutApp from '../Components/About/AboutApp'
import FeaturesSection from '../Components/Home/Sections/FeaturesSection'
import Question from '../Components/About/Question'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <Question/>
      <AboutApp/>
      <FeaturesSection/>
    </div>
  )
}

export default About
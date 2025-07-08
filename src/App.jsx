import React from 'react'
import Counter from './Counter'
import Todo from './Todo'
import Meals from './Meals'
import Calculator from './Calculator'
import ToggleBackground from './ToggleBackground'
import HiddenSearchBar from './HiddenSearchBar'
import Testimonials from './Testimonials'
import Accrodian from './AccrodianApp'
import Form from './Form'
import {accordionData} from "./utils/content"
import Navbar from './Navbar'
import CardGrid from './CardGrid'
import ProductSection from './ProductSection'
import ProductSectionRightImage from './ProductSectionRightImage'
import Footer from './Footer'
import ProductGrid from './ProductGrid'
import InfoCard from './InfoCard'

const App = () => {
  return (
    <>
       {/* <Counter/> */}
       {/* <Todo/> */}
       {/* <Meals/> */}
       {/* <Calculator/> */}
       {/* <ToggleBackground/> */}
       {/* <HiddenSearchBar/> */}
       {/* <Testimonials/> */}
       {/* <Form/> */}
       {/* <div className='flex items-center justify-center flex-col h-screen'>
          {accordionData.map(({title,content}) => {
            return <Accrodian title={title} content={content}/>
          })}
       </div> */}
       <Navbar/>
       <ProductSection/>
       <ProductSectionRightImage/>
       <InfoCard/>
       <CardGrid/>
       <ProductGrid/>
       <Footer/>
    </>
  )
}

export default App

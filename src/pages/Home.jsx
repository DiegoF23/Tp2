import React from 'react'
import Headers from '../components/Headers'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'

const Home = () => {


    const Alumno={
        'nombre':"Diego Flores Aguirres",
        'edad':28,
        'legajo':55543,
        'tel':3816155136,
        'uni':'UTN FRT'
    }
  return (
    <>
       <div>
            <Headers/>
            <MainHome alumno={Alumno}/>
            <Footer/>
       </div>
    </>
  )
}

export default Home
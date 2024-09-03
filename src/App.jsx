import {useState, useEffect} from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"  
import  {db} from './data/db'

function App() {

    const [data, setData]= useState(db)
    
   
    // // STATE, serecomiendan aqui arriba los hooks
    // const [auth, setAuth]= useState(false)
    // const [total, setTotal]= useState(0)
    // const [cart, setCart]= useState([])

    // useEffect(()=>{
    //     if(auth){
    //         console.log('Auntenticado');            
    //     }
    // },[auth])

    // setTimeout(() => {
    //     setAuth(true)
    // }, 3000);
  
  return (
    <>

    <Header/> 
        

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

            {data.map((guitar)=>(
                <Guitar
                key={guitar.id}
               guitar= {guitar}
                
                />         
                       )
            )}
          
        
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

     
    </>
  )
}

export default App

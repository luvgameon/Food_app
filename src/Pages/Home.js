import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import Card from '../Components/Card'

import axios from 'axios'
import { useEffect } from 'react'



export default  function Home() {
  const [Food_items, setFood_items] = useState([]);
  const [Search, setSearch] = useState("");
  const [FoodCat, setFoodCat] = useState([]);
  const Load_data = async ()=>{
    const data= await axios.post('http://localhost:5000/api/food_items');

  setFood_items(data.data[0]);
  setFoodCat(data.data[1]);
    
  }
  useEffect(() => {
 Load_data();
  }, [])
   
  return (<>
    <Header/>
    <Carousel variant="dark" style={{objectFit:"contain !important"}}>
      <Carousel.Item className="Carousel" style={{objectFit:"contain !important"}} interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide" style={{width:"100%",filter:"brightness(30%)"}}
        />
        <Carousel.Caption style={{zIndex:"10"}}>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}}/>
     </form>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className="Carousel" style={{objectFit:"contain !important"}} interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80"
          alt="Second slide"
          style={{width:"100%",filter:"brightness(30%)"}}
          />
        <Carousel.Caption style={{zIndex:"10"}}>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}}/>
     </form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel" style={{objectFit:"contain !important"}} interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
          style={{width:"100%",filter:"brightness(30%)"}}
          />
        <Carousel.Caption style={{zIndex:"10"}}>
        <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}}/>
     
    </div>
          
        </Carousel.Caption>

      </Carousel.Item>
     
     
    </Carousel>



     {FoodCat!==[] ? FoodCat.map((data)=>{
      return (<div className='row mb-3'>
      <div key={data._id} className='fs-3 m-3'>
           {data.CategoryName}
      </div>

      <hr/>
      {Food_items!==[]?
       Food_items.filter((item)=>item.CategoryName===data.CategoryName && item.name.toLowerCase().includes(Search.toLocaleLowerCase())).map((filterItem)=>{
        return (
          <div key={filterItem._id} className='col-12 col-md-6 col-lg-3 my-2'>
            <Card name={filterItem.name}
                   img={filterItem.img}
                   options={filterItem.options[0]}
                   des={filterItem.description}

            
            />
          </div>
        )
       })
      
      
      : "No Such Food"}
      




            </div>
     
     
      )
     
     
     })  : ""} 
   
    <Footer/>
  
  </>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  let options = props.options;
             

  let priceoption=Object.keys(options || {});
  return (
    <div>
    <div className="card mt-3 mx-2" style={{width: "18rem",maxHeight:"660px"}}>
  <img src={props.img} width={50} height={200} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <div className="container w-100">
      <select className='m-2 h-100 bg-light rounded'>
        {Array.from(Array(6),(e,i)=>{
          return( <option key={i+1} value={i+1}>{i+1}</option>
        )}
        )}
      </select>
      <select className='m-2 h-100 bg-light rounded'>
       {priceoption.map((data)=>{
      return (
          <option key={data} value={data}>{data}</option>
         
          
       )

      
    
       })}
      </select>

    <div>Total Price</div>
    </div>
    <Link to="#" class="btn btn-dark">Add To Cart</Link>
  </div>
</div>
    </div>
  )
}

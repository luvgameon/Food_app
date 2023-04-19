import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div>
    <div className="card mt-3 mx-2" style={{width: "18rem",maxHeight:"360px"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text </p>
    <div className="container w-100">
      <select className='m-2 h-100 bg-light rounded'>
        {Array.from(Array(6),(e,i)=>{
          return( <option key={i+1} value={i+1}>{i+1}</option>
        )}
        )}
      </select>
      <select className='m-2 h-100 bg-light rounded'>
        <option value="half">Half</option>
        <option value="full">Full</option>
      </select>

    <div className="d-inline">Total Price</div>
    </div>
    <Link to="#" class="btn btn-dark">Add To Cart</Link>
  </div>
</div>
    </div>
  )
}

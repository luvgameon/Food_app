import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    

    <Carousel variant="dark" style={{objectFit:"contain !important"}}>
      <Carousel.Item className="Carousel" style={{objectFit:"contain !important"}} interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide" style={{width:"100%",filter:"brightness(30%)"}}
        />
        <Carousel.Caption style={{zIndex:"10"}}>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-2" type="submit">Search</button>
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
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-2" type="submit">Search</button>
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
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-2 d-inline" type="submit">Search</button>
    </form>
          
        </Carousel.Caption>

      </Carousel.Item>
     
     
    </Carousel>
          
  );
}

export default Slide;
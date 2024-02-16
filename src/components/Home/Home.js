import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';
import styles from './Home.module.css'

export const Home = () => {
  const url1 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":-1}'
  const url2 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"rating":-1}'
  const url3 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"ac"}'
  const url4 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"refrigerator"}'
  const url5 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"mobile"}'
  const url6 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tv"}'
  const url7 = 'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"laptop"}'

  return (
  <div className={styles.home}>  
    <Banner />
    <Carousel style={{zIndex:'-1'}}>
    <Carousel.Item>
    <img 
        src="https://www.reliancedigital.in/medias/Laptop-Carnival-Lenovo-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDUxMDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRkL2hhZC8xMDA4NjkzNDQ0NjExMC5qcGd8OWYwY2Y4ZmNlN2QxNGEyYmIxMmEwZmVjMjAwNGYzOWZiZDcwYjg2NWI3OWQyYWQ0MzQzZjkzZDYzNjZkNzJjNA" 
        alt="Air Purifier 1365x260" 
        className='d-block w-100'
    />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img 
        src="https://www.reliancedigital.in/medias/Air-Purifier-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMjE5MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDc0L2g5NS8xMDA3OTYwODc5OTI2Mi5qcGd8MGY4YWFkN2M1NTlkYTM4NzEwZjBmZmJiZTI4Y2UyY2Y5ZmFkMzVjZTVhMWI0MjZkYzRlNTNmNWE4NDQxNDM0Nw" 
        alt="Air Purifier 1365x260" 
        className='d-block w-100'
    />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img 
        src="https://www.reliancedigital.in/medias/R7-Accessories-Fiesta-x-TSRJ-Carousel-Banner-09.06.2023-02-4-.jpg?context=bWFzdGVyfGltYWdlc3wxMTY3MDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDY0L2hmZS8xMDA4NjE2Njc5MDE3NC5qcGd8ZDg1NWExMThiNWFhZjM1NTIzMWEwNjk4ZGQ1ODkyNzEyZDUwMjJiZjZlZjFjYzY5YTBmMWQ0OGJhNDYxYjZjNw" 
        alt="Air Purifier 1365x260" 
        className='d-block w-100'
    />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img 
        src="https://www.reliancedigital.in/medias/Smart-Televisions3-HPMC-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxMTcxMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGFkL2gzZi8xMDA4MTQ2NzQ2NTc1OC5qcGd8ZDQ3NGNhZDExYWQ0MzA2M2Q5Y2I0MGQ2MDVlZmM5MDA5YjY4NTM0MjM4NmVkYTAyNjY5ODNhNTNmOTYyMDM4Yg" 
        alt="Air Purifier 1365x260" 
        className='d-block w-100'
    />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  <ProductList  sectionName={" Lowest Prices of the Today"} url={url1}/>
  <ProductList  sectionName={"Trending Products"} url={url2}/>
  <ProductList  sectionName={"Bestselling smartphones"} url={url5}/>
  <ProductList  sectionName={"Bestselling  Laptop"} url={url7}/>
  <ProductList  sectionName={"Bestselling refrigeration"} url={url4}/>
  <ProductList  sectionName={"Bestselling Ac"} url={url3}/>
  <ProductList  sectionName={"Bestselling tv"} url={url6}/>
</div>  
  )
}

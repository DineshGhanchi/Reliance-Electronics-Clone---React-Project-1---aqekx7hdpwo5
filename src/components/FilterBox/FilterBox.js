import React from 'react'
import CheckBox from '../CheckBox/CheckBox';

const FilterBox = ({ data }) => {
  console.log(data); 
  let category = [];
  let brand = [];
  let tag = [];
  if(data){
    data.map((val, key) => {
      category.push(val.category);
      brand.push(val.brand);
      tag.push(val.sellerTag);
    });
  }
   
 
 
  let catagory1 = Array.from(new Set(category));
  let brand1 = Array.from(new Set(brand));
  let tag1 = Array.from(new Set(tag));
  console.log(catagory1);
  console.log(brand1);
  console.log(tag1);


  return (
    <>
      {data && catagory1 && <CheckBox name="Catagory" data = {catagory1} />} 
      {data && brand1 && <CheckBox name="Brand" data = {brand1} />} 
      {data && tag1 && <CheckBox name="Tag" data = {tag1} />} 
    </>
  )
}

export default FilterBox
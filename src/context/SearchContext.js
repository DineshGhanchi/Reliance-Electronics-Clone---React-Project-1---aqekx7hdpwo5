import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({children})=>{
  const [searchQuery , setSearchQuery] = useState("");
  const [searchResult , setSearchResult] = useState(null);

  const handleSearch = async ()=>{
       const url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${searchQuery}"}`
       let res = await fetch(url, {
        headers: {
          projectId: 'f104bi07c490'
        }
      }) 
       const data = await res.json();
       setSearchResult(data.data);         
    }
  
  return (
    <SearchContext.Provider value={{searchQuery,setSearchQuery,searchResult,setSearchResult,handleSearch}}> 
        {children}
    </SearchContext.Provider>
  )
}

export const useSearch = ()=>{
    return useContext(SearchContext);
    
}

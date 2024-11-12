import React  from 'react'
import { useState } from "react"
import axios from 'axios';

const Search = ({onSearch}) => {
    const [interest, setInterest] = useState(' ');
    const [searchResults, setSearchResults] = useState([]);
    const [loading ,setLoading] = useState(false);

    const handleSearch = async () =>{
        setLoading(true);
        try{
            const responce = await axios.get(
                `https://api.unsplash.com/search/photos?query=${interest}&client_id=zuMduB0wPoIl939f8dOdpcx2bUvuoccznpu1bUp4D_k`
            );
            const results = responce.data.results.map((result) => ({
                name: interest,
                image : result.urls.small,
            }));
            setSearchResults(results);
            onSearch(results);
        }catch(error) {
            console.error("Error fetching search results:", error);
        }finally{
            setLoading(false);
        }
    };
  return (
    <div>
      <h2>Search by Interst</h2>
      <input type="text" 
      placeholder="Enter an interst (e.g., beaches)" 
      value = {interest}
      onChange={(e) => setInterest(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      <div>
        {searchResults.map((result ,index)=>(
            <div key={index}>
            <h3>{result.name}</h3>
            <img src={result.image} alt={result.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Search

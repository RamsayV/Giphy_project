import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import GifList from './GifList'

function SearchBar() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const API_KEY = "uvw7wiMPHa2KEgifso4d3SSQ42e1POsv";
  const ENDPOINT = "https://api.giphy.com/v1/gifs/search";

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${ENDPOINT}?api_key=${API_KEY}&q=${query}`);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  return (
    <>
    <div>
      <Form inline onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <FormControl 
          type="text" 
          placeholder="Search for GIFs" 
          className="mr-sm-2" 
          value={query}
          onChange={handleInputChange}
          />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
      </div>
      <GifList data={data}/>
          </>
  );
}

export default SearchBar;
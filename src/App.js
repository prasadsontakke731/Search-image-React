import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import { useState } from 'react';

function App() {
  //  state
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className='App'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

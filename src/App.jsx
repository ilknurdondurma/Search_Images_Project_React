import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import GetAPIPhotos from './api';
import ImageList from './components/ImageList';
function App() {
  const [images,setImages]=useState([]);



  const HandleSearchSubmitParent = async (data) => {
    const result= await GetAPIPhotos(data);
  
    setImages(result);
  };

  return (
    <>
    <nav className='nav'> <span  className='icon'></span>Görsel Arama </nav>
      <div className='searchdiv'>
        <Search search={HandleSearchSubmitParent} />
        <ImageList ImageProps={images}/>
      </div>
    </>
  );
}

export default App;

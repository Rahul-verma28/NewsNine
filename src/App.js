import React, { useState } from 'react';
import News from './components/News';
import { NavbarDefault } from './components/NavbarDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import SearchedNews from './components/SearchedNews';


export default function App() {
  const [progress, setProgress] = useState(0);
  const [category, setcategory] = useState("general");
  const [value, setvalue] = React.useState("informative");


  return (
    <Router>
      <NavbarDefault setcategory= {setcategory} setvalue={setvalue}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)} />
      <h1 className="text-2xl font-bold underline text-center my-5">
        Breaking News
      </h1>
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} category={category} />} />
        <Route path="/all" element={<News setProgress={setProgress} key="generrral" category={category} />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" category={category} />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category={category} />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" category={category} />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" category={category} />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" category={category} />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" category={category} />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" category={category} />} />
        <Route path="/SearchedNews" element={<SearchedNews value={value} setProgress={setProgress} />} />
      </Routes>
      <Footer />
    </Router>
  );
}



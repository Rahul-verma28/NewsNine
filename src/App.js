import React, { useState } from 'react';
import News from './components/News';
import { NavbarDefault } from './components/NavbarDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import Home from './Home';
import AboutSection from './About';


export default function App() {
  const [progress, setProgress] = useState(0);
  const [category, setcategory] = useState("general");
  
  return (
    <Router>
      <NavbarDefault setcategory= {setcategory} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)} />
      <Routes>
        <Route path="/" element={<Home category={category} setProgress={setProgress}/>} />
        <Route path="/about" element={<AboutSection/>} />
        {/* <Route path="/" element={<News setProgress={setProgress}  category={category} />} />
        <Route path="/all" element={<News setProgress={setProgress} key="generrral" category={category} />} /> */}
        <Route path="/business" element={<News setProgress={setProgress} key="business" category={category} />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category={category} />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" category={category} />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" category={category} />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" category={category} />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" category={category} />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" category={category} />} />
      </Routes>
      <Footer />
    </Router>
  );
}



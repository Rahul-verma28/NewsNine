import React, { useState } from 'react';
import News from './components/News';
import { NavbarDefault } from './components/NavbarDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <NavbarDefault />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)} />
      <h1 className="text-2xl font-bold underline text-center my-5">
        Breaking News
      </h1>
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" category="general" />} />
        <Route path="/all" element={<News setProgress={setProgress} key="general" category={"general"} />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" category={"business"} />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category={"entertainment"} />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" category={"general"} />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" category={"health"} />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" category={"science"} />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" category={"sports"} />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" category={"technology"} />} />
      </Routes>
      <Footer />
    </Router>
  );
}



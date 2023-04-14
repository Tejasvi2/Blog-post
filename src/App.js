import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/blogPostList.component';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route index element={<BlogPostList />} />
          {/* <Route path="home" element={<FileUpload />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

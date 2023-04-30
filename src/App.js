import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/blogPostList.component';
import ChildPost from './components/childPost/childPost.component';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route index element={<BlogPostList />} target='_blank' />
        <Route path="post/:id" target='_blank' element={<ChildPost />} /> 
          {/* <Route path="home" element={<FileUpload />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

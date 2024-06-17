import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from './components/Grid';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost'

function App() {

  return (
    
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Grid/>}/>
          <Route exact path="/posts/:id" element={<SinglePost/>} />
        </Routes>  
        <Footer/>
      </div>
    </Router>
  );


}

export default App;
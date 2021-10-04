import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './Footer/Footer';
import About from './components/About/About'
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound'
import Contest from './components/Contest/Contest';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header/>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/about">
        <About></About>
        </Route>
        <Route  path="/courses">
        <Courses></Courses>
        </Route>
        <Route  path="/contest">
         <Contest></Contest>
        </Route>
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
        
      </Switch>

     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import View from './Components/View';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>


        <Route path='' element={<Home></Home>}></Route>
        <Route path='add' element={<Add></Add>}></Route>
        <Route path='edit/:id' element={<Edit></Edit>}></Route>
        <Route path='view/:id' element={<View></View>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;

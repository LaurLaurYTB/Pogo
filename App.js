import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from "./Pages/Signup";
import Signin from "./Pages/Singin";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Forgotpassword from './Pages/ForgotPassword';
import ForgotPasswordSucces2 from './Pages/ForgotPasswordSucces2';
import Succes from './Pages/ForgotPasswordSucces';
import Createpassword from './Pages/CreatePassword';
import AddPet from './Pages/AddPet';






function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/ForgotPassword' element={<Forgotpassword />} />
          <Route path='/ForgotPasswordSucces' element={<Succes />} />
          <Route path='/CreatePassword' element={<Createpassword />} />
          <Route path='/ForgotPasswordSucces2' element={<ForgotPasswordSucces2 />} />
          <Route path='/AddPet' element={<AddPet />} />
        </Routes>
      </Router>
      

  
 
    </div>
  );
}

export default App;

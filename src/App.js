import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Services from './components/pages/Services/Services';
import Doctors from './components/pages/Doctors/Doctors';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/Login/Login';
import Join from './components/pages/Login/Join';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/pages/ServiceDetails/ServiceDetails';
import DoctorDetails from './components/pages/DoctorDetails/DoctorDetails';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/departments/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/doctors/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            
            <Route path="/departments">
              <Services></Services>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/join">
              <Join></Join>
            </Route>
            
            <Route exact path="/">
              <Home></Home>
            </Route>
            

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

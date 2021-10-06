import './App.css'
import { Col, Container, Row} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from "./components/Home";
import DisplayJobOpening from "./components/DisplayJobOpening";
import PostJob from "./components/PostJob";
import Menu from "./components/Menu";
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import Registration from './components/Registration'
function App() {

  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <Router>
        <Container className='back'>
          <Home/>
          <Row>
            <Col md={2}>
              <Menu/>
            </Col>

            <Col md={10}>
              <Route path='/register' component={Registration}/>
              <Route path="/" component={Login} exact />
              <Route path="/job-openings" component={DisplayJobOpening} exact />
              <Route path="/post-job" component={PostJob} exact />
              <Route path='homepage' component={HomePage} exact/>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Router>
    </div>
  );
}


export default App;
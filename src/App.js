import logo from './logo.svg';
import './App.css';
import {Col, Layout, Row} from 'antd'
import Navbar, {SignHome} from './component/navbar';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Home from './component/home';
import {Sign} from './component/Sign'

// import {SendOutlined } from 'icons'
const {Header} = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Row className="Navbar" id="top">
            <Col lg={6} md={4} xs={7}  className="loc_auto-logo">
              <a href="/"> <img src={logo} alt="Loc Auto logo"/></a>
            </Col>
            <Col lg={8} md={8} xs={17}>
              <SignHome/>
            </Col>
            <Col lg={10} md={12} xs={24} >
              <Navbar className="menu" /> 
            </Col>
            
            
            
          </Row>
          
          <div style={{position: 'relative'}}>
            <Switch>
              <Route path="/" exact>
                  <Home  />
              </Route>

              <Route path="/sign">
                  <Sign />
              </Route>

            </Switch>
            </div>
          <Row className="footer" id="footer">
            <Col lg={12} md={12}  xs={24} className="copyright">
                <div >
                    <p>Loc Auto Copyright &copy; Design by <a href="https://github.com/danhloc112" target="_blank" rel="noreferrer">Loc Tran</a> </p>
                </div>
            </Col>
            <Col lg={12} md={12} style={{textAlign: 'end'}}>
                <p>Email: danhloc112@gmail.com</p>
                <p>Phone: +84 961 705 182</p>
            </Col>
          </Row>
        </Router>
        
      </Layout>
    </div>
  );
}

export default App;

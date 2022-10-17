import logo from './logo.svg';
import './App.css';
import Nav from './template/Nav';
import Footer from './template/Footer';
import Topbar from './template/Topbar';

function App() {
  return (
    <div id="wrapper" className="page-wrapper">
      <Nav />
      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
          <Topbar/>
          <div className="container-fluid">

          <h1>Enter Page Content Here</h1>


          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

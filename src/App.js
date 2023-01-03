import './App.css';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import PageHeading from './components/PageHeading.js';
import DataCards from './components/DataCards.js';
import Latest from './components/Latest.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topbar></Topbar>
        <div className="container-fluid">
          <PageHeading title="Dashboard"/>
          <DataCards />
          <div className="row">
            <Latest title="Último producto añadido" image={process.env.PUBLIC_URL + '/product_dummy.svg'}/>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

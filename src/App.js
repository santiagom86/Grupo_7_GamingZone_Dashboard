import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import PageHeading from './components/PageHeading.js';
import Latest from './components/Latest.js';
import Footer from './components/Footer.js';
import DataCard from './components/DataCard.js';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const URL_SITE = process.env.REACT_APP_URL_SITE;

function App() {
	const usersUrl = URL_SITE + '/api/users'
	const productsUrl = URL_SITE + '/api/products'
	const [users, setUsers] = useState()
	const [products, setProducts] = useState()
	const fetchApi = async () => {
	  const responseUsers = await fetch(usersUrl)
	  const responseProducts = await fetch(productsUrl)
	  const responseUsersJSON = await responseUsers.json()
	  const responseProductsJSON = await responseProducts.json()
	  setUsers(responseUsersJSON)
	  setProducts(responseProductsJSON)
	}
	useEffect(() => {
	  fetchApi()
	}, [])
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topbar></Topbar>
        <div className="container-fluid">
          <PageHeading title="Dashboard"/>
          <div className="row">
			      <DataCard title="Cantidad de Productos" data={ !products ? 'Cargando...' : products.count } icon={ faGamepad }/>
			      <DataCard title="Cantidad de Usuarios" data={ !users ? 'Cargando...' : users.count } icon={ faUsers }/>
            <DataCard title="Último usuario creado" data={ !users ? 'Cargando...' : users.users[users.count - 1].username } icon={ faUser }/>
		      </div>
          <div className="row">
            <Latest title="Último producto añadido" image={process.env.PUBLIC_URL + '/product_dummy.svg'} productTitle={ !products ? 'Cargando...' : products.products[products.count - 1].title }/>

            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Todos los productos</h6>
                </div>
                <div className="card-body">
                  <ul>
                    { !products ? 'Cargando...' : products.products.map((product, index) => {
                      return <li key={index}><a target="_blank" href={URL_SITE + "/products/" + product.id}>{product.title}</a></li>
                    })}
                  </ul>
                </div>
              </div>
          </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

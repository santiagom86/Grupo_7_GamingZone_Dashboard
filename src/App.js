import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';
import PageHeading from './components/PageHeading.js';
import Latest from './components/Latest.js';
import Footer from './components/Footer.js';
import DataCard from './components/DataCard.js';
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
	const usersUrl = 'https://jsonplaceholder.typicode.com/users'
	const productsUrl = 'https://jsonplaceholder.typicode.com/albums'
	const [users, setUsers] = useState()
	const [products, setProducts] = useState()
	const fetchApi = async () => {
	  const responseUsers = await fetch(usersUrl)
	  const responseProducts = await fetch(productsUrl)
	  console.log(responseUsers.status)
	  console.log(responseProducts.status)
	  const responseUsersJSON = await responseUsers.json()
	  const responseProductsJSON = await responseProducts.json()
	  setUsers(responseUsersJSON)
	  setProducts(responseProductsJSON)
	  console.log(responseUsersJSON)
	  console.log(responseProductsJSON)
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
			      <DataCard title="Cantidad de Productos" number={ !products ? 'Cargando...' : products.length } icon={ faGamepad }/>
			      <DataCard title="Cantidad de Usuarios" number={ !users ? 'Cargando...' : users.length } icon={ faUser }/>
		      </div>
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

import React from 'react';
import ListaProductos from './Componentes/ListaProductos';
import './estilos.css';

const productosMovistar = [
  {
    nombre: 'Samsung Galaxy A14 Plata LTE',
    imagen: 'imagen1.jpg',
    descripcion: 'El Samsung Galaxy A14 Plata LTE tiene una pantalla de 6.6 pulgadas, cámara de 50 MP, batería de 5000 mAh, 4 GB de RAM, 64 GB de almacenamiento, y Android 13.',
    precio: 650000,
  },
  {
    nombre: 'Honor 90 5G 256GB Azul',
    imagen: 'imagen2.jpg',
    descripcion: 'El Honor 90 5G Azul ofrece 256GB de almacenamiento, conectividad 5G, y un diseño elegante en color azul.',
    precio: 750000,
  },
  {
    nombre: 'Honor Magic6 Lite 256 GB 5G Plata',
    imagen: 'imagen3.jpg',
    descripcion: 'El Honor Magic6 Lite 5G Plata ofrece 256 GB de almacenamiento, conectividad 5G, y un diseño elegante en color plata.',
    precio: 800000,
  },
  {
    nombre: 'Samsung Galaxy A14 Verde LTE',
    imagen: 'imagen4.jpg',
    descripcion: 'El Samsung Galaxy A14 Verde LTE tiene una pantalla de 6.6 pulgadas, cámara de 50 MP, batería de 5000 mAh, 4 GB de RAM, 64 GB de almacenamiento, y Android 13.',
    precio: 745000,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Telefonía Movistar:</h1>
      <ListaProductos productos={productosMovistar} />
    </div>
  );
}

export default App;



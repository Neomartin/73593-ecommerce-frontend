import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { get, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const URL = 'https://6838f7486561b8d882aeb42f.mockapi.io';

export default function AdminProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  async function getProducts() {
    try {
      const response = await axios.get(`${URL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  async function submit(data) {
    // Vamos a enviar los datos al servidor
    try {
      const response = await axios.post(`${URL}/products`, data);

      getProducts();

      Swal.fire({
        icon: 'success',
        title: 'Producto cargado correctamente',
        text: `El producto ${response.data.name} ha sido creado con éxito`,
      });
    } catch (error) {
      // Mensaje interno para el desarrollador
      console.log(error);
      // Mensaje para el usuario
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar el producto',
        text: 'Ocurrió un error inesperado',
      });
    }
  }

  function deleteProduct(id) {
    axios
      .delete(`${URL}/products/${id}`)
      .then((response) => {
        // Mostrar mensaje de éxito
        // Cargamos productos
        getProducts();
      })
      .catch((error) => {
        // Mostrar mensaje de error
        console.error('Error deleting product:', error);
        // Mostrar mensaje de error al usuario
      });
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submit)}>
          <div className="input-group">
            <label htmlFor="name">Nombre del producto</label>
            <input
              type="text"
              {...register('name', {
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
              })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <button type="submit">CARGAR</button>
        </form>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => deleteProduct(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

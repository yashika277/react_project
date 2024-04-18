import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const Productable = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [update, setupdate] = useState({})


  let name = useRef();
  let price = useRef();
  const getData = () => {
    axios.get('http://localhost:3001/Product').then((res) => {
      setProduct(res.data);
    })
  }
  /* ------------------------------- add product ------------------------------ */

  const addProduct = () => {
    let data = {
      name: name.current.value,
      price: price.current.value
    }
    axios.post('http://localhost:3001/Product', data).then((res) => {
      console.log(res.data);
      setProduct([...product, res.data])
    })
  }

  /* ----------------------------- delete product ----------------------------- */
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3001/Product/${id}`).then((res) => {
      setProduct(product.filter((product) => product.id !== id))
    })
  }

  /* -------------------------------- viewdata -------------------------------- */
  const viewdata = (id) => {
    const user = product.find(product => product.id === id);
    setupdate(user);
  }

  const updateHandler = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value })
  }
  const updateProduct = () => {
    axios.put(`http://localhost:3001/Product/${update.id}`, update).then((res) => {
      console.log(res);
      setProduct(product.map((val, ind) => {
        if (val.id === res.data.id) {
          return res.data
        }
        else {
          return val
        }
      }))
    })
  }

  /* ---------------------------- searching product --------------------------- */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  /* --------------------------------- sorting -------------------------------- */
  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  /* ---------------------------- updating product ---------------------------- */
  const sortedProducts = [...product].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  /* ---------------------------- filtering product --------------------------- */
  const filteredProduct = sortedProducts.filter(product =>
    product.price.toString().includes(searchTerm) || product.name.toLowerCase().includes(searchTerm.toLowerCase())

  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='inputfields row col-12 mb-5 mt-5'>

        <div className='col-6'>
          <h1>Add products</h1>
          <input type="text" placeholder='Product Name' ref={name} /><br/><br/>
          <input type="text" placeholder='Price' ref={price} /><br/>
          <button className='btn btn-primary' onClick={addProduct} style={{ width: "100%" }}>Add</button>
        </div>
        <div className='col-6'>
          <h1>Product Dashboard</h1>
          <input
            type="text"
            placeholder="Search by name or price..."
            onChange={handleSearch}
            value={searchTerm}

          />
          <select onChange={handleSort} value={sortBy} >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredProduct.map((product, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{product.id}</th>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td style={{ width: '75px' }}><button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal" onClick={() => viewdata(product.id)}>Edit</button>
                      </td>
                      <td style={{ width: '100px' }}><button className='btn btn-outline-danger' onClick={() => deleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <input type="text" value={update.name} placeholder='Product Name' name='name' onChange={updateHandler} />
                            <input type="text" value={update.price} placeholder='Price' name='price' onChange={updateHandler} />
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={updateProduct}>Update</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </tbody >

        </table>

      </div>
    </>
  )
}

export default Productable

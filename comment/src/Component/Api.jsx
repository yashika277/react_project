import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'


const Api = () => {
  let name = useRef();
  let price = useRef();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [update, setupdate] = useState({});

  useEffect(() => {
    fetchData();
  }, []);


  // get================================
  const fetchData = () => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error : ', error);
      });
  };


  // =================add=======================
  const addProduct = async () => {
    let obj = {
      name: name.current.value,
      price: price.current.value
    }

    let result = await axios.post('http://localhost:3001/products', obj)
    setProducts([...products, result.data])
  }


  // ================delete====================
  const deleteProduct = async (id) => {
    let deletedProduct = await axios.delete(`http://localhost:3001/products/${id}`)
    setProducts(products.filter((product) => product.id !== id))
  }


  // ================view=========================
  const viewdata = (id) => {
    const user = products.find(product => product.id === id);
    setupdate(user);
  }

  const updateHandler = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value })
  }

  const updateProduct = async () => {
    let updatedData = await axios.put(`http://localhost:3001/products/${update.id}`, update)
    console.log(updatedData);

    setProducts(products.map((val, ind) => {
      if (val.id == updatedData.data.id) {
        return updatedData.data
      } else {
        return val
      }
    })
    )
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.price.toString().includes(searchTerm) || product.name.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <>

      {/* add-product  input */}
      <div className='inputfields row col-12 mb-5'>

        <div className='col-6'>
          <h1>Add products</h1>
          <input type="text" placeholder='Product Name' ref={name} />
          <input type="text" placeholder='Price' ref={price} />
          <button className='btn btn-success' onClick={addProduct} style={{ width: "100%" }}>Add</button>
        </div>


        {/* ===============search-name or price===================== */}
        <div className='col-6'>
          <h1>Product Dashboard</h1>
          <input
            type="text"
            placeholder="Search name or price"
            value={searchTerm}
            onChange={handleSearch}
          />

          {/* ===================sort by ================ */}
          <select onChange={handleSort} value={sortBy}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>


      {/* ================table create============================== */}
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
            filteredProducts.map((product, index) => {
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

                  {/* update-model================================= */}
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Update product</h5>
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
    </>
  )
}

export default Api

import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Api = () => {
    let [data, setData] = useState([]);
    let [view,setView]=useState({});

    let name = useRef();
    let age = useRef();


    /* -------------------------------- get data -------------------------------- */
    let getData = () => {
        axios.get("http://localhost:3001/user").then((res) => {
            setData(res.data);
        })
    }

   /* -------------------------------- add data -------------------------------- */
   let handleSubmit=()=>{
    let dataa={
        name:name.current.value,
        age:age.current.value,
    }
     axios.post("http://localhost:3001/user",dataa).then((res)=>{
        // console.log(res.data);
        setData([...data,res.data]);
     })
   }

   /* ------------------------------- delete data ------------------------------ */

   let deleteData=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:3001/user/${id}`).then((res)=>{
        console.log(res);
        setData(data.filter((val)=>val.id!==id));
    })
   }

   /* ------------------------------- update data ------------------------------ */
   let viewData=(index)=>{
    console.log(index);
    let users=data[index]
    setView(users);
    
   }
   let handleView=(e)=>{
    setView({...view,[e.target.name]:e.target.value});
   }

   let handleUpdate=()=>{
    console.log(view);
    axios.put(`http://localhost:3001/user/${view.id}`,view).then((res)=>{
        console.log(res.data,"viewww");
        setData(data.map((val,ind)=>{
            if(val.id===res.data.id){
                return(
                    res.data
                )
            }
            else{
                return (
                    val
                )
            }
        }))
    })
   }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <input type="text" name='name' ref={name} />
            <input type="number" name='age' ref={age} />
            <button onClick={handleSubmit}>Add</button><br />


            {/* update data */}
        <label htmlFor=""><b>Update data:</b></label><br/>
        <input type="text" name='name' value={view.name} onChange={handleView}/>
        <input type="number" name='age' value={view.age} onChange={handleView}/>
        <button onClick={handleUpdate}>Update</button>
        <button>cancel</button>

            <div className="row">
                {data.map((val, ind) => {
                    return (
                        <div class="card mt-5" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title">{val.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button  class="card-link btn btn-danger" onClick={()=>{deleteData(val.id)}}>
                                    Delete
                                </button>
                                <button class="card-link btn btn-success" onClick={()=>viewData(ind)} >
                                    update
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}

export default Api

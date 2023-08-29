import React,{Fragment,useState} from "react";

const InputTodo = ()=>{

   const[description,setDescripion] = useState("");
  
    const onSubmit =async e =>{
        e.preventDefault()
    try {
    const body = {description}
    const response = await fetch("http://localhost:5000/todo",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)
    })
    window.location="/";
    } catch (error) {
    console.log(error.message);
    }
    }

    return(
        <Fragment>
        <h1 className="text-center mt-5">PERN TO DO LIST</h1>
        <form className="d-flex mt-5" onSubmit={onSubmit}>
            <input type="text" className="form-control" value={description} onChange={e => setDescripion(e.target.value)}/>
            <button className="btn btn-success mx-3">Add</button>
        </form>
        </Fragment>
    )
}

export default InputTodo;

import './App.css';
import React,{useEffect,useState} from 'react'
import axios from 'axios'



function App() {
  let [name, setName] = useState('');
  let [department, setDepartment] = useState('');
  let [email, setEmail] = useState('');
  let [mobile, setMobile] = useState('');
  let [address, setAddress] = useState('');

  let thisdat = []
  // let [addStudent,setStudent] = useState(false)
  const [data,setData] = useState()
  useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setData(response)
        response.data.forEach((i)=>{
          thisdat.push(i)
        })
      
		})
	}, [])
  
  async function postName(e) {
    e.preventDefault()
    return new Promise((resolve,reject)=>{
     resolve( axios.post("http://localhost:4000/post_name", {
				name,department,email,mobile,address
			}))
    })
			
	}

  // console.log(data)
  // data.forEach((i)=>console.log(i.Name))
  return (
    <div className="App">

      <br></br>

<br></br>
<form onSubmit={postName}>
    <input
        name="name"
        onChange={(e)=>{
          setName(e.target.value)
          console.log(e.target.value)
        }}
        value={name} className = 'input-tag' placeholder = 'Enter your name '/> 
    <br></br> 
    <input 
        name="department"
        onChange={(e)=>{
          setDepartment(e.target.value)
        }}
        value={department} className = 'input-tag' placeholder = 'Enter your Department '/>  
    <br></br> 
    <input
        name="email"
        onChange={(e)=>{
        setEmail(e.target.value)
        }}
        value={email} className = 'input-tag' placeholder = 'Enter your email'/>  
    <br></br> 
    <input
        name="mobile"
        onChange={(e)=>{
          setMobile(e.target.value)
        }}
        value={mobile} className = 'input-tag' placeholder = 'Enter your mobile '/>
    
    <br></br> 
    <input 
        name="address"
        
        onChange={(e)=>{
          setAddress(e.target.value)
        
          console.log(address)
        }}
        value={address} className = 'input-tag' placeholder = 'Enter your address '/>  
    <br></br> 
    <button type = 'submit'>Add student</button>
    </form>
    
  


  <h1>{thisdat}</h1>
  <table>
    <tr>
      
      
      <th>Name</th>
      <th>Department</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Address</th>
    </tr>
    
      {/* {data.forEach((item)=>{
        return <tr>
          <td>{item.Name}</td>
          <td>{item.Department}</td>
          <td>{item.Email}</td>
          <td>{item.Mobile}</td>
          <td>{item.Address}</td>
          </tr>
      })} */}
    
  </table>
    </div>
    
  );
}















export default App
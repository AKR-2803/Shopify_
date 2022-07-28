import React, {useState} from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"
// import LoginForm from "./LoginForm"


  const Header = ({ CartItem }) => {
    
    // const adminUser = {
    //   email: "admin@admin.com",
    //   password: "admin123"
    // }
    
    // const [user, setUser] = useState[{ name: "", email: "" }];
    // const [error, setError] = useState("");
    
    // const Login = details => {
    //   console.log(details);
      
    //   if(details.email == adminUser.email && details.password == adminUser.password ){
    //     console.log("Logged In");
    //     setUser({
    //       name: details.name,
    //       email: details.email
    //     })
    //   }
    //   else{
    //     console.log("Details do not match");
    //     setError("Details do not match");
    //   }
    // }
    
    // const Logout = () => {
    //   setUser({
    //     name: "",
    //     email: ""
    //   });

    // }
    
    
    return (
      <>
      {/* <div className="App">

        {(user.email != "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error}/>
          )}

      </div> */}
      <Head />
      <Search CartItem={CartItem} />
      {/* <LoginForm Login={Login} error={error}/> */}
      <Navbar />
    </>
  )
}


export default Header

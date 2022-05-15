import '../App.css';
import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import Typed from 'react-typed';
import Particles from 'react-particles-js';




function Login() {
        const history = useHistory();
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');


            const loginUser = async (e) => {
                e.preventDefault();

                const res = await fetch(`http://localhost:5000/api/login`, {
                    method:"POST",
                    headers:{
                        "Content-Type" : "application/json",
                        "Accept":"application/json"
                    },

                    body:JSON.stringify({
                        email,
                        password
                    })
                });
                
                const data = await res.json();            
                console.log(data);
                if(res.status === 401 || !data){
                     window.alert("Invalid creadentials...");
                     window.alert(data.msg)

                }else if(res.status === 200)
                {   
                    // window.alert("login successfull...");
                    window.alert(data.msg)
                    localStorage.setItem("token", JSON.stringify(data.token));
                    history.push("/dashboard");
                }
            }
        
    return (
        <div className="main-container">
      <Particles
                params={{
                    Particles:{
                        Number:{
                            value:300,
                            density:{
                                enable:true,
                                value_area:900
                            }
                        },
                        shape:{
                          type: "star",
                          stroke: {
                            width: 3,
                            color: "black"
                          }
                        },
                    line_linked: {
            				  shadow: {
            					    enable: true,
            					    color: "#3CA9D1",
            					    blur: 5
            				}
            			}
                    }
                }}
            /> 
            <section className="container-first">                   
            </section>

            <section className="container-fluid">    

            <span className="logo"> 
                <Typed
                        className="typed-text"
                        strings={["BUINESS ARENA", "WEB DESIGN", "WEB DEVELOPMENT", "FULTTER APPS"]}
                        typeSpeed={40}
                        backSpeed={60}
                        
                        loop

                />
            
            </span>
            <span className="logo-text">Enlightining Life</span>
            <span className="logo-text-1">Enlightining of India</span> 
                
                
                <form  method="post">
                
                <div className="container-name">
                <input type="email" placeholder="Enter Username"  value={email} onChange={(e)=>setEmail(e.target.value)} name="gmail" required  />

                <input type="password" placeholder="Enter Password"value={password} onChange={(e)=>setPassword(e.target.value)}  name="password" required />
                
                {/* <Link to="/" className="forgot" >forgot Password?</Link> */}

                <button type="submit" onClick={loginUser} >Login</button>
                </div>
                </form>


                <p id="headset"><FontAwesomeIcon icon={faHeadset} color="rgb(0, 132, 255);" size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;Support</p>
                <p id="mailId">businessArena@mail.com</p>
                <p id="Number">+91999245778</p>
                <Link id="maillower" to="/">BusinessArena@mail.com</Link>
            </section>
            

          
        </div>
    )
    }


export default Login
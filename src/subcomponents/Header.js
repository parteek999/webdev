import React from 'react'

function Header() {
    return (
        <div>
             <header>
            <div className="container">
               <nav className="navbar navbar-expand-md navbar-dark p-0">

                  <a className="navbar-brand" href="index.html">
                     <img className="logo" src='./img/logo.png' alt="img" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="nav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link " href="/Datacentre">Our Work</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/Howwedoit">How we do it</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/Wquotes">Services</a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
        </div>
    )
}

export default Header

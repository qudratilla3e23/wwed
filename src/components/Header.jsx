import React from 'react'
import "./header.css"
function Header() {
  return (
    <div>
      <header className='container'>
       <h1>NFTHub</h1>
       <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Choose</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Roadmap</a></li>
          <li><a href="#">Blog</a></li><br />
       <div className="icon">
       <a href="d"><i class="fa-brands fa-twitter"></i></a>
       <a href="d"><i class="fa-brands fa-discord"></i></a>
       <a href="d"><i class="fa-brands fa-instagram"></i></a>
       <a href="d"><i class="fa-solid fa-wallet"></i></a>
       </div>
        </ul>
       </nav>
      </header>
    </div>
  )
}

export default Header

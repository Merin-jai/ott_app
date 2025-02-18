import React from 'react';
import Logo from '../assests/images/Logo.png';
import '../styles/header.css';

const header = () => {
  return (
    <div class="h-container">
      <div class="h-left">
        <img src = { Logo }/>
        <button>Demo</button>
      </div>
    </div>
  )
}

export default header
import React from 'react';
import './footer.css'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className='footer'>
        The Dreamer - Copyright &copy; {year}
    </footer>

  )
}

export default Footer
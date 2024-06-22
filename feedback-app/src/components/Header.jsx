import React from 'react'
import PropTypes from 'prop-types'


function Header({ text, bgColor, textColor }) {
  
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }  

  return (
    <header style={headerStyles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.prototypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header

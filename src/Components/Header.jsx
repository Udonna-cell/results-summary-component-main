import React from 'react'
import "./Header.css"

class Header extends React.Component {
  render(){
    return (
        <header className="header-container">
          <h3>your result</h3>
          <section>
            <h1>76</h1>
            <p>of 100</p>
          </section>
          <h2>great</h2>
          <p>you scored higher than 65% of the poeple who have taken these tests.</p>
        </header>
      )
  }
}

export default Header
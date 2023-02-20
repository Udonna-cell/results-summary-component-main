import React from 'react'
import './Main.css'

class Main extends React.Component {
  render(){
    return(<main>
      <h2>summary</h2>
      {this.props.data.map((item,index,arr) => (<section className={item.category}>
        <div>
          <img src={item.icon} alt={item.category}/>
          <h3 className={item.category}>{item.category}</h3>
        </div>
        <div>
          <p><span>{item.score}</span> / 100</p>
        </div>
      </section>))}
      <button>continue</button>
    </main>)
  }
}

export default Main
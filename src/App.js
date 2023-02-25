import React, { Component } from 'react'
import "./App.css";
export default class App extends Component {
  state= {
   fullname: ' welecome bio !',
   bio: 'Several studies have demonstrated the benefits of nature on well-being.Nothing better than a breath of fresh air to recharge your batteries, cheer up and start off on the right foot. We have unearthed 20 inspiring quotes about Mother Nature.A single ray of sunshine is enough to dispel millions of shadows' ,
  url: 'https://www.wallpapers13.com/wp-content/uploads/2016/02/Natural-Nature-4K-Wallpaper-840x525.jpg',
  profession: ' biologie végétale',
  show:true, 
  count:0,
  }
  handle=()=>this.setState({show:!this.state.show})
  handleIncrement = () => this.setState({ count: this.state.count + 1 });
  componentDidMount(){
    // setInterval(this.handleIncrement, 1000)
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
 
  
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  
  render() {

    return (
      <div>
        <button>{this.state.count}</button>
        <button onClick={this.handle}>show</button>
        {this.state.show?(
       <div className='test'><h2>{this.state.fullname}</h2>
        <p>{this.state.bio}</p>
       
        <img src={this.state.url} alt='ddusij' style={{width:'550px', height:'350px'}}/>
        <p>{this.state.profession}</p></div> ):null
        }
      </div>
    )
  }
}


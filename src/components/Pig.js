import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {

  // state ={ 
  //   panicked: false
  // }

  panic = () => (<img className="exclamation" src={exclamation} alt="" />)
  
  // <img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />
  

  // relax = () => {
  //   this.setState({
  //     panicked: false
  //   }, ()=>console.log(this.state.panicked))
  // }


  // exclaim = () => {
  //   this.setState({
  //     panicked: true
  //   })
  //   if (this.state.panicked) return
 
  //   setTimeout(this.relax, 2000)
  // }


  render() {
    console.log("pig.js",this.props.environment)
    return(
      <div id={this.props.name} className="sheeple">

        {(this.props.environment === 'inhospitable') ? this.panic() : null}
    {/*(this.state.panicked)? this.panic() : null*/}
      </div>
    )
  }
}

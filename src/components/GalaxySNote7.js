import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: (this.props.environment === "inhospitable")
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
     this.props.alterEnvironment('inhospitable')
  }

  relax = () => {
    this.setState({
      panicked: false
    }, ()=>console.log(this.state.panicked))
  }


  exclaim = () => {

    if (this.state.panicked) return
    this.setState({
      panicked: true
    })
    this.exclaimAudio.play()
    this.squeelAudio.play()
    setTimeout(this.relax, 2000)
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    // const sheeple = this.props.generateSheeple()
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {/* {sheeple} */}
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}

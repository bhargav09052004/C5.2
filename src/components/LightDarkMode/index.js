import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  render() {
    const {isDarkMode} = this.state
    return (
      <div>
        <h1> Click To change Mode </h1>
        {isDarkMode?<button type="button">Dark Mode</button>:
        <button type="button">Light Mode</button>}
      </div>
    )
  }
}
export default LightDarkMode

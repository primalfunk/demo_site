import React  from 'react'
import { Divider } from 'semantic-ui-react'
import Display from './Display'
import Navbar from './Navbar'

class App extends React.Component {

  render() {
    return (
      <div style={styles.background}>
        <Navbar />
        <Divider hidden />
        <Display />
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "black",
    minHeight: "200vh"
  }
}

export default App

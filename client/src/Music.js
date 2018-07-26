import React, { Fragment } from 'react'
import { Divider, Dropdown, Grid, Header, Segment } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player'
import song1 from './sonata2-4.mp3'
import song2 from './sonata3-1.mp3'
import song3 from './sonata4-3.mp3'
import styled from '../node_modules/styled-components'

class Music extends React.Component {
  state = { song: {} }

  componentDidMount() {
    this.createVisualization()
  }

  handleChange = (e, data) => {
    this.setState({ song: data.value })
  }

  createVisualization() {
    let context = new AudioContext()
    let analyser = context.createAnalyser()
    let canvas = this.refs.analyzerCanvas
    let ctx = canvas.getContext('2d')
    let audio = this.refs.audio
    audio.crossOrigin = "anonymous"
    let audioSrc = context.createMediaElementSource(audio)
    audioSrc.connect(analyser)
    audioSrc.connect(context.destination)
    analyser.connect(context.destination)

    function renderFrame() {
      let freqData = new Uint8Array(analyser.frequencyBinCount)
      requestAnimationFrame(renderFrame)
      analyser.getByteFrequencyData(freqData)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      console.log(freqData)
      ctx.fillStyle = '#3a414c';
      let bars = 100;
      for (var i = 0; i < bars; i++) {
        let bar_x = i * 3;
        let bar_width = 2;
        let bar_height = -(freqData[i] / 2);
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
      }
    }
    renderFrame()
  }

  render() {
    let { song } = this.state
    song = song.toString()
    return (
      <Fragment>
        <div>
          <Segment style={{"backgroundColor": "#858e9b"}}>
            <Header>I've dropped a few of my piano compositions here (selection below will autoplay):</Header>
            <Divider hidden />
            <Dropdown style={{"width": "20vw"}}placeholder="Select a song:" fluid selection options={ options } onChange={ this.handleChange } />
            <Divider hidden/>
          </Segment>
          <div style={{ "display": "flex", "justifyContent": "space-around", "alignItems": "center" }}>
            <audio ref="audio" autoPlay={true} controls={true} src={song}></audio>
            <canvas style={{"border": "1px dotted white", "padding": "20px", "height": "20vh", "width": "50vh" }}ref="analyzerCanvas" id="analyzer"></canvas>
          </div>
        </div>
      </Fragment>
    )
  }
}

const options = [
  {
    text: '"Rondo" from Piano Sonata No. 2',
    value: song1
  },
  { 
    text: '"Cantabile" from Piano Sonata No. 3',
    value: song2
  },
  { 
    text: '"Scherzo" from Piano Sonata No. 4',
    value: song3
  }
]



export default Music

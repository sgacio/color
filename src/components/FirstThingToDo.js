import React, { Component } from 'react'

class FirstThingToDo extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
    lightness: Math.ceil(Math.random() * 100),
    alpha: Math.random().toFixed(1)
  }

  changeHue = (event, hue, saturation, lightness, alpha) => {
    this.setState({
      hue: event.target.value
      // saturation: event.target.value,
      // lightness: event.target.value,
      // alpha: event.target.value
    })
  }

  changeSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }

  changeLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  changeAlpha = event => {
    this.setState({
      alpha: event.target.value
    })
  }

  randomizeColor = event => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: Math.random().toFixed(1)
    })
  }

  render() {
    return (
      <main
        className="whole-screen"
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <h1>ARE YOU READY FOR SOME COLOR! ITS A SUNDAY NIGHT PARTY!</h1>
        <div>
          <section>
            <p>HUE</p>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.changeHue}
            />
            <p>{this.state.hue}</p>
          </section>
          <section>
            <p>SATURATION</p>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.changeSaturation}
            />
            <p>{this.state.saturation}</p>
          </section>
          <section>
            <p>LIGHTNESS</p>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.changeLightness}
            />
            <p>{this.state.lightness}</p>
          </section>
          <section>
            <p>ALPHA</p>
            <input
              type="range"
              min="0"
              max="1"
              value={this.state.alpha}
              step={0.1}
              onChange={this.changeAlpha}
            />
            <p>{this.state.alpha}</p>
          </section>
          <button onClick={this.randomizeColor}>Randomize the Color</button>
        </div>
      </main>
    )
  }
}

export default FirstThingToDo

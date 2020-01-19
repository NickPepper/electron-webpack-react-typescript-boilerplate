import * as React from 'react'
import CSS        from 'csstype'
import { remote } from 'electron'


export interface HelloProps {
  compiler: string;
  framework: string;
}

const greeting: CSS.Properties = {
  textAlign: 'center',
  color: 'lime',
  fontFamily: 'sans-serif'
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1 style={greeting}>ПреведЪ из Electron, {this.props.compiler} и {this.props.framework}!</h1>
        <button onClick={this.handleOpenWindowClick}>Нажми меня</button>
      </div>
    )
  }

  handleOpenWindowClick() {
    const window = new remote.BrowserWindow({ width: 300, height: 200, show: false })
    window.loadFile('/Users/nikolaipershin/work/electron-webpack-react-typescript-boilerplate/src/static/popup.html')
    window.show()
  }
}

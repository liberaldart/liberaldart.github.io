import React from 'react'
import AppBar from 'material-ui/AppBar';

export default class Home extends React.Component {
  
  render() {
    return (
      <div className="home-component">
        <div className="header-bar">
          <AppBar
            title="GuruJee"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
        <div className="body">
          <div className='background-text'>
            <p><a>"I"</a> am working on <a>"Something specific"</a> and I need a <a>"dynamic team"</a> to <a>"help me"</a></p>
          </div>
        </div>
      </div>
    )
  }
}

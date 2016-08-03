import React, { Component } from 'react';
import { Footer} from 'react-materialize';

export default class Foot extends Component {
  render() {
    return (
      <div>
        <Footer 
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/nickbarry">Nico Barry</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/Rebero">Rene Eber</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/sthunter">Sean Hunter</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/jwfong">Joshua Fong</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/Bpatalano">Ben Patalano</a></li>
            </ul>
          }
          className="indigo darken-1"
        >
            <h5 className="white-text">Nailed-It</h5>
            <p className="grey-text text-lighten-4">MKS Thesis Project. Please check out our GitHub links to the right!</p>
        </Footer>
      </div>
    )
  }
}
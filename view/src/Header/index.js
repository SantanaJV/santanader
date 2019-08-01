import React from 'react';
import './styles.css';
import logo from '../assets/favicon.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className="nav">
				<div className="nav-content">
					<div className="nav-item"> 
						<img className="nav-image" src={logo}/>
						<div className="nav-title">
							<h4>
								Santanader
							</h4>
						</div>
					</div>
					<div className="flex ml-auto">
						<a className="nav-link" href="/">Teste</a>
					</div>
				</div>
			</div>
    )
  }
}
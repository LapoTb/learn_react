import React from 'react';
import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListIitem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false
		}
	}

	onIncrease = () => {
		this.setState (({increase}) => ({increase : !increase}));
	};

	render() {
		const {name, salary} = this.props;
		const {increase} = this.state;

		const classList = "list-group-item d-flex justify-content-between" + (increase ? ' increase' : '');
	
		return (
			<li className={classList}>
				<span className="list-group-item-label">{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary+'$'}></input>			
				<div className="d-flex justify-content-centr align-items-center">
					<button type="button" 
						className="btn-cookie btn-sm"
						onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>
					
					<button type="button" className="btn-trash btn-sm">
						<i className="fas fa-trash"></i>
					</button>
	
					<i className="fas fa-star"></i>
				</div>
			</li>
		)	
	}
} 	


export default EmployeesListIitem;
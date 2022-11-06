import EmployeesListItem from '../employees-list-item/employees-list-item.js'; 
import './employees-list.css';

const EmployeesList = ({emplData}) => {

	const elements = emplData.map(item => {
		const {id, ...itemProps} = item;
		return (
			//<EmployeesListItem name = {item.name} salary = {item.salary}/>
			<EmployeesListItem key ={id} {...itemProps}/>
		);
	}); 

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;
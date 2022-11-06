import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

function App() {

	const emplData = [
		{name: 'A', salary : 200, id : 1},
		{name: 'B', salary : 700, id : 2, increase: true},
		{name: 'C', salary : 900, id : 3},
		{name: 'D', salary : 555, id : 4, increase: true}
	];

	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
				<EmployeesList emplData = {emplData}/>	
				<EmployeesAddForm/>
			</div>
		</div>
	);
};

export default App;
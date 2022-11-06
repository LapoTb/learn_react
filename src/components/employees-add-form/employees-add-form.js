import './employees-add-form.css';

const EmployeesAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form className="add-form d-flex">
				<input type='text' className="form-control ne-post-label" placeholder="Имя" />
				<input type='number' className="form-control ne-post-label" placeholder="ЗП" />
				<button type='submit' className="btn btn-outline-light">
					Добавить
				</button>
			</form>

		</div>
	) 
}

export default EmployeesAddForm;
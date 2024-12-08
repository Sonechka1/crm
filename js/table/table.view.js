const tableViewElements={
    tbody: document.querySelector('#tbody'),
	badgeStatus: document.querySelector('.badge-pill'),
	btnEdit: document.querySelectorAll('[data-id]'),
	productSelect: document.querySelector('#productSelect'),
	formselect: document.querySelector('#formselect'),
	topStatusBar: document.querySelector('#topStatusBar'),
	leftStatusBar: document.querySelector('#leftStatusBar'),
	btnVal: document.querySelectorAll('.btn'),
	leftStstus:document.querySelectorAll('[data-role="left-status"]'),
	badgeNew : document.querySelector('#badge-new'),
}

function getproductSelect(){
	return  tableViewElements.productSelect.value;
}
getproductSelect();

function classToggle(classElement){
	tableViewElements.leftStstus.forEach(function(el){
		el.classList.remove('active')
	 });
	 classElement.classList.add('active')
	
}



function renderTables(element){
	const coursList = new Map();
    coursList.set('course-html', 'Курс по верстке')
    coursList.set('course-js', 'Курс по JavaScript')
    coursList.set('course-vue', 'Курс по VUE JS')
    coursList.set('course-php', 'Курс по PHP')
    coursList.set('course-wordpress', 'Курс по WordPress');

	const statuses = new Map();
    statuses.set('new', 'Новая')
    statuses.set('inwork', 'В работе')
    statuses.set('complete', 'Завершена')

	const badge = new Map();
    badge.set('new', 'badge-danger')
    badge.set('inwork', 'badge-warning')
    badge.set('complete', 'badge-success')
    
   const th = `	<tr>
							<th scope="row">${element.id}</th>
							<td>${element.data}</td>
							<td>${coursList.get(element.cours)}</td>
							<td>${element.fio}</td>
							<td>${element.email}</td>
							<td>${element.phone}</td>
							<td>
								<div class="badge badge-pill ${badge.get(element.status)}">${statuses.get(element.status)}</div>
							</td>
							<td>
								<a href="edit.html?id=${element.id}">Редактировать</a>
							</td>
						</tr>`

tableViewElements.tbody.insertAdjacentHTML("beforeend", th)
}

function renderBadge(badge){

	return tableViewElements.badgeNew.innerHTML = badge
}

renderBadge()

export{renderTables,getproductSelect,tableViewElements, classToggle,renderBadge}
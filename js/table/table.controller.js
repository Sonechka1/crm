import* as tableView from './table.view.js';
import* as model from './../model.js';

const request = model.getRequest();
console.log(request)
let currentStatusFilter = null;
let currentProductFilter = null;


function init(){
 render(request)
 let badge = model.getNewBage()
 tableView.renderBadge(badge)
}
init()

function render(request){
  return request.forEach(element => {
  tableView.renderTables(element);
});
}
function renderFilterArray(element, arr){
    if(element === 'all'){
        tableView.tableViewElements.tbody.innerHTML = '';
        render(request)
    }else{
        tableView.tableViewElements.tbody.innerHTML = '';
        render(arr)
    }  
}
function renderFilteredResults(arr) {
    tableView.tableViewElements.tbody.innerHTML = ''; // Очистка таблицы
    render(arr); // Рендер массива
}


tableView.tableViewElements.formselect.addEventListener('change' , function(e){
    e.preventDefault()
    let select = tableView.getproductSelect();
    currentProductFilter = select;
    const filterSelectArr =  model.getFilterSelect(select);
    //  renderFilterArray(select,filterSelectArr);
     generalFilter()
     
})

tableView.tableViewElements.topStatusBar.addEventListener('click' , function(event){
    const element =event.target.dataset.value;
    currentStatusFilter = element
    const FilterStatusRequests = model.getFilterStatus(element);
    // renderFilterArray(element,FilterStatusRequests);
    generalFilter()
})

tableView.tableViewElements.leftStatusBar.addEventListener('click' , function(event){
    const element =event.target.dataset.value;
    currentStatusFilter = element
    const classElement = event.target;
    tableView.classToggle(classElement);
    const FilterStatusRequests = model.getFilterStatus(element);
    // renderFilterArray(element,FilterStatusRequests);
})

function generalFilter(){
    if(currentStatusFilter && currentProductFilter){
      const generalFilterArr = model.generalFilter(currentProductFilter,currentStatusFilter)
      console.log(generalFilterArr)
      tableView.tableViewElements.tbody.innerHTML = '';
      renderFilterArray(currentStatusFilter,generalFilterArr)
    }else if (currentStatusFilter ) {
        // Если активен только фильтр статуса
        const FilterStatusRequests = model.getFilterStatus(currentStatusFilter);
        renderFilterArray(currentStatusFilter,FilterStatusRequests);
    } else if (currentProductFilter) {
        // Если активен только фильтр продукта
        const filterSelectArr = model.getFilterSelect(currentProductFilter);
        renderFilterArray(currentStatusFilter, filterSelectArr);
    } 
 }
 generalFilter()









// function generalFilter(){
//     const generalFilter = [...selectFilter, ...ststusFilter]
//     console.log(generalFilter)
    
// }
// generalFilter()


// tableView.tableViewElements.formselect.addEventListener('change' , function(e){
//     e.preventDefault()
//     let select = tableView.getproductSelect();
//     const filterSelectArr =  model.getFilterSelect(select);
//     renderFilterArray(select,filterSelectArr);
// })

// tableView.tableViewElements.topStatusBar.addEventListener('click' , function(event){
//     const element =event.target.dataset.value;
//     const FilterStatusRequests = model.getFilterStatus(element);
//     renderFilterArray(element,FilterStatusRequests);
// })
// tableView.tableViewElements.leftStatusBar.addEventListener('click' , function(event){
//     const element =event.target.dataset.value;
//     const classElement = event.target;
//     tableView.classToggle(classElement);
//     const FilterStatusRequests = model.getFilterStatus(element);
//     renderFilterArray(element,FilterStatusRequests);
// })
import * as editView from './edit.view.js';
import * as model from './../model.js';


function init(){
    const id = getRequestId();
    const editElement = model.getDataRequest(id);
    editView.renderEditData(editElement)
    console.log(editElement)
}

function getRequestId(){
   const params = new URLSearchParams(window.location.search);
   const id = params.get("id");
   return id;
}


editView.editElements.form.addEventListener('submit' , function(e){
    e.preventDefault();
    const requestData = editView.getFormData()
    model.updateRequestData(requestData);
    window.location ='./table.html'

})


init()











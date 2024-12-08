const editElements = {
    form: document.querySelector('#form'),
    id: document.querySelector('#id'),
    number: document.querySelector('#number'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    phone: document.querySelector('#phone'),
    status: document.querySelector('#status'),
}

//Подставляем данные в форму
function renderEditData(request){
    editElements.number.innerText = request.id;
    editElements.id.value = request.id;
    editElements.date.innerText = request.data;
    editElements.product.value = request.cours;
    editElements.name.value = request.fio;
    editElements.phone.value = request.phone;
    editElements.email.value = request.email;
    editElements.status.value = request.status;
}

//Получение данных из формы редактирования
function getFormData(){
    const formData = {
        id: editElements.id.value,
        data:  editElements.date.value,
        product:  editElements.product.value ,
        name:  editElements.name.value,
        phone:  editElements.phone.value,
        email:  editElements.email.value,
        status: editElements.status.value

    }
    return formData;

}

export{editElements, renderEditData, getFormData}
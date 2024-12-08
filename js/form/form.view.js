const viewElements = {
    form: document.querySelector('#form'),
    inputName: document.querySelector('#name'),
    inputPhone:document.querySelector('#phone'),
    inputEmail:document.querySelector('#email'),
    products: document.querySelector('#product')
}

//получаем данные со страницы
function getFormData(){
    const formData ={
        fio: viewElements.inputName.value,
        phone: viewElements.inputPhone.value,
        email: viewElements.inputEmail.value,
        cours: viewElements.products.value,
    }
    return formData
    
};
//подставление рандомных данных в форму
function renderTestData(randomData){
    viewElements.inputName.value = randomData.fio.trim();
    viewElements.inputPhone.value = randomData.phone.trim();
    viewElements.inputEmail.value = randomData.email.trim();
    viewElements.products.value = randomData.cours.trim();
}

function clearForm () {
    viewElements.form.reset()
}


export{viewElements,
       getFormData,
       renderTestData,
       clearForm}
import * as viewform from './form.view.js';
import * as model from './../model.js';
insetTestData();
viewform.viewElements.form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('click');
    //получаем объект с данными заявки
    const requestData = viewform.getFormData();
    //создаем заявку с данными из формы
    const request = model.createRequest(requestData);
    viewform.clearForm()
    insetTestData();
   
    
})


//получение рандомных даннных из модели и вызов функции чтобы эти данные подставились
function insetTestData(){
    const testData = model.getTestData();
    viewform.renderTestData(testData);
}


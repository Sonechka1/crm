const dataRequest =  getToLocalStorage();

//создаем заявку и добавляем в массив
function createRequest(requestData){

    let id = 0;
    if(dataRequest.length >0){
        let lastElement = dataRequest[dataRequest.length-1];
        let lastId = lastElement.id;
        id = lastId + 1;
    }
    let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    let data = new Intl.DateTimeFormat('ru-RU', options).format(new Date());
    let status = 'new';
    
    const request = { 
        id: id,
        data: data,
        fio: requestData.fio,
        phone: requestData.phone,
        email: requestData.email,
        cours: requestData.cours,
        status: status
    }
    dataRequest.push(request);
    saveToLocalStorage();
  
}
console.log( dataRequest)

function getTestData(){
    const testData=[
        {fio:'Шеповалова Марианна Константиновна',phone: '+7 (905) 506-63-65', email: 'marianna05071960@yandex.ru',cours: 'course-html'},
        {fio:'Большакова Ася Дмитриевна ',phone: ' +7 (982) 529-65-79', email: 'asya.bolshakova@outlook.com  ',cours: 'course-js'},
        {fio:'Брынскиха Вера Петровна ',phone: ' +7 (911) 208-59-65', email: ' vera6776@yandex.ru ',cours: 'course-vue'},
        {fio:' Мещеряков Виталий Всеволодович',phone: '+7 (908) 186-54-10 ', email: 'vitaliy17021988@rambler.ru  ',cours: 'course-php'},
        {fio:'Ханыкова Анжела Серафимовна ',phone: '+7 (962) 300-52-58 ', email: ' anjela1986@ya.ru ',cours: 'course-wordpres'},
    ]
    function getRandomInt (max) {
        return Math.floor(Math.random() * max);
    }
    const randomIndex = getRandomInt(testData.length);
    const randomData = testData[randomIndex];
    return randomData
}

//сохранинеи в localStorage
function saveToLocalStorage(){
    localStorage.setItem("request", JSON.stringify(dataRequest));
}

// function getToLocalStorage(){
//  return localStorage.getItem("request")? JSON.parse(localStorage.getItem("request")):[];
// }
function getToLocalStorage(){
    if(localStorage.getItem("request")){
        return JSON.parse(localStorage.getItem("request"))
        
    }else{
        return []
    } 
}

function getRequest(){
   return dataRequest
} 

function getDataRequest(id){
    
    const Element = dataRequest[id]
    return Element
}

function updateRequestData(data){
    const request = dataRequest.find(item => item.id == data.id);
    request.fio = data.name;
    request.email = data.email;
    request.phone = data.phone;
    request.status = data.status;
    request.cours = data.product;

    saveToLocalStorage();
}

function getFilterSelect(select){
    const selectRequests = [];
    dataRequest.filter(function(item){
        if(item.cours === select){
            selectRequests.push(item);
            
        }
    })
    return selectRequests
}

function getFilterStatus(status){
    const statusRequests = [];
    dataRequest.filter(function(item){
        if(item.status === status){
            statusRequests.push(item);
        }
    })
    return statusRequests
}

function getNewBage(){
    const newStatus = [];
    dataRequest.filter(function(item){
        if(item.status === 'new'){
            newStatus.push(item);    
        }
    })
    let badge = newStatus.length;
    return badge
}

function generalFilter(select, status){
    const generalFilter = [];
    dataRequest.filter(function(item){
        if(item.cours === select && item.status === status){
            generalFilter.push(item);      
        }
    })
    console.log(generalFilter)
    return generalFilter
   
}



export{createRequest,dataRequest,getTestData,getRequest,getDataRequest,updateRequestData,getFilterSelect,getFilterStatus,getNewBage, generalFilter
}
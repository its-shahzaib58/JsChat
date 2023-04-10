let users = [];

let user1 = {
    id: 1,
    username: 'Shahzaib Ramzan',
    password: '12345678',
    status:'online'
}
let user2 = {
    id: 2,
    username: 'Umar',
    password: '12345678',
    status:'offline'
}
users = [user1,user2]

let frientList = "";


for(user of users)
{
    frientList += `<div class="list-group mb-2">
                    <div class="list-group-item list-group-item-action">
                 <div class=" d-flex flex-row">
                    <img src="./img/user.png" class="align-self-start img-fluid" alt="">
                    <span class="">${user.username}</span>
            
                </div>
            </div>
            </div>`;
}

document.getElementById('friend-list').innerHTML = frientList;


var messageBody = document.querySelector('#scrol-bottom');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
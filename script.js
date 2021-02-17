let signupname     = document.getElementById('upname');
let signupemail    = document.getElementById('upemail');
let signuppassword = document.getElementById('uppassword');
let signinemail    = document.getElementById('inemail');
let signinpassword = document.getElementById('inpassword');
let loga           = document.getElementById('submit');

var arr = []

function emailcheck() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email.toLowerCase() == signupemail.value.toLowerCase()) {
            
            return false
            
        }
    }
}

function signup(){
    if (signupname.value == "" || signupemail.value == "" || signuppassword.value == "") {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
        var user = {
        name: signupname.value,
        email: signupemail.value,
        password: signuppassword.value,
    }
    if (arr.length == 0) {
        arr.push(user)
        localStorage.setItem('users', JSON.stringify(arr))
        document.getElementById('error').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }

    if (emailcheck() == false) {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        arr.push(user)
        localStorage.setItem('users', JSON.stringify(arr))
        document.getElementById('error').innerHTML = '<span class="text-success m-3">Success</span>'

    }
}


loga.addEventListener('click', (e) => {
    arr=JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
    }
    for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
    }
    if ( signinemail.value == "" || signinpassword.value == "") {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }else if(check() == true){
        return true
    }else{
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
    e.preventDefault();

});

function check(){
        arr=JSON.parse(localStorage.getItem('users'));

        for (var i = 0; i < arr.length; i++) {
        if (arr[i].email.toLowerCase() == signinemail.value.toLowerCase() && arr[i].password.toLowerCase() == signinpassword.value.toLowerCase()) {
        let x = arr[i]
        arr.pop(i)
        arr.push(x)
        localStorage.setItem('users', JSON.stringify(arr))
        return true
    }else if(i==arr.length){
        return false
    }
    }

}


function hhhh(){
    arr=JSON.parse(localStorage.getItem('users'));
        var z=0
    for (var i = 0; i < arr.length; i++) {
    z++}
    document.getElementById('h').innerHTML = "Welcome " + arr[z-1].name
    
}
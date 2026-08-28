function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    if(email==="admin@1234" && password==="1234"){
        //redirect to index.html
        window.location.href="index.html";
    }
    else{
        error.innerText="Invaild credentials";
    }

}

function togglePassword() {
    let passwordIp = document.getElementById('password');
    if(passwordIp.type =='password') {
        password.type ='text';
    } else {
        password.type ='password';
    }
}
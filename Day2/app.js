const login = () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('Pass').value;
    const msg = document.getElementById('message');
    
    if(user == "admin" && pass == "Pass"){
        msg.textContent = "Login Sucessful!";
        msg.style.color = "green";

        //window.location.href="app.html";

        setTimeout(() => {
        window.location.href = "app.html";}, 500);
    }else{
        msg.textContent = "Login Failed!";
        msg.style.color = "red";

    }
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if(username === "admin" && password === "12345"){
                alert("ورود موفق!");
                window.location.href = "index.html";
            } else {
                document.getElementById("error").innerText = "نام کاربری یا رمز عبور اشتباه است!";
            }
        });
    }
});
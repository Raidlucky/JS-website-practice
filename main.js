var logged_in = false

function login() {
    const input_val1 = document.getElementById('username').value;
    const input_val2 = document.getElementById('password').value;
    const usernames = ["Lucky", "Jack", "Alex"];
    const passwords = ["Password", "login", "NigerianMan"];
    console.log("logged in: ", logged_in);
for (const x of usernames) {
    if (input_val1 == x) {
    console.log("username: ", x);
    for (const y of passwords) {
        if (input_val2 == y) {
        console.log("password: ", y);
            if (usernames.indexOf(x) == passwords.indexOf(y)) {
        document.getElementById("login").innerHTML = "Logged in";
        logged_in = true;
        document.getElementById("nav-name").innerHTML = x;
                    } else {
                        document.getElementById("login").innerHTML = "Your password/username is incorrect";
                    }
                }
            }
        }
    }
}

function submit() {
    console.log("Submitted");
    const ans1 = document.getElementById("ans1");
    const ans4 = document.getElementById("ans4");
    console.log("Question 1:", ans1.checked);
    console.log("Question 2:", ans4.checked);
    if (ans1.checked == true && ans4.checked == true) {
        document.getElementById("msg").innerHTML = "Congrats that is correct";
    } else {
        document.getElementById("msg").innerHTML = "Sorry that is incorrect";
    }
}
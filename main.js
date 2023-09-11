var logged_in = false

function login() {
    const typed_username = document.getElementById('username').value;
    const typed_password = document.getElementById('password').value;
    const usernames = ["Lucky", "Jack", "Alex"];
    const passwords = ["Password", "login", "NigerianMan"];
    console.log("logged in: ", logged_in);
for (const x of usernames) {
    if (typed_username == x) {
    console.log("username: ", x);
    for (const y of passwords) {
        if (typed_password == y) {
        console.log("password: ", y);
            if (usernames.indexOf(x) == passwords.indexOf(y)) {
                document.getElementById("login").innerHTML = "Logged in";
                logged_in = true;
                document.getElementById("nav-name").innerHTML = x;
                    } else {
                        document.getElementById("login").innerHTML = "Your password/username is incorrect";
                    }
                } else {
                    document.getElementById("login").innerHTML = "Your password/username is incorrect";
                }
            }
        } else {
            document.getElementById("login").innerHTML = "Your password/username is incorrect";
        }
    }
    if (logged_in == true) {
        document.getElementById("login").innerHTML = "Logged in";
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
        document.getElementById("msg").style.color = "green"
    } else {
        document.getElementById("msg").innerHTML = "Sorry that is incorrect";
        document.getElementById("msg").style.color = "red"
    }
}

//my solution was to make an empty string and add a number and operator to that string each time it is pressed on the calc
//Then it is put into a template literal to show the expression and its solution

let numbers = "";
function add_num(num) {
numbers = numbers.concat(num);
document.getElementById("calc").innerHTML = numbers;
}

function num_submit() {
    document.getElementById("calc").innerHTML = `${numbers} = ${eval(numbers)}`;
    numbers = "";
}

function Convert() {
let option = parseInt(document.getElementById('Conversion').value);
let input = parseInt(document.getElementById('UserInput').value);

if (option == 0) {
    let output = (input * 1.609344);
    console.log(output);
} else if (option == 1) {
    let output = (input * 2.54);
    console.log(output);
}

}
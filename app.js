import { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "./firebase.js";
// console.log(auth);
// console.log(createUserWithEmailAndPassword);
//console.log(signInWithEmailAndPassword);


const inputPass = document.getElementById("inputPass")
const inputEmail = document.getElementById("inputEmail")
const inputPass1 = document.getElementById("inputPass1")
const inputEmail1 = document.getElementById("inputEmail1")
const create = document.querySelector(".create")
const loogin = document.querySelector(".login")

// console.log(inputPass);
// console.log(inputEmail);


const creating =() =>{
    console.log("hello");
    
    create.style.display = "block";
    loogin.style.display = "none";
}

const signin = () =>{
    create.style.display = "none";
    loogin.style.display = "block";
}

const signup = async () =>{
    try {
        
        const email = inputEmail.value
        const pass = inputPass.value
        const user = await createUserWithEmailAndPassword(auth, email, pass)
        console.log("user", user)
        alert("Account Successfully Created");
        window.location.href="./index.html"
    } catch (error) {
        console.log(error.message);
        alert(error.code);

        
    }
}

const login = async () =>{
    try {
        
        const email = inputEmail1.value
        const pass = inputPass1.value
        const user = await signInWithEmailAndPassword(auth, email, pass)
        console.log("user", user)
        alert("Account Successfully Login");
        window.location.href="./index.html"
    } catch (error) {
        console.log(error.message);
        alert(error.code);
        
    }
}


function show(){
    inputPass1.type = "text"
}
function hide(){
    inputPass1.type = "password"
}

window.hide = hide
window.show = show
window.signup = signup
window.login = login
window.creating = creating
window.signin = signin
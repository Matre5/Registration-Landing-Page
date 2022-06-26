const form = document.getElementById("form");
const Uname = document.getElementById("Uname");
const Lname = document.getElementById("Lname");
const mailll = document.getElementById("mailll");
const passy = document.getElementById("passy");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {
    //get values from inputs
    const UnameValue = Uname.value.trim();
    const LnameValue = Lname.value.trim();
    const mailllValue = mailll.value.trim();
    const passyValue = passy.value.trim();

    if (UnameValue === "") {
        //show error
        //add error class
        setErrorFor(Uname, "First Name cannot be empty");
    } else {
        // add success class
        setSuccessFor(Uname);
    }


    if (LnameValue === "") {
        //show error
        //add error class
        setErrorFor(Lname, "Last Name cannot be empty");
    } else {
        // add success class
        setSuccessFor(Lname);
    }

    if(mailllValue === ""){
        //show error
        //add error class
        setErrorFor(mailll, "Looks like this is not an email");
    } else if (isEmailvalid(mailllValue)) {
        //show error
        //add error class
        setErrorFor(mailll, "Looks like this is not an email");
    } else {
        // add success class
        setSuccessFor(mailll);
    }


    if (passyValue === "") {
        //show error
        //add error class
        setErrorFor(passy, "Password cannot be empty");
    } else {
        // add success class
        setSuccessFor(passy);
    }
}
const setErrorFor = (input, message) => {
    const formc = input.parentElement; //formc div
    const small = formc.querySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    // formc.className = "formc error";
    formc.classList.add("error")
}

const isEmailvalid = (mailll) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mailll);
}
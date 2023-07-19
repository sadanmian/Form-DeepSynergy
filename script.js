let firstNameError = document.getElementById('first-name-error')
let lastNameError = document.getElementById('last-name-error')
let phoneError = document.getElementById('phone-error')
let altPhoneError = document.getElementById('alt-phone-error')
let emailError = document.getElementById('email-error')
let msgError1 = document.getElementById('message-error-1')
let msgError2 = document.getElementById('message-error-2')
let optionError = document.getElementById('option-error');
let submitError = document.getElementById('submit-error')
let checkFirst = document.getElementById('checkFirst')
let checkLast = document.getElementById('checkLast')
let checkPhone = document.getElementById('checkPhone')
let checkAltPhone = document.getElementById('checkAltPhone')
let checkEmail = document.getElementById('checkEmail')
let checkMsg1 = document.getElementById('checkMsg1')
let checkMsg2 = document.getElementById('checkMsg2')
let checkOption = document.getElementById('checkOption')

const validateFirstName = () => {
    let firstname = document.getElementById('first-name').value
    if (firstname.length == 0) {
        firstNameError.innerHTML = 'First name is required'
        checkFirst.innerHTML = '*'
        return false;
    }
    if (!firstname.match(/^[A-Za-z]*$/)) {
        firstNameError.innerHTML = 'Enter Valid Name'
        check.innerHTML = '*'
        return false;
    }
    firstNameError.innerHTML = ''
    checkFirst.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true

}
const validateLastName = () => {
    let lastname = document.getElementById('last-name').value
    if (lastname.length == 0) {
        lastNameError.innerHTML = 'Last name is required'
        checkLast.innerHTML = '*'
        return false;
    }
    if (!lastname.match(/^[A-Za-z]*$/)) {
        lastNameError.innerHTML = 'Enter Valid Name'
        checkLast.innerHTML = '*'
        return false;
    }
    lastNameError.innerHTML = ''
    checkLast.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true
}

const validatePhone = () => {
    let phone = document.getElementById('phone').value
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone Number is required'
        checkPhone.innerHTML = '*'
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'Phone Number should be 10 digit'
        checkPhone.innerHTML = '*'
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please.'
        checkPhone.innerHTML = '*'
        return false;
    }
    phoneError.innerHTML = ''
    checkPhone.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true
}
const validateAltPhone = () => {
    let altphone = document.getElementById('alt-phone').value
    if (altphone.length == 0) {
        altPhoneError.innerHTML = 'Alternate Phone Number is required'
        checkAltPhone.innerHTML = '*'
        return false;
    }
    if (altphone.length != 10) {
        altPhoneError.innerHTML = 'Alternate Phone Number should be 10 digit'
        checkAltPhone.innerHTML = '*'
        return false;
    }
    if (!altphone.match(/^[0-9]{10}$/)) {
        altPhoneError.innerHTML = 'Only digits please.'
        checkAltPhone.innerHTML = '*'
        return false;
    }
    altPhoneError.innerHTML = ''
    checkAltPhone.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true
}
const validateEmail = () => {
    let email = document.getElementById('email').value
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        checkEmail.innerHTML = '*'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid'
        checkEmail.innerHTML = '*'
        return false;
    }
    emailError.innerHTML = ''
    checkEmail.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true
}

const validateMsg1 = () => {
    let msg1 = document.getElementById('msg1').value
    if (msg1.length == 0) {
        msgError1.innerHTML = 'This field is required'
        checkMsg1.innerHTML = '*'
        return false;
    }
    msgError1.innerHTML = ''
    checkMsg1.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true

}
const validateMsg2 = () => {
    let msg2 = document.getElementById('msg2').value
    if (msg2.length == 0) {
        msgError2.innerHTML = 'This field is required'
        checkMsg2.innerHTML = '*'
        return false;
    }
    msgError2.innerHTML = ''
    checkMsg2.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true

}

const validateOption = () => {
    let selectOption = document.getElementById('selectOption').value
    if (selectOption === "option0") {
        optionError.innerHTML = 'Please select an option from the dropdown menu.'
        checkOption.innerHTML = '*'
        return false;
    }
    optionError.innerHTML = ''
    checkOption.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true;
}

const validateForm = () => {
    if (!validateFirstName() || !validateLastName() || !validatePhone() || !validateAltPhone() || !validateEmail() || !validateMsg1() || !validateMsg2() || !validateOption()) {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit.'
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
}
let firstNameError = document.getElementById('first-name-error')
let lastNameError = document.getElementById('last-name-error')
let phoneError = document.getElementById('phone-error')
let altPhoneError = document.getElementById('alt-phone-error')
let emailError = document.getElementById('email-error')
let msgError1 = document.getElementById('message-error-1')
let msgError2 = document.getElementById('message-error-2')
let submitError = document.getElementById('submit-error')
let checkFirst = document.getElementById('checkFirst')
let checkLast = document.getElementById('checkLast')
let checkPhone = document.getElementById('checkPhone')
let checkAltPhone = document.getElementById('checkAltPhone')

const validateFirstName = () => {
    let firstname = document.getElementById('first-name').value
    if (firstname.length == 0) {
        firstNameError.innerHTML = 'First name is required'
        checkFirst.innerHTML = '*'
        return false;
    }
    // if (!firstname.match(/^[A-Za-z]*$/)) {
    //     firstNameError.innerHTML = 'Write First Name'
    //     check.innerHTML = '*'
    //     return false;
    // }
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
    // if (!firstname.match(/^[A-Za-z]*$/)) {
    //     firstNameError.innerHTML = 'Write First Name'
    //     check.innerHTML = '*'
    //     return false;
    // }
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
    // if (!firstname.match(/^[A-Za-z]*$/)) {
    //     firstNameError.innerHTML = 'Write First Name'
    //     check.innerHTML = '*'
    //     return false;
    // }
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
    // if (!firstname.match(/^[A-Za-z]*$/)) {
    //     firstNameError.innerHTML = 'Write First Name'
    //     check.innerHTML = '*'
    //     return false;
    // }
    altPhoneError.innerHTML = ''
    checkAltPhone.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #219739;"></i>'
    return true
}
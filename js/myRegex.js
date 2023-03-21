const phoneRegex = document.getElementById('phone-regex')
const myPhone = document.getElementById('my-phone')
const checkPhoneNumber = (value) => {
    const regex = /^0[0-9]{9,11}$/
    const isPhoneNumber = regex.test(value)
    if(isPhoneNumber) {
        return true
    } else {
        return false
    }
}


phoneRegex.addEventListener('keyup', (e) => {
    // alert("testing");
    const value = e.target.value
    const isPhoneNumber = checkPhoneNumber(value)
    if (value.length <= 12) {
        if(isPhoneNumber) {
        myPhone.style.display = 'none'
        } else {
        myPhone.style.display = 'block'
        myPhone.innerHTML = 'Nilai Invalid'
        } 
    } else {
        myPhone.style.display = 'block'
        myPhone.innerHTML = 'Melebihi'
    }
})

const namaRegex = document.getElementById('nama')
const namaKu = document.getElementById('namaku')
const checkNama = (value) => {
    const regex = /^[a-zA-Z]{2,}$/g
    const isNama = regex.test(value)
    if(isNama) {
        return true
    } else {
        return false
    }
}

namaRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isNama = checkNama(value)
    if (value.length <= 50) {
        if(isNama) {
        namaKu.style.display = 'none'
        } else {
        namaKu.style.display = 'block'
        namaKu.innerHTML = 'Nilai Invalid'
        } 
    } else {
        namaKu.style.display = 'block'
        namaKu.innerHTML = 'Melebihi'
    }
})

const umurRegex = document.getElementById('umur')
const umurKu = document.getElementById('umurku')
const checkUmur = (value) => {
    const regex = /^\d{1,10}$/g
    const isUmur = regex.test(value)
    if(isUmur) {
        return true
    } else {
        return false
    }
}

umurRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isUmur = checkUmur(value)
    if (value.length <= 50) {
        if(isUmur) {
        umurKu.style.display = 'none'
        } else {
        umurKu.style.display = 'block'
        umurKu.innerHTML = 'Nilai Invalid'
        } 
    } else {
        umurKu.style.display = 'block'
        umurKu.innerHTML = 'Melebihi'
    }
})

const emailRegex = document.getElementById('emailnya')
const emailKu = document.getElementById('emailku')
const checkEmail = (value) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isEmail = regex.test(value)
    if(isEmail) {
        return true
    } else {
        return false
    }
}


emailRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isEmail = checkEmail(value)
    if (value.length <= 100) {
        if(isEmail) {
        emailKu.style.display = 'none'
        } else {
        emailKu.style.display = 'block'
        emailKu.innerHTML = 'Nilai Invalid'
        } 
    } else {
        emailKu.style.display = 'block'
        emailKu.innerHTML = 'Melebihi'
    }
})



const messageRegex = document.getElementById('messagenya')
const messageKu = document.getElementById('messageku')
const checkMessage = (value) => {
    const regex = /^[a-zA-Z]{20,7000}$/g
    const isMessage = regex.test(value)
    if(isMessage) {
        return true
    } else {
        return false
    }
}


messageRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isMessage = checkMessage(value)
    if (value.length <= 7000) {
        if(isMessage) {
        messageKu.style.display = 'none'
        } else {
        messageKu.style.display = 'block'
        messageKu.innerHTML = 'Nilai Invalid'
        } 
    } else {
        messageKu.style.display = 'block'
        messageKu.innerHTML = 'Melebihi'
    }
})
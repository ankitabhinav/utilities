export const validateEmail = (inputText) => {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

export const textTruncate = (str, length = 8, ending = '..') => {
    if (length == null) {
        length = 100;
    }

    if (str?.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

export const generateIntervals = (min = 0, max = 10, interval = 1) => {
    const length = (max - min) / interval + 1;
    const arr = Array.from({ length }, (_, i) => min + i * interval);
    return arr;
}

/* To check a password between 8 to 15 characters which contain at least 
one lowercase letter, one uppercase letter, one numeric digit, and one special character */
export const validatePassword = (inputtxt) => {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.match(decimal)) {
        return true;
    }
    else {
        return false;
    }
}

/* validate a phone number of 10 digits with no comma, no spaces, no punctuation and there will 
be no + sign in front the number. Simply the validation will remove 
all non-digits and permit only phone numbers with 10 digits */
export const validatePhoneNumber = (inputtxt) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    }
    else {
        return false;
    }
}

  

//to get formattd date just eg:console.log(getDate('hh:mm:ss ampm',new Date("June 1 2021 12:30:12")))
export const getDate = (format = 'dd-mm-yyyy', current_datetime = new Date()) => {
    // let current_datetime = new Date();
    const months = ["Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = current_datetime.getDate();
    let month = current_datetime.getMonth() + 1;
    let monthName = months[current_datetime.getMonth()];
    let year = current_datetime.getFullYear();
    let formatted = format.replace('mmm', monthName).replace('dd', date).replace('mm', month).replace('yyyy', year);

    return formatted;
}


//get current time in specified format, to get am pm time pass ampm in format string eg: hh:mm:ss ampm
//console.log(getTime('hh:mm:ss ampm',new Date("June 1 2021 12:30:12")))
export const getTime = (format = 'hh:mm:ss', current_datetime = new Date()) => {
    //let current_datetime = new Date();
    let hours = current_datetime.getHours();
    let minutes = current_datetime.getMinutes();
    let secs = current_datetime.getSeconds();

    if (format.includes('ampm')) {
        // Check whether AM or PM
        let newFormat = hours >= 12 ? 'PM' : 'AM';

        // Find current hour in AM-PM Format
        hours = hours % 12;

        // To display "0" as "12"
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let formatted = format.replace('hh', hours).replace('mm', minutes).replace('ss', secs).replace('ampm', newFormat)
        return formatted;

    }

    let formatted = format.replace('hh', hours).replace('mm', minutes).replace('ss', secs);
    return formatted;
}


//returns the starting date object of the current week or of the one which is passed
export const startOfWeek = (date = new Date()) => {
    let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));

}

//returns the end date object of the current week or of the one which is passed
export const endOfWeek = (date = new Date()) => {
    let lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
}


//returns start and end date object of the week in an object 
//{firstDay:'Mon Jun 21 2021 13:43:54 GMT+0530 (India Standard Time)', lastDay:'Sun Jun 27 2021 13:43:54 GMT+0530 (India Standard Time)'}
export const startAndEndOfWeek = (date = new Date()) => {
    let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    let lastday = date.getDate() - (date.getDay() - 1) + 6;
    return { firstDay: new Date(date.setDate(diff)), lastDay: new Date(date.setDate(lastday)) };

}





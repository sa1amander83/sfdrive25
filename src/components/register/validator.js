
const Validator = require('validator');
const noData = require('./nodata');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.userNameme = !noData(data.userName) ? data.userName : '';

    data.birth = !noData(data.birth) ? data.birth : '';

    data.email = !noData(data.email) ? data.email : '';

    data.phone = !noData(data.phone) ? data.phone : '';

    data.passportSerial = !noData(data.passportSerial) ? data.passportSerial : '';

    data.passportDate = !noData(data.passportDate) ? data.passportDate : '';

    data.passportPassed = !noData(data.passportPassed) ? data.passportPassed : '';

    data.passportPassedCode = !noData(data.passportPassedCode) ? data.passportPassedCode : '';

    data.permissSerial = !noData(data.permissSerial) ? data.permissSerial : '';

    data.permissDate = !noData(data.permissDate) ? data.permissDate : '';

    data.password = !noData(data.password) ? data.password : '';

    data.password_confirm = !noData(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.userName, { min: 2, max: 100 })) {
        errors.userName = 'Некорректная длина';
    }
    
    if(Validator.noData(data.userName)) {
        errors.userName = 'Вы не ввели фамилию, имя, отчество';
    }

    if(Validator.noData(data.birth)) {
        errors.birth = 'Укажите дату рождения';
    }

    if(Validator.noData(data.birth)) {
        errors.birth = 'Укажите дату рождения';
    }
  
    if(Validator.isMobilePhone(data.phone)) {
        errors.phone = 'некорректно указан номер телефона';
    }

    if(Validator.noData(data.phone)) {
        errors.phone = 'Укажите номер телефона';
    }
  
    if(Validator.noData(data.passportSerial)) {
        errors.passportSerial = 'Укажите серию и номер паспорта';
    }
  
    if(Validator.noData(data.passportDate)) {
        errors.passportDate = 'Укажите дату выдачи паспорта';
    }
  
    if(Validator.noData(data.passportPassed)) {
        errors.passportPassed = 'Укажите подразделение выдавшее паспорт';
    }
  
    if(Validator.noData(data.passportPassedCode)) {
        errors.passportPassedCode = 'Укажите код подразделения выдавшего паспорт';
    }
  
    if(Validator.noData(data.permissSerial)) {
        errors.permissSerial = 'Укажите серию и номер водительских прав';
    }
  
    if(Validator.noData(data.permissDate)) {
        errors.permissDate = 'Укажите дату выдачи прав';
    }
  

//валидация почты
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Почта указана невернао';
    }

    if(Validator.noData(data.email)) {
        errors.email = 'Необходимо ввести почту';
    }












    
    //Валидация пароля
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Пароль должен быть минимум 6 символов';
    }

    if(Validator.noData(data.password)) {
        errors.password = 'Нужно ввести пароль';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'введите подтверждение пароля';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Введеные пароли не совпадают';
    }

    if(Validator.noData(data.password_confirm)) {
        errors.password_confirm = 'Введите пароль';
    }







    return {
        errors,
        isValid: noData(errors)
    }
}
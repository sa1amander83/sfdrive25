import { regRequest } from '../../../server/requests';
import { SEND_REG_DATA } from '../actions/types';


const INITIAL_STATE = {};

export const registration = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SEND_REG_DATA:
            regRequest(action.payload);
            return state;
        default:
            return state;
    }
};





























// import {ADD_MAIN_ACTION} from '../../components/register/Maininfo'
// import {ADD_PASSPORT_ACTION} from '../../components/register/Passport'
// import {ADD_PERMISS_ACTION} from '../../components/register/Permiss'
// import {ADD_PASSWORD_ACTION} from '../../components/register/Password'

// const initialState= {
//     userName: '',
//     birth: '',
//     email: '',
//     phone: '',
//     // serialPass: '',
//     // passIssueDate: '',
//     // passIssuedBy: '',
//     // passIssuedByCode: '',
//     // permissSerial: '',
//     // permissDate: '',
//     // password: ''
//     }

// export default function regReducer(state = initialState, action) {
//     switch (action.type){
//         case ADD_MAIN_ACTION:
//             return Object.assign({},state, {

//             })
//             {
//                 initialState = {
//                     userName: userName,
//                     birth: birth,
//                     email: email,
//                     phone: phone

//                 }
//             } 
//     }
    
//     return state
// }
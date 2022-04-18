const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
        dialogs:
            [
                {id: 1, name: 'serdar'},
                {id: 2, name: 'khabib'},
                {id: 3, name: 'konor'},
                {id: 4, name: 'raj'},
                {id: 5, name: 'arsi'},
                {id: 6, name: 'taga'},
            ],
        messages:
            [
                {id: 1, message: 'hi conor'},
                {id: 2, message: 'konor the best fighters'},
                {id: 3, message: 'khabib very strong man'},
                {id: 4, message: 'haaaaaaaa'},
                {id: 5, message: 'yea'},
            ],
        newMessageBody: 'fg'
}
const dialogsReducer=(state=initialState,action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
 case SEND_MESSAGE:
        let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push({id: 6, message: body});
    return state;
        default:
            return state;
}

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;

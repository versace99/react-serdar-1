import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, message: 'serdar kak dela', likesCount: 12},
                    {id: 2, message: 'hii dscvdv', likesCount: 15},
                ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);

    }
}
export default store;
window.store = store;

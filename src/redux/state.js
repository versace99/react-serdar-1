
 let store={
     _state: {
         profilePage: {
             posts:
                 [
                     {id: 1, message: 'serdar kak dela', likesCount: 12},
                     {id: 2, message: 'hii dscvdv', likesCount: 15},
                 ],
             newPostText:'sery'
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

                 ]
         }

     },
     sidebar: {
     },
     getState() {
         return this._state;
     },
         _callSubscriber ()  {
             console.log('State changed')

         },
         addPost() {
             let newPost = {
                 id: 5,
                 message: this._state.profilePage.newPostText,
                 likesCount: 0
             };
             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText='';
             this._callSubscriber(this._state);
         },
         updateNewPostText (newText)  {
             this._state.profilePage.newPostText=newText;
             this._callSubscriber(this._state);
         },
         subscribe (observer){
             this._callSubscriber = observer;
         }

}
export default store;
 window.store=store;

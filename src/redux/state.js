let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 12 },
            { id: 2, message: 'Hello, World!', likesCount: 7 },
            { id: 3, message: 'wazzuuuup', likesCount: 24 }
         ],
         newPostText: ''
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Dimych', avatar: 'https://assets.mycast.io/actor_images/actor-ella-hughes-22581_large.jpeg?1578402342' },
            { id: 2, name: 'Sveta', avatar: 'https://www.thesun.co.uk/wp-content/uploads/2019/01/NINTCHDBPICT000462129145.jpg' },
            { id: 3, name: 'Sasha', avatar: 'https://imgcloud.pw/images/2019/06/28/qrhstwotkvosb5a35bda56357bef8.jpg' },
            // { id: 4, name: 'Viktor' },
            // { id: 5, name: 'Valera' },
            // { id: 6, name: 'Andrey' }
         ],
         messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your kamasutra?' },
            { id: 3, message: 'Yo, motherfucker' },
            { id: 4, message: 'Yeah, motherfuckers!' }
         ]
      }
   },
   _callSubscriber() {
      console.log('State changed')
   },
   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   _addPost() {
      let newPost = {
         id: 4,
         message: this._state.profilePage.newPostText,
         likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
   },
   _updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText
      this._callSubscriber(this._state)
   },
   dispatch(action) {   //action - это объект, например { type: 'ADD-POST' }
      // eslint-disable-next-line default-case
      switch (action.type) {
         case 'ADD-POST': 
            this._addPost()
            break;

         case 'UPDATE-NEW-POST-TEXT': 
            this._updateNewPostText(action.newText)
            break;
      }
   }
}

window.store = store

export default store
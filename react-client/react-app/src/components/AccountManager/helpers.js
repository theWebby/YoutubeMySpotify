import { SERVER_URL } from '../../constants';

export const setCurrentUser = (currentUser) => {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export const loadCurrentUser = () => {
    return JSON.parse(window.localStorage.getItem("currentUser"));
}

export const deleteCurrentUser = () => {
    window.localStorage.removeItem('currentUser');
}

export const setUsers = (users) => {
    window.localStorage.setItem('users', JSON.stringify(users));
}

export const loadUsers = () => {
    return JSON.parse(window.localStorage.getItem('users')) || [];
}

export const deleteUser = (userToDelete) => {
    const users = loadUsers();
    const currentUser = loadCurrentUser();

    const newUsers = users.filter(user => user.profile.id !== userToDelete.profile.id)
    setUsers(newUsers);

    if(currentUser.profile.id === userToDelete.profile.id){
        deleteCurrentUser();
    }  
}

export const addNewAccountRedirect = () => {
    const clientUrl = window.location.href.includes('localhost')
      ? 'http://localhost:3001/%23/AccountManager'
      : 'https://thewebby.github.io/YoutubeMySpotify/%23/AccountManager'
    window.location.href = `${SERVER_URL}login?clientUrl=${clientUrl}`;
}
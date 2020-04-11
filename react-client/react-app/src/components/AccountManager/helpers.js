import { SERVER_URL } from '../../constants';

export const setCurrentUser = (currentUser) => {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export const deleteUser = (userToDelete) => {
    const users = getUsers();
    const newUsers = users.filter(user => user.profile.id !== userToDelete.profile.id)
    setUsers(newUsers);
}

export const getUsers = () => {
    return JSON.parse(window.localStorage.getItem('users')) || [];
}

export const setUsers = (users) => {
    window.localStorage.setItem('users', JSON.stringify(users));
}

export const addNewAccountRedirect = () => {
    const clientUrl = window.location.href.includes('localhost')
      ? 'http://localhost:3001/%23/AccountManager'
      : 'https://thewebby.github.io/YoutubeMySpotify/%23/AccountManager'
    window.location.href = `${SERVER_URL}login?clientUrl=${clientUrl}`;
}
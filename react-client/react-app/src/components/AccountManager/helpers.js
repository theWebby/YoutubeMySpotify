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


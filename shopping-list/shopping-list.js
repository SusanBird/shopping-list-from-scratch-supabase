import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const data = new FormData(form);

    alert('it works');


});
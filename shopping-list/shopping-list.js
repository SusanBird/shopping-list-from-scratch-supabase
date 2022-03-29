import { checkAuth, logout, createItem, getItems, deleteAllItems, buyItem, } from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const data = new FormData(form);

    // alert(data.get('amount') + data.get('item'));

    await createItem({
        amount: data.get('amount'),
        item: data.get('item'),
        is_bought: false,
    });

    form.reset();

    await fetchAndDisplayList();

});

async function fetchAndDisplayList() {
    toggleLoadingSpinner();

    listEl.textContent = '';

    const shoppingList = await getItems();

    for (let listItem of shoppingList) {
        const listItemEl = document.createElement('p');

        listItemEl.classList.add('list-item');
        listItemEl.textContent = `${listItem.amount} ${listItem.item}`;

        if (listItem.is_bought) {
            listItemEl.classList.add('is-bought');
        } else {
            listItemEl.addEventListener('click', async () => {
                await buyItem(listItem.id);
    
                fetchAndDisplayList();
            });
        }

  

        listEl.append(listItemEl);
    }

    toggleLoadingSpinner();
}
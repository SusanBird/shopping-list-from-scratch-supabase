const SUPABASE_URL = 'https://cwyvloetshvefkkrywzk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eXZsb2V0c2h2ZWZra3J5d3prIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc4Nzk0MzEsImV4cCI6MTk2MzQ1NTQzMX0.8lVyqbhvuR5E2KD1n187Bk0teEnC6OCfd7h2Kkj_Oew';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./shopping-list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getItems() {
    const response = await client
        .from('shopping_list_items')
        .select('*');
    
    return response.body;
}

export async function createItem(listItem) {
    const response = await client  
        .from('shopping_list_items')
        .insert(listItem);

    return response.body;
}

export async function buyItem(id) {
    const response = await client
        .from('shopping_list_items')
        .update({ is_bought: true })
        .match({ id });

    return response.body;
}

export async function deleteAllItems() {
    const user = getUser();

    const response = await client
        .from ('shopping_list_items')
        .delete()
        .match({ user_id: user.id });
    
    return response.body;
}



// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }

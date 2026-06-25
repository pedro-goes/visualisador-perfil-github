const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;
    if (username) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

        try {
        const response = await fetch(`${BASE_URL}/users/${username}`);

        if (!response.ok){
            alert('usuario não encontrado por favor, verifique o nome de usuario e tente novamente,')
            return;
        }

        const userData = await response.json();
        console.log(userData); // apenas para verificar se os dados foram obtidos corretamente

        profileResults.innerHTML = 
        `<div class="profile-card">
           <img src="${userData.avatar_url}" alt="avatar de ${userData.name}" class="profile-avatar">
           <div class="profile-info">
           <h2>${userData.name}</h2>
           <p>${userData.bio ||`sem biografia disponivel 😢.`}</p>
           </div>
        </div>`;

        }catch (error) {
            console.error(`Erro ao buscar o perfil do usuario:`, error);
            alert(`ocorreu um erro ao buscar o perfil do usuario por favor tente novamente mais tarde.`);
        }

    } else {
        alert('por favor, digete um nome de usuario do github.');
    }
})
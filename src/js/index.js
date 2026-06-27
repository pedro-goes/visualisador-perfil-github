import { fetchGitHubUser } from './api.js';
import { renderLoading, renderProfile, renderError, clearContainer } from './renderer.js';

// Elementos do DOM
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

/**
 * Manipula a busca de usuário
 */
async function handleSearch() {
  const username = inputSearch.value.trim();

  if (!username) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  try {
    renderLoading(profileResults);
    const userData = await fetchGitHubUser(username);
    renderProfile(profileResults, userData);
  } catch (error) {
    console.error('Erro ao buscar o perfil do usuário:', error);
    renderError(profileResults, 'Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
  }
}

/**
 * Permite buscar pressionando Enter
 */
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
}

// Event listeners
btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keypress', handleKeyPress);
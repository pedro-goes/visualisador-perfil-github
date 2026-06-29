/**
 * Renderiza estado de carregamento
 * @param {HTMLElement} container - Elemento para renderizar
 */
export function renderLoading(container) {
  container.innerHTML = '<p class="loading">Carregando...</p>';
}

/**
 * Renderiza perfil do usuário
 * @param {HTMLElement} container - Elemento para renderizar
 * @param {Object} userData - Dados do usuário do GitHub
 */
export function renderProfile(container, userRepos, userData) {

  const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `

    <a href="${repo.html_url}" target="_blank">
    <div class="repository-card">

      <h3>${repo.name}</h3>
      <div class="repository-stats">
        <span>⭐stars: ${repo.stargazers_count}</span>
        <span>🍴forks: ${repo.forks_count}</span>
        <span>👀 watchers: ${repo.watchers_count}</span>
        <span>💻language: ${repo.language || 'não informado'}</span>
      </div>
    </div>

    </a>


    `).join(``) : `<p>Nenhum repositorio encontrado.</p>`;

  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="avatar de ${userData.name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'Sem biografia disponível 😢'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👨‍👩‍👧‍👦Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👨‍👩‍👧‍👦Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>

    <div class="profile-repositories">
       <h2>Repositorios</h2>
       <div class="repositories">
          ${repositoriesHTML}
       </div> 
    </div>
  `;
}

/**
 * Renderiza mensagem de erro
 * @param {HTMLElement} container - Elemento para renderizar
 * @param {string} message - Mensagem de erro
 */
export function renderError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

/**
 * Limpa o container
 * @param {HTMLElement} container - Elemento para limpar
 */
export function clearContainer(container) {
  container.innerHTML = '';
}

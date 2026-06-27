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
export function renderProfile(container, userData) {
  const { avatar_url, name, bio, followers, following } = userData;

  container.innerHTML = `
    <div class="profile-card">
      <img src="${avatar_url}" alt="avatar de ${name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${name}</h2>
        <p>${bio || 'Sem biografia disponível 😢'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👨‍👩‍👧‍👦Seguidores</h4>
        <span>${followers}</span>
      </div>
      <div class="following">
        <h4>👨‍👩‍👧‍👦Seguindo</h4>
        <span>${following}</span>
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

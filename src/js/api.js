const BASE_URL = 'https://api.github.com';

/**
 * Busca dados de um usuário no GitHub
 * @param {string} username - Nome do usuário no GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Se o usuário não for encontrado ou houver erro na requisição
 */
export async function fetchGitHubUser(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);

  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }

  return await response.json();
}

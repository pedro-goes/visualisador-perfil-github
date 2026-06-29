const BASE_URL = 'https://api.github.com';

/**
 * Busca dados de um usuário no GitHub
 * @param {string} userName - Nome do usuário no GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Se o usuário não for encontrado ou houver erro na requisição
 */
export async function fetchGitHubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }

  return await response.json();
}

export async function fetchGitHubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('repositorios não encontrados');
    }
    return await response.json();
}
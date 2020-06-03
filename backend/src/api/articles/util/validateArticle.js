const validateArticle = article => {
  if (!article.title) return { error: 'Título do artigo não informado' }
  if (!article.content) return { error: 'Conteúdo do artigo não informado' }
  if (!article.category) return { error: 'Categoria do artigo não informada' }

  return false
}

module.exports = { validateArticle }

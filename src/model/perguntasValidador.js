function perguntasValidador(pergunta_titulo, pergunta_informacao, pergunta_ultima_edicao, cadastro_id) {

    // Validar titulo (se tem no mínimo 1 caractere)
    if ((typeof pergunta_titulo === 'undefined') || !(pergunta_titulo.length > 0)) {
      return "Erro titulo!"
    };
  
    // Validar informação (se tem no mínimo 1 caractere)
    if ((typeof pergunta_informacao === 'undefined') || !(pergunta_informacao.length > 0)) {
      return "Erro informacao!"
    };
  
    // Validar data última edição (se está no padrão '2022-02-24 12:30:00')
    if ((typeof pergunta_ultima_edicao === 'undefined') || !(pergunta_ultima_edicao.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/))) {
      return "Erro data da ultima edicao!";
    };
  
    // Validar usuário ID (chave estrangeira)
    if ((typeof cadastro_id === 'undefined') || !(cadastro_id > 0)) {
      return "Erro usuário ID (chave estrangeira)!";
    };
  
    return "VALIDACAO_OK";
  }
  
  module.exports = perguntasValidador;
  
function questoesValidador(questao_titulo, questao_descricao, cadastro_id) {

    // Validar título (se tem no mínimo 1 caractere)
    if ((typeof questao_titulo === 'undefined') || !(questao_titulo.length > 0)) {
      return "Erro no título!";
    }
  
    // Validar descrição (se tem no mínimo 1 caractere)
    if ((typeof questao_descricao === 'undefined') || !(questao_descricao.length > 0)) {
      return "Erro na descrição!";
    }
  
    // Validar usuário ID (chave estrangeira)
    if ((typeof cadastro_id === 'undefined') || !(cadastro_id > 0)) {
      return "Erro no usuário ID (chave estrangeira)!";
    }
  
    return "VALIDACAO_OK";
  }
  
  module.exports = questoesValidador;
  
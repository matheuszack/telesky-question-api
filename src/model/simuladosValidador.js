function simuladosValidador(simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id) {

    // Validar titulo (se tem no mínimo 1 caractere)
    if ((typeof simulado_titulo === 'undefined') || !(simulado_titulo.length > 0)) {
    return "Erro no titulo do simulado!"
    };
    
    // Validar questão (se tem no mínimo 1 caractere)
    if ((typeof simulado_questao === 'undefined') || !(simulado_questao.length > 0)) {
    return "Erro na questão do simulado!"
    };
    
    // Validar opção 1 (se tem no mínimo 1 caractere)
    if ((typeof simulado_opcao_1 === 'undefined') || !(simulado_opcao_1.length > 0)) {
    return "Erro na opção 1 do simulado!"
    };
    
    // Validar opção 2 (se tem no mínimo 1 caractere)
    if ((typeof simulado_opcao_2 === 'undefined') || !(simulado_opcao_2.length > 0)) {
    return "Erro na opção 2 do simulado!"
    };
    
    // Validar opção 3 (se tem no mínimo 1 caractere)
    if ((typeof simulado_opcao_3 === 'undefined') || !(simulado_opcao_3.length > 0)) {
    return "Erro na opção 3 do simulado!"
    };
    
    // Validar opção 4 (se tem no mínimo 1 caractere)
    if ((typeof simulado_opcao_4 === 'undefined') || !(simulado_opcao_4.length > 0)) {
    return "Erro na opção 4 do simulado!"
    };
    
    // Validar resolução (se tem no mínimo 1 caractere)
    if ((typeof simulado_resolucao === 'undefined') || !(simulado_resolucao.length > 0)) {
    return "Erro na resolução do simulado!"
    };
    
    // Validar usuário ID (chave estrangeira)
    if ((typeof cadastro_id === 'undefined') || !(cadastro_id > 0)) {
    return "Erro no usuário ID (chave estrangeira) do simulado!";
    };
    
    return "VALIDACAO_OK";
    }
    
    module.exports = simuladosValidador;
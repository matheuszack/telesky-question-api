function cadastroValidador(cadastro_nome, cadastro_email, cadastro_senha) {

    // Validar nome (se tem letra e no mínimo 3 caracteres)
    if ((typeof cadastro_nome === 'undefined') || !(cadastro_nome.length > 2) || !(cadastro_nome.match(/^[A-Za-z\s]*$/))) {
      return "Erro nome!"
    };
  
  
    // Validar email
    if ((typeof cadastro_email === 'undefined') || !(cadastro_email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
      return "Erro email!";
    }
  
    // Validar senha (se possui no mínimo 8 caracteres)
    if ((typeof cadastro_senha === 'undefined') || !(cadastro_senha.length > 7)) {
      return "Erro senha!";
    }
  
  
  }
  
  module.exports = cadastroValidador;
  
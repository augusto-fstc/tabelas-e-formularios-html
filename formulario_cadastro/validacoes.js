function validarFormulario() {
    // Validação do campo de e-mail
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validação do campo de senha (mínimo de 8 caracteres)
    const senha = document.getElementById("senha").value;
    if (senha.length <= 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    // Validação da data de nascimento (deve ser preenchida)
    const dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
        alert("Por favor, selecione uma data de nascimento.");
        return false;
    }

    return true;
}


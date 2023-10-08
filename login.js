function validaLogin() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email === 'aluno@fatec.sp.gov.br' && senha === 'senha123') {
        // Autenticação bem-sucedida, redirecionar o usuário para a página desejada
        window.location.href = 'index.html';
    } else {
        alert('O email ou senha informados são inválidos!');
    }
}

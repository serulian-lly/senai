
nome = prompt("Qual o seu nome?");
hora = new Date().getHours();

if(nome == null || nome == "" || nome == " ")
nome = "Usuário";

function bemVindo() {
    if (hora < 12) {
        document.writeln("<h3>bom dia, " + nome + "!</h3>");
    } else if (hora < 18) {
        document.writeln("<h3>boa tarde, " + nome + "!</h3>");
    } else {
        document.writeln("<h3>boa noite, " + nome + "!</h3>");
    }
}

function validar() {
    var senha = formAcao.senha.value;
    var senhaRep = formAcao.senhaRep.value;

    if (senha.length < 6) {
        alert("Digite uma senha com mais de 6 digitos");
        formAcao.senha.focus();
        return false;
    }
    if (senhaRep.length < 6) {
        alert("Repita a Senha");
        formAcao.senhaRep.focus();
        return false;
    }
    if (senha != senhaRep) {
        alert("As Senhas não são iguais");
        formAcao.senha.focus();
        return false;
    }
}

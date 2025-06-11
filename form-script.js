
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            const nome = document.getElementById("nome").value.trim();
            const bi = document.getElementById("bi").value.trim();
            const data = document.getElementById("data")?.value;
            const email = document.getElementById("email")?.value.trim();
            const telefone = document.getElementById("telefone")?.value.trim();
            const senha = document.getElementById("senha").value;
            const confirma = document.getElementById("confirma")?.value;
            const termos = document.getElementById("termos")?.checked;

            if (!nome || !bi || !senha) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                e.preventDefault();
                return;
            }

            if (senha.length < 6) {
                alert("A palavra-passe deve ter pelo menos 6 caracteres.");
                e.preventDefault();
                return;
            }

            if (confirma !== undefined && senha !== confirma) {
                alert("As palavras-passe não coincidem.");
                e.preventDefault();
                return;
            }

            if (termos !== undefined && !termos) {
                alert("É necessário aceitar os termos e condições.");
                e.preventDefault();
                return;
            }
        });
    }
});

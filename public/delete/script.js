async function buscarParaDeletar() {
    const cpf = document.getElementById('cpfBusca').value;
    const msg = document.getElementById('mensagem');

    if (!cpf) {
        alert("Por favor, digite um CPF.");
        return;
    }

    try {
        // Busca o registro pelo CPF para obter o ID interno
        const response = await fetch(`/api/pessoas?cpf=${cpf}`);
        const dados = await response.json();

        if (dados.length > 0) {
            const pessoa = dados[0];
            if (confirm(`Tem certeza que deseja excluir o registro de ${pessoa.nome} ${pessoa.sobrenome}?`)) {
                const deleteRes = await fetch(`/api/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                });

                if (deleteRes.ok) {
                    msg.innerText = "Registro removido com sucesso!";
                    msg.style.color = "green";
                    document.getElementById('cpfBusca').value = "";
                }
            }
        } else {
            msg.innerText = "CPF não encontrado no sistema.";
            msg.style.color = "red";
        }
    } catch (error) {
        console.error("Erro ao deletar:", error);
        msg.innerText = "Erro ao conectar com o servidor.";
    }
}
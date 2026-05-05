async function buscarParaDeletar() {
    const cpf = document.getElementById('cpfBusca').value;
    const msg = document.getElementById('mensagem');

    // Função de busca por CPF (como pedido no trabalho)
    const response = await fetch(`/api/pessoas?cpf=${cpf}`);
    const dados = await response.json();

    if (dados.length > 0) {
        const id = dados[0].id;
        if (confirm(`Deseja excluir ${dados[0].nome}?`)) {
            await fetch(`/api/pessoas/${id}`, { method: 'DELETE' });
            msg.innerText = "Registro excluído com sucesso!";
            msg.style.color = "green";
        }
    } else {
        msg.innerText = "CPF não encontrado.";
        msg.style.color = "red";
    }
}
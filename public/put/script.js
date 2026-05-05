async function carregarDados() {
    const cpf = document.getElementById('cpfBusca').value;
    const res = await fetch(`/api/pessoas?cpf=${cpf}`);
    const dados = await res.json();

    if (dados.length > 0) {
        const p = dados[0];
        document.getElementById('idEdit').value = p.id;
        document.getElementById('nome').value = p.nome;
        document.getElementById('sobrenome').value = p.sobrenome;
        document.getElementById('email').value = p.email;
        document.getElementById('formEdit').style.display = 'block';
    } else {
        alert("CPF não encontrado");
    }
}

async function salvarAlteracoes() {
    const id = document.getElementById('idEdit').value;
    const novosDados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value
        // Adicione os outros campos do db.json aqui conforme a necessidade
    };

    const res = await fetch(`/api/pessoas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novosDados)
    });

    if (res.ok) alert("Atualizado com sucesso!");
}
function buscarDados() {
    const rgBusca = document.getElementById('buscaRg').value;
    fetch('/api/pessoas')
        .then(res => res.json())
        .then(data => {
            const p = data.find(pessoa => pessoa.rg === rgBusca);
            if (p) {
                // Preenche os campos para edição
                document.getElementById('id').value = p.id;
                document.getElementById('nome').value = p.nome;
                document.getElementById('sobrenome').value = p.sobrenome;
                document.getElementById('rg').value = p.rg;
                // Preencher demais campos se houver...
            } else {
                alert('Pessoa não encontrada com este RG.');
            }
        });
}

function atualizarDados() {
    const id = document.getElementById('id').value;
    const dadosAtualizados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        rg: document.getElementById('rg').value
        // Deve-se enviar todos os campos para não perdê-los no PUT
    };

    fetch(`/api/pessoas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(() => alert('Dados atualizados com sucesso!'));
}
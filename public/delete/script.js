function deletarDados() {
    const rgParaExcluir = document.getElementById('rgExcluir').value;

    fetch('/api/pessoas')
        .then(res => res.json())
        .then(data => {
            const pessoa = data.find(p => p.rg === rgParaExcluir);
            if (pessoa) {
                if (confirm(`Deseja realmente excluir ${pessoa.nome}?`)) {
                    fetch(`/api/pessoas/${pessoa.id}`, { method: 'DELETE' })
                    .then(() => {
                        alert('Excluído com sucesso!');
                        document.getElementById('rgExcluir').value = '';
                    });
                }
            } else {
                alert('RG não localizado.');
            }
        });
}
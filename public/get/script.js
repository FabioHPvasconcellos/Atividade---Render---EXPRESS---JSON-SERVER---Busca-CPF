window.onload = () => {
    fetch('/api/pessoas')
        .then(res => res.json())
        .then(data => {
            const tabela = document.getElementById('tabela-corpo');
            tabela.innerHTML = data.map(p => `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.nome} ${p.sobrenome}</td>
                    <td>${p.email}</td>
                    <td>${p.rg}</td>
                    <td>${p.cidade}</td>
                </tr>
            `).join('');
        });
};
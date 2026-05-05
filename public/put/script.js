async function carregarDados() {
    const cpf = document.getElementById('cpfBusca').value;
    const msg = document.getElementById('mensagem');

    try {
        const res = await fetch(`/api/pessoas?cpf=${cpf}`);
        const dados = await res.json();

        if (dados.length > 0) {
            const p = dados[0];

            document.getElementById('idEdit').value = p.id;
            document.getElementById('nome').value = p.nome || '';
            document.getElementById('sobrenome').value = p.sobrenome || '';
            document.getElementById('email').value = p.email || '';
            document.getElementById('idade').value = p.idade || '';
            document.getElementById('telefone').value = p.telefone || '';
            document.getElementById('rua').value = p.rua || '';
            document.getElementById('bairro').value = p.bairro || '';
            document.getElementById('cidade').value = p.cidade || '';
            document.getElementById('estado').value = p.estado || '';
            document.getElementById('rg').value = p.rg || '';
            document.getElementById('cpfInalteravel').value = p.cpf;

            document.getElementById('formEdit').style.display = 'block';
            msg.innerText = "Registro carregado!";
            msg.style.color = "blue";
        } else {
            alert("CPF não encontrado.");
            document.getElementById('formEdit').style.display = 'none';
        }
    } catch (error) {
        alert("Erro ao buscar dados.");
    }
}

async function salvarAlteracoes() {
    const id = document.getElementById('idEdit').value;


    const novosDados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('telefone').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpfInalteravel').value
    };

    try {
        const res = await fetch(`/api/pessoas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novosDados)
        });

        if (res.ok) {
            alert("Sucesso: Cadastro de " + novosDados.nome + " atualizado!");
            window.location.href = "/get/index.html";
        } else {
            alert("Erro ao salvar alterações.");
        }
    } catch (error) {
        console.error("Erro no PUT:", error);
    }
}
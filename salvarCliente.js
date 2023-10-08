function salvarCliente() {
    let nome = document.getElementById('nome').value;
    let date = document.getElementById('date').value;
    let curso = document.getElementById('curso').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    
    // Obter o valor do sexo selecionado
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let senha = document.getElementById('senha').value;

    // Verificar se todos os campos estão preenchidos
    if (!nome || !date || !curso || !tel || !email || !sexo || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar se o email já está em uso
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    if (clientes.some(cliente => cliente.email === email)) {
        alert('Este email já está em uso. Por favor, use um email diferente.');
        return;
    }

    // Verificar se o telefone já está em uso
    if (clientes.some(cliente => cliente.tel === tel)) {
        alert('Este número de telefone já está em uso. Por favor, use um número diferente.');
        return;
    }

    // Obter o valor do sexo selecionado
    let sexoValue = sexo.value;

    let cliente = { nome: nome, date: date, curso: curso, tel: tel, email: email, sexo: sexoValue, senha: senha };

    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    listarClientes();
}



function listarClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    let tabela = document.getElementById('listagem');
    tabela.innerHTML = '';

    let table = document.createElement('table');
    table.className = 'table table-bordered';
    table.innerHTML = `
        <thead>
            <tr class='table-success'>
                <th>NOME</th>
                <th>DATA DE NASC.</th>
                <th>CURSO</th>
                <th>TELEFONE</th>
                <th>E-MAIL</th>
                <th>SEXO</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
        </tbody>`;

    let tbody = table.querySelector('tbody');
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        let row = tbody.insertRow(i);
        row.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.date}</td>
            <td>${cliente.curso}</td>
            <td>${cliente.tel}</td>
            <td>${cliente.email}</td>
            <td>${cliente.sexo}</td>
            <td><button class='btn btn-danger' onclick="apagarCliente('${cliente.nome}')">Apagar</button></td>
        `;
    }

    tabela.appendChild(table);
}

function apagarCliente(nome) {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes = clientes.filter(function (cliente) {
        return cliente.nome !== nome;
    });

    localStorage.setItem('clientes', JSON.stringify(clientes));

    listarClientes();
}

listarClientes(); // Chamar a função logo que a página carregar

const vagas = [
    {
        id: 1,
        titulo: "Desenvolvedor(a) FrontEnd React",
        empresa: "Empresa Simulada",
        tipo: "remoto",
        tecnologias: ['React', 'Type Script', 'CSS'],
        salario: 'R$6.000 - R$9.000',
        local: "Remoto"
    },
    {
        id: 2,
        titulo: "Backend Node js",
        empresa: "Empresa Simulada",
        tipo: "hibrido",
        tecnologias: ['Node.js', 'SQL',],
        salario: 'R$7.000 - R$10.000',
        local: "Uberlândia"
    }
];

function criarCard(vaga) {
    const article = document.createElement('article');
    article.className = 'job-card';
    article.dataset.id = vaga.id;

    const badgeClass = {
        remote: 'job-card__badge--remote',
        presencial: 'job-card__badge--onsite',
        hibrido: 'job-card__badge--hybrid'
    }[vaga.tipo] || '';

    const tipoLabel = {
        remote: 'Remoto',
        presencial: 'Presencial',
        hibrido: 'Híbrido'
    }[vaga.tipo] || vaga.tipo

    const header = document.createElement('div');
    header.className = ''
}

function renderizarVagas(lista) {
    const grid = document.getElementById('jobs-grid');
    grid.replaceChild();

    if (lista.length == 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'empty-msg';
        emptyMsg.textContent = 'Nenhuma vaga encontrada.';
        grid.appendChild(emptyMsg);
        return;
    }

    const fragment = document.createDocumentFragment()
    lista.forEach(vaga => fragment.appendChild(criarCard(vaga)));
    grid.appendChild(fragment);
}

renderizarVagas(vagas)
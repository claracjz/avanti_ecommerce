const produtos = [
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
    {nome: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", precoOriginal: "100,00", precoAtual: "79,90", imagem: "./assets/product.png"},
];

const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');

function handleSearch(event) {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (query !== "") {
        searchResult.textContent = `Você buscou por: '${query}'`;
    } else {
        searchResult.textContent = "";
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
  }

const produtosPorSlide = 5;

const containers = [
    document.querySelector('#carousel-inner'),
    document.querySelector('#carousel-inner-2')
  ];

for (let i = 0; i < produtos.length; i += produtosPorSlide) {
    const grupo = produtos.slice(i, i + produtosPorSlide);
    const isActive = i === 0 ? 'active' : '';

    const slide = document.createElement('div');
    slide.className = `carousel-item ${isActive}`;

    const row = document.createElement('div');
    row.className = 'd-flex justify-content-center gap-3';

    grupo.forEach(produto => {

        const precoParcelado = parseFloat(produto.precoAtual.replace(',', '.')) / 10;
        const precoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        }).format(precoParcelado);

        const card = document.createElement('div');
        card.style.border = '2px solid #dddddd';
        card.style.borderRadius = '10px';



        card.innerHTML = `
        <div class="position-relative">
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
            <span class="badge bg-dark position-absolute top-0 start-0 m-2">NOVO</span>
        </div>    
            <div class="card-body text-start p-1">
                <p class="card-title" style="font-size: 14px;">${produto.nome}</p>
                <p class="text-muted mb-0" style="text-decoration: line-through; font-size: 12px;"> R$ ${produto.precoOriginal}</p>
            <div class="d-flex align-items-center">
                <strong class="me-2 fs-6 text-dark">R$ ${produto.precoAtual}</strong>
                <span class="badge bg-info text-white">10% off</span>
            </div>
                <p class="text-muted" style="font-size: 12px;">Ou em até <strong>10x de R$ ${precoFormatado}</strong></p>
                <a href="#" class="btn btn-primary w-100" style="border-radius: 8px">Comprar</a>
            </div>
            `;
            row.appendChild(card);
    });

    slide.appendChild(row);
    
    containers.forEach(container => {
        container.appendChild(slide.cloneNode(true));
    });
}


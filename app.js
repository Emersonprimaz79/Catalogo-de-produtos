/* ==========================================================
   EFORJA — Catálogo de Peças Forjadas
   app.js
   Seções: DADOS · RENDER · BUSCA E FILTROS · GALERIA · MODAL · ROTEAMENTO
   ========================================================== */

/* ----------------------------------------------------------
   1. DADOS
   ----------------------------------------------------------
   Cadastre ou edite as peças aqui.
   Cada objeto aceita:
     codigo                → código EFORJA (string)
     descricao             → descrição da peça (string)
     linha                 → "Automotivo" | "Agrícola" | "Linha Amarela"
     marcas                → array de marcas atendidas
     veiculos              → array de veículos/aplicações
     codigosCorrespondentes→ array de códigos equivalentes de outros fabricantes
     galeria               → array de até 3 caminhos de imagem (vazio = placeholder)
   ---------------------------------------------------------- */

const PRODUCTS = [
  {
    codigo: "708.183",
    descricao: 'Anel de desgaste 2"- 3 furos',
    linha: "Automotivo",
    marcas: ["JOST","Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0025J01","PRU.0011"],
    galeria: []
  },

  {
    codigo: "708.204",
    descricao: 'Anel de desgaste 2"- 4 furos',
    linha: "Automotivo",
    marcas: ["JOST","Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0214J01","PRU.0011"],
    galeria: []
  },

  {
    codigo: "708.184",
    descricao: 'Barra de Travamento 2"',
    linha: "Automotivo",
    marcas: ["JOST","Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0214J01","PRU.0012"],
    galeria: []
  },

  {
    codigo: "708.185",
    descricao: 'Garra de Travamento 2"',
    linha: "Automotivo",
    marcas: ["JOST","Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0022J01","PRU.0010"],
    galeria: []
  },

    {
    codigo: "708.186",
    descricao: 'Pino Rei 2"',
    linha: "Automotivo",
    marcas: ["JOST","Canaparts","Uniferro","Facchini"],
    veiculos: ['Quinta Roda 2"'],
    codigosCorrespondentes: ["PR00012J00","260000080","PRU.0005"],
    galeria: ["img/pecas/708.186-1.jpg", "img/pecas/708.186-2.jpg","img/pecas/708.186-3.jpg"]
  },

  {
    codigo: "708.187",
    descricao: "Placa do Pino Rei 8 Furos",
    linha: "Automotivo",
    marcas: ["JOST","Canaparts","Uniferro","Facchini"],
    veiculos: ["Quinta Roda 2","Quinta Roda 3.1/2"],
    codigosCorrespondentes: ["PR00010J00", "PRU.0006"],
    galeria: []
  },

  {
    codigo: "708.188",
    descricao: "Ponteira Giratória M48",
    linha: "Automotivo",
    marcas: ["Silpa","Canaparts"],
    veiculos: ['"ENGATE AUTOMÁTICO 2"'],
    codigosCorrespondentes: ["100000160376","PRU.0017"],
    galeria: []
  },

    {
    codigo: "708.190",
    descricao: "Porca Sextavada M48x86mm",
    linha: "Automotivo",
    marcas: ["Silpa","Canaparts"],
    veiculos: ['"ENGATE AUTOMÁTICO 2"'],
    codigosCorrespondentes: ["1870100013","PRU.0559"],
    galeria: []
  },

  {
    codigo: "708.210",
    descricao: "Garfo Duplo ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","Agrale","CBT","CNH","JOHN DEERE"],
    veiculos: [
      "MF290",
      "MF292",
      "MF295",
      "MF297",
      "MF299",
      "MF610",
      "MF620",
      "MF630",
      "MF640",
      "MF1650",
      "BX 4.90",
      "BX 4.110", 
      "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060",
      "CBT8020",
      "N.H. 7630",
      "N.H. 8030",
      "JD6300",
      "JD6600",
      "VALTRA 985",
      "VALTRA 1180 ",
      "VALTRA 985-TS",
    ],
    codigosCorrespondentes: ["7029310430"],
    galeria: []
  },

  {
    codigo: "708.211",
    descricao: "Garfo curto ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","Agrale","CBT","CNH","JOHN DEERE"],
    veiculos: [
      "MF290",
      "MF292",
      "MF295",
      "MF297",
      "MF299",
      "MF610",
      "MF620",
      "MF630",
      "MF640",
      "MF1650",
      "BX 4.90",
      "BX 4.110", 
      "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060",
      "CBT8020",
      "N.H. 7630",
      "N.H. 8030",
      "JD6300",
      "JD6600",
      "VALTRA 985",
      "VALTRA 1180 ",
      "VALTRA 985-TS",
    ],
    codigosCorrespondentes: ["0095236009"],
    galeria: []
  },
  
  {
    codigo: "708.212",
    descricao: "Garfo longo ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","Agrale","CBT","CNH","JOHN DEERE"],
    veiculos: [
      "MF290",
      "MF292",
      "MF295",
      "MF297",
      "MF299",
      "MF610",
      "MF620",
      "MF630",
      "MF640",
      "MF1650",
      "BX 4.90",
      "BX 4.110", 
      "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060",
      "CBT8020",
      "N.H. 7630",
      "N.H. 8030",
      "JD6300",
      "JD6600",
      "VALTRA 985",
      "VALTRA 1180 ",
      "VALTRA 985-TS",
    ],
    codigosCorrespondentes: ["0095236015"],
    galeria: []
  },

  {
    codigo: "708.213",
    descricao: "Pino do Mancal ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","Agrale","CBT","CNH","JOHN DEERE"],
    veiculos: [
      "MF290",
      "MF292",
      "MF295",
      "MF297",
      "MF299",
      "MF610",
      "MF620",
      "MF630",
      "MF640",
      "MF1650",
      "BX 4.90",
      "BX 4.110", 
      "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060",
      "CBT8020",
      "N.H. 7630",
      "N.H. 8030",
      "JD6300",
      "JD6600",
      "VALTRA 985",
      "VALTRA 1180 ",
      "VALTRA 985-TS",
    ],
    codigosCorrespondentes: ["4472353195"],
    galeria: []
  },

  {
    codigo: "708.229",
    descricao: "Garfo Duplo ZF355",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","JOHN DEERE"],
    veiculos: [
      "MF250",
      "MF265",
      "MF275",
      "MF281",
      "MF283",
      "MF5275",
      "MF5285",
      "MF5290",
      "MF5650",
      "MF AX4.90",
      "VALTRA 785",
      "JD5285",
      "JD5290",
    ],
    codigosCorrespondentes: ["7029310230"],
    galeria: []
  },

  {
    codigo: "708.227",
    descricao: "Garfo curto ZF345",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","JOHN DEERE"],
    veiculos: [
      "MF250",
      "MF265",
      "MF275",
      "MF281",
      "MF283",
      "MF5275",
      "MF5285",
      "MF5290",
      "MF5650",
      "MF AX4.90",
      "VALTRA 785",
      "JD5285",
      "JD5290",
    ],
    codigosCorrespondentes: ["0095236010"],
    galeria: []
  },
  
  {
    codigo: "708.228",
    descricao: "Garfo longo ZF345",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","JOHN DEERE"],
    veiculos: [
      "MF250",
      "MF265",
      "MF275",
      "MF281",
      "MF283",
      "MF5275",
      "MF5285",
      "MF5290",
      "MF5650",
      "MF AX4.90",
      "VALTRA 785",
      "JD5285",
      "JD5290",
    ],
    codigosCorrespondentes: ["0095236011"],
    galeria: []
  },
  
  {
    codigo: "708.226",
    descricao: "Pino do Mancal ZF335",
    linha: "Agrícola",
    marcas: ["ZF","AGCO","Valtra","JOHN DEERE"],
    veiculos: [
      "MF250",
      "MF265",
      "MF275",
      "MF281",
      "MF283",
      "MF5275",
      "MF5285",
      "MF5290",
      "MF5650",
      "MF AX4.90",
      "VALTRA 785",
      "JD5285",
      "JD5290",
    ],
    codigosCorrespondentes: ["4472352162"],
    galeria: []
  },


  /* --------------------------------------------------------
     Adicione as demais peças seguindo o mesmo formato.
     Para imagens locais, use: galeria: ["img/pecas/708.186-1.jpg"]
     -------------------------------------------------------- */
];

/* As 37 peças restantes do catálogo original seguem o mesmo padrão.
   Exemplo de geração rápida para testes de volume:

   const LINHAS = ["Automotivo", "Agrícola", "Linha Amarela"];
   const SEMENTES = [
     { prefixo: "709", nomes: ["Bucha de Olhal", "Pino de Articulação", "Suporte Forjado"] },
     { prefixo: "710", nomes: ["Braço de Suspensão", "Mancal Forjado", "Garra de Engate"] },
   ];
*/

/* Linhas de segmento exibidas no topo do catálogo */
const SEGMENTS = [
  {
    linha: "Automotivo",
    descricao: "Componentes forjados para veículos leves e pesados, implementos rodoviários e sistemas de transmissão.",
    imagem: "img\\segmento\\quinta_roda.jpg"
  },
  {
    linha: "Agrícola",
    descricao: "Peças forjadas para tratores, colheitadeiras, plantadeiras e implementos agrícolas.",
    imagem: "img\\segmento\\trator.jpg"
  },
  {
    linha: "Linha Amarela",
    descricao: "Componentes para máquinas de construção, mineração, movimentação de carga e equipamentos pesados.",
    imagem: "img\\segmento\\amarela.jpg"
  }
];

/* ----------------------------------------------------------
   2. ESTADO E ELEMENTOS
   ---------------------------------------------------------- */

const state = {
  busca: "",
  linha: "",
  marca: ""
};

const el = {
  segmentsGrid: document.getElementById("segmentsGrid"),
  piecesGrid:   document.getElementById("piecesGrid"),
  emptyState:   document.getElementById("emptyState"),
  resultsCount: document.getElementById("resultsCount"),
  searchInput:  document.getElementById("searchInput"),
  linhaFilter:  document.getElementById("linhaFilter"),
  marcaFilter:  document.getElementById("marcaFilter"),
  clearFilters: document.getElementById("clearFilters"),
  navToggle:    document.getElementById("navToggle"),
  mainNav:      document.getElementById("mainNav"),
  backdrop:     document.getElementById("modalBackdrop"),
  modalBody:    document.getElementById("modalBody"),
  modalTitle:   document.getElementById("modalTitle"),
  modalLinha:   document.getElementById("modalLinha"),
  modalClose:   document.getElementById("modalClose"),
  modalFechar:  document.getElementById("modalFechar"),
  modalWhats:   document.getElementById("modalWhats"),
  toast:        document.getElementById("toastBox")
};

/* SVG de placeholder para as galerias sem foto */
const GEAR_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>`;

/* ----------------------------------------------------------
   3. RENDER
   ---------------------------------------------------------- */

/** Renderiza os três cards de segmento no topo */
function renderSegments() {
  el.segmentsGrid.innerHTML = SEGMENTS.map(seg => `
    <article class="segment-card" data-linha="${seg.linha}" tabindex="0" role="button"
             aria-label="Ver peças da linha ${seg.linha}">
      <div class="segment-media">
        <img src="${seg.imagem}" alt="${seg.linha}" loading="lazy"
             onerror="this.outerHTML='<div class=&quot;segment-placeholder&quot;>${seg.linha}</div>'">
      </div>
      <div class="segment-body">
        <h3>${seg.linha}</h3>
        <p>${seg.descricao}</p>
      </div>
    </article>
  `).join("");

  el.segmentsGrid.querySelectorAll(".segment-card").forEach(card => {
    const acionar = () => {
      const linha = card.dataset.linha;
      el.linhaFilter.value = linha;
      state.linha = linha;
      renderPieces();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", acionar);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); acionar(); }
    });
  });
}

/** Monta a galeria de 3 slides com carrossel automático */
function buildGallery(piece) {
  const slides = [0, 1, 2].map(i => {
    const src = piece.galeria && piece.galeria[i];

    if (src) {
      // Foto real: usa onerror curto, sem aspas aninhadas
      return `<div class="gallery-slide">
                <img src="${src}" alt="${piece.descricao} - foto ${i + 1}"
                     data-slide="${i + 1}" class="gallery-img">
              </div>`;
    }

    // Sem foto: slide vazio já renderizado
    return `<div class="gallery-slide">
              <div class="gallery-slide-empty">${GEAR_SVG}<span>Foto ${i + 1}</span></div>
            </div>`;
  }).join("");

  const dots = `<div class="gallery-dots">
                  <span class="active-dot"></span><span></span><span></span>
                </div>`;

  return `<div class="piece-gallery">
            <div class="gallery-track">${slides}</div>
            ${dots}
          </div>`;
}
/** Monta os chips de um bloco (veículos ou códigos) */
function buildChips(label, items, classe) {
  if (!items || !items.length) return "";
  return `
    <div class="chip-block">
      <p class="chip-label">${label}</p>
      <ul class="chip-row">
        ${items.map(i => `<li class="chip ${classe}">${i}</li>`).join("")}
      </ul>
    </div>`;
}

/** Renderiza o grid de peças conforme os filtros ativos */
function renderPieces() {
  const lista = filtrarPecas(PRODUCTS);

  el.piecesGrid.innerHTML = lista.map(p => `
    <article class="piece-card" data-codigo="${p.codigo}" tabindex="0" role="button"
             aria-label="Detalhes da peça ${p.codigo} — ${p.descricao}">
      ${buildGallery(p)}
      <div class="piece-body">
        <p class="piece-line">
          <span class="piece-code">${p.codigo}</span>
          <span class="piece-dash">—</span>
          <span class="piece-name">${p.descricao}</span>
        </p>
        <span class="piece-badge">${p.linha}</span>
        ${buildChips("Veículos/implementos atendidos", p.veiculos, "chip-veiculo")}
        ${buildChips("Códigos correspondentes", p.codigosCorrespondentes, "chip-codigo")}
      </div>
    </article>
  `).join("");

    el.piecesGrid.querySelectorAll('[data-slide]').forEach(img => {
    img.addEventListener("error", () => {
      const indice = img.dataset.slide;
      img.parentNode.innerHTML =
        '<div class="gallery-slide-empty">' + GEAR_SVG +
        '<span>Foto ' + indice + '</span></div>';
    });
  });

  el.emptyState.hidden = lista.length > 0;
  el.resultsCount.textContent = `${lista.length} ${lista.length === 1 ? "peça encontrada" : "peças encontradas"}`;

  el.piecesGrid.querySelectorAll(".piece-card").forEach(card => {
    const abrir = () => abrirModal(card.dataset.codigo);
    card.addEventListener("click", abrir);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(); }
    });
  });
}

/** Roda o estado atual e sincroniza os selects */
function renderFiltersMarca() {
  const marcas = [...new Set(PRODUCTS.flatMap(p => p.marcas || []))].sort();
  el.marcaFilter.innerHTML =
    `<option value="">Todas as marcas</option>` +
    marcas.map(m => `<option value="${m}">${m}</option>`).join("");
}

/* ----------------------------------------------------------
   4. BUSCA E FILTROS
   ---------------------------------------------------------- */

/**
 * Filtra as peças por busca textual, linha e marca.
 * A busca também encontra por código correspondente (equivalência).
 */
function filtrarPecas(lista) {
  const termo = state.busca.trim().toLowerCase();

  return lista.filter(p => {
    // Filtro por linha
    if (state.linha && p.linha !== state.linha) return false;

    // Filtro por marca
    if (state.marca && !(p.marcas || []).includes(state.marca)) return false;

    // Busca textual livre
    if (!termo) return true;

    const alvo = [
      p.codigo,
      p.descricao,
      p.linha,
      ...(p.marcas || []),
      ...(p.veiculos || []),
      ...(p.codigosCorrespondentes || [])
    ].join(" ").toLowerCase();

    return alvo.includes(termo);
  });
}

function bindFilters() {
  el.searchInput.addEventListener("input", e => {
    state.busca = e.target.value;
    renderPieces();
  });

  el.linhaFilter.addEventListener("change", e => {
    state.linha = e.target.value;
    renderPieces();
  });

  el.marcaFilter.addEventListener("change", e => {
    state.marca = e.target.value;
    renderPieces();
  });

  el.clearFilters.addEventListener("click", () => {
    state.busca = "";
    state.linha = "";
    state.marca = "";
    el.searchInput.value = "";
    el.linhaFilter.value = "";
    el.marcaFilter.value = "";
    renderPieces();
  });
}

/* ----------------------------------------------------------
   5. MODAL
   ---------------------------------------------------------- */

function abrirModal(codigo) {
  const p = PRODUCTS.find(item => item.codigo === codigo);
  if (!p) return;

  el.modalLinha.textContent = p.linha;
  el.modalTitle.textContent = `${p.codigo} — ${p.descricao}`;

  const linhaSpec = (rotulo, valor) => valor
    ? `<tr><th>${rotulo}</th><td>${valor}</td></tr>`
    : "";

  el.modalBody.innerHTML = `
    <table class="spec-table">
      ${linhaSpec("Código EFORJA", p.codigo)}
      ${linhaSpec("Descrição", p.descricao)}
      ${linhaSpec("Linha", p.linha)}
      ${linhaSpec("Marcas atendidas", (p.marcas || []).join(", "))}
      ${linhaSpec("Veículos/Implementos atendidos", (p.veiculos || []).join(", "))}
      ${linhaSpec("Códigos correspondentes", (p.codigosCorrespondentes || []).join(", "))}
    </table>
  `;

  // Mensagem de cotação com código principal + primeira equivalência
  const equiv = (p.codigosCorrespondentes || [])[0];
  const texto = encodeURIComponent(
    `Olá! Gostaria de cotar a peça ${p.codigo} — ${p.descricao}` +
    (equiv ? ` (equivalência: ${equiv})` : "") +
    `. Linha: ${p.linha}.`
  );
  el.modalWhats.href = `https://wa.me/555137784500?text=${texto}`;

  el.backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  el.backdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function bindModal() {
  el.modalClose.addEventListener("click", fecharModal);
  el.modalFechar.addEventListener("click", fecharModal);
  el.backdrop.addEventListener("click", e => {
    if (e.target === el.backdrop) fecharModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharModal();
  });
}

/* ----------------------------------------------------------
   6. ROTEAMENTO E NAVEGAÇÃO
   ---------------------------------------------------------- */

function bindNav() {
  el.navToggle.addEventListener("click", () => {
    const aberto = el.mainNav.classList.toggle("open");
    el.navToggle.setAttribute("aria-expanded", String(aberto));
  });

  // Links do rodapé filtram por linha
  document.querySelectorAll("[data-linha]").forEach(link => {
    if (link.classList.contains("segment-card")) return;
    link.addEventListener("click", () => {
      const linha = link.dataset.linha;
      el.linhaFilter.value = linha;
      state.linha = linha;
      renderPieces();
    });
  });
}

/** Página de contato simples via hash (#/contato) */
function tratarRota() {
  const hash = window.location.hash;
  if (hash === "#/contato") {
    mostrarToast("Página de contato: (51) 3778.4500 — vendas@eletroforja.com.br");
  }
}

function mostrarToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  setTimeout(() => el.toast.classList.remove("show"), 4000);
}

/* ----------------------------------------------------------
   7. INICIALIZAÇÃO
   ---------------------------------------------------------- */

function init() {
  renderSegments();
  renderFiltersMarca();
  renderPieces();
  bindFilters();
  bindModal();
  bindNav();
  tratarRota();
  window.addEventListener("hashchange", tratarRota);
}

document.addEventListener("DOMContentLoaded", init);
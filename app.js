/* ==========================================================
   EFORJA — Catálogo de Peças Aftermarket
   app.js
   ========================================================== */

/* ----------------------------------------------------------
   1. DADOS
   ----------------------------------------------------------
   Cada objeto aceita:
     codigo                 → código EFORJA (string)
     descricao              → descrição da peça (string)
     linha                  → "Automotivo" | "Agrícola" | "Linha Amarela"
     marcas                 → array de marcas atendidas
     veiculos               → array de veículos/aplicações
     codigosCorrespondentes → array de códigos equivalentes
     galeria                → array de até 3 caminhos (vazio = placeholder)
   ---------------------------------------------------------- */

const PRODUCTS = [
  {
    codigo: "708.183",
    descricao: 'Anel de desgaste 2" - 3 furos',
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0025J01", "PRU-001"],
    galeria: [
      "img/pecas/708.183-1.jpg",
      "img/pecas/708.183-2.jpg",
      "img/pecas/708.183-3.jpg"
    ]
  },
  {
    codigo: "708.204",
    descricao: 'Anel de desgaste 2" - 4 furos',
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts"],
    veiculos: ["JSK 37CX"],
    codigosCorrespondentes: ["QR00214J01", "100000599774", "PRU-0342", "OL17101", "SK0059900"],
    galeria: []
  },
  {
    codigo: "708.184",
    descricao: 'Barra de Travamento 2"',
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX", "37CW", "37CWX"],
    codigosCorrespondentes: ["QR0024J01", "PRU-003", "TR010"],
    galeria: [
      "img/pecas/708.184-1.jpg",
      "img/pecas/708.184-2.jpg",
      "img/pecas/708.184-3.jpg"
    ]
  },
  {
    codigo: "708.185",
    descricao: 'Garra de Travamento 2" (Gavião)',
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts"],
    veiculos: ["JSK 37C", "JSK 37CX"],
    codigosCorrespondentes: ["QR0022J01", "PRU-009", "HT.GV.002"],
    galeria: []
  },
  {
    codigo: "708.230",
    descricao: 'Conj. Pino Rei 2" (Flange + Paraf.)',
    linha: "Automotivo",
    marcas: ["JOST"],
    veiculos: ['Quinta Roda 2"'],
    codigosCorrespondentes: ["PR00013J00", "260000085", "PRU-055.00"],
    galeria: []
  },
  {
    codigo: "708.231",
    descricao: "PARAF. SEXT. FLANG. M14X35MM - CL10.9",
    linha: "Automotivo",
    marcas: ["JOST", "FEY"],
    veiculos: ['Quinta Roda 2"'],
    codigosCorrespondentes: ["AD00567J70", "PRU-037.00", "809838"],
    galeria: []
  },
  {
    codigo: "708.186",
    descricao: 'Pino Rei 2"',
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts", "Uniferro", "Facchini"],
    veiculos: ['Quinta Roda 2"'],
    codigosCorrespondentes: ["PR00012J00", "260000080", "PRU-005"],
    galeria: [
      "img/pecas/708.186-1.jpg",
      "img/pecas/708.186-2.jpg",
      "img/pecas/708.186-3.jpg"
    ]
  },
  {
    codigo: "708.187",
    descricao: "Placa do Pino Rei 8 Furos",
    linha: "Automotivo",
    marcas: ["JOST", "Canaparts"],
    veiculos: ['Quinta Roda 2"', 'Quinta Roda 3.1/2"'],
    codigosCorrespondentes: ["PR00010J00", "PRU-006"],
    galeria: []
  },
  {
    codigo: "708.188",
    descricao: "Ponteira Giratória M48",
    linha: "Automotivo",
    marcas: ["JOST", "NBR 11410"],
    veiculos: ['Engate Automático 2"'],
    codigosCorrespondentes: ["100000160376", "PRU-017"],
    galeria: []
  },
  {
    codigo: "708.189",
    descricao: 'Pino do Engate Automático 2"',
    linha: "Automotivo",
    marcas: [],
    veiculos: ['Engate Automático 2"'],
    codigosCorrespondentes: [],
    galeria: []
  },
  {
    codigo: "708.190",
    descricao: "Porca Sextavada M48x86mm",
    linha: "Automotivo",
    marcas: ["SILPA"],
    veiculos: ['Engate Automático 2"'],
    codigosCorrespondentes: ["9870100294", "PRU.0559"],
    galeria: []
  },

  /* ---------- AGRÍCOLA ---------- */

  {
    codigo: "708.210",
    descricao: "Garfo Duplo ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "AGRALE", "CBT", "CNH", "JOHN DEERE"],
    veiculos: [
      "MF290", "MF292", "MF295", "MF297", "MF299",
      "MF610", "MF620", "MF630", "MF640", "MF1650",
      "BX 4.90", "BX 4.110", "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060", "CBT8020",
      "N.H. 7630", "N.H. 8030",
      "JD6300", "JD6600",
      "VALTRA 985", "VALTRA 1180", "VALTRA 985-TS"
    ],
    codigosCorrespondentes: [
      "7029310430", "7029010414", "0501398188", "034024",
      "6210209", "81109300", "DQ28540", "P021310"
    ],
    galeria: []
  },
  {
    codigo: "708.211",
    descricao: "Garfo curto ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "AGRALE", "CBT", "CNH", "JOHN DEERE"],
    veiculos: [
      "MF290", "MF292", "MF295", "MF297", "MF299",
      "MF610", "MF620", "MF630", "MF640", "MF1650",
      "BX 4.90", "BX 4.110", "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060", "CBT8020",
      "N.H. 7630", "N.H. 8030",
      "JD6300", "JD6600",
      "VALTRA 985", "VALTRA 1180", "VALTRA 985-TS"
    ],
    codigosCorrespondentes: [
      "0095236009", "0501398187", "034026", "027546R1",
      "6210214", "81343500", "81109900", "81109910",
      "DQ28542", "RLV103", "P02134"
    ],
    galeria: []
  },
  {
    codigo: "708.212",
    descricao: "Garfo longo ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "AGRALE", "CBT", "CNH", "JOHN DEERE"],
    veiculos: [
      "MF290", "MF292", "MF295", "MF297", "MF299",
      "MF610", "MF620", "MF630", "MF640", "MF1650",
      "BX 4.90", "BX 4.110", "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060", "CBT8020",
      "N.H. 7630", "N.H. 8030",
      "JD6300", "JD6600",
      "VALTRA 985", "VALTRA 1180", "VALTRA 985-TS"
    ],
    codigosCorrespondentes: [
      "0095236015", "0095236008", "0501398187", "034025",
      "027546R1", "6210214", "81343000", "81109700",
      "81109710", "DQ28541", "CQ50413", "84996793",
      "RLV104", "P02133"
    ],
    galeria: []
  },
  {
    codigo: "708.213",
    descricao: "Pino do Mancal ZF345/350",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "AGRALE", "CBT", "CNH", "JOHN DEERE"],
    veiculos: [
      "MF290", "MF292", "MF295", "MF297", "MF299",
      "MF610", "MF620", "MF630", "MF640", "MF1650",
      "BX 4.90", "BX 4.110", "BX 4.130",
      "Deutz AX 4.150",
      "CBT8060", "CBT8020",
      "N.H. 7630", "N.H. 8030",
      "JD6300", "JD6600",
      "VALTRA 985", "VALTRA 1180", "VALTRA 985-TS"
    ],
    codigosCorrespondentes: [
      "4472353195", "3176321M1", "9579265", "CQ27251", "KPTR180", "P03082"
    ],
    galeria: []
  },
  {
    codigo: "708.229",
    descricao: "Garfo Duplo ZF355",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "JOHN DEERE"],
    veiculos: [
      "MF250", "MF265", "MF275", "MF281", "MF283",
      "MF5275", "MF5285", "MF5290", "MF5650",
      "MF AX4.90", "VALTRA 785",
      "JD5285", "JD5290"
    ],
    codigosCorrespondentes: [
      "7029310230", "7029010214", "3604086M1", "040974R1",
      "6230071M1", "81109200", "CQ32601", "144464A1",
      "85827070", "RGF701"
    ],
    galeria: []
  },
  {
    codigo: "708.227",
    descricao: "Garfo curto ZF345",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "JOHN DEERE"],
    veiculos: [
      "MF250", "MF265", "MF275", "MF281", "MF283",
      "MF5275", "MF5285", "MF5290", "MF5650",
      "MF AX4.90", "VALTRA 785",
      "JD5285", "JD5290"
    ],
    codigosCorrespondentes: [
      "0095236010", "0095236004", "3604080M1", "81109600",
      "81109800", "86431700", "CQ32602", "DQ29376",
      "DQ29377", "81622800", "P02132", "RLV101"
    ],
    galeria: []
  },
  {
    codigo: "708.228",
    descricao: "Garfo longo ZF345",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "JOHN DEERE"],
    veiculos: [
      "MF250", "MF265", "MF275", "MF281", "MF283",
      "MF5275", "MF5285", "MF5290", "MF5650",
      "MF AX4.90", "VALTRA 785",
      "JD5285", "JD5290"
    ],
    codigosCorrespondentes: [
      "0095236016", "0095236011", "3604081M1", "81109600",
      "81109800", "DQ29377", "CQ50407", "DQ29376", "RLV102"
    ],
    galeria: []
  },
  {
    codigo: "708.226",
    descricao: "Pivô do Mancal ZF335",
    linha: "Agrícola",
    marcas: ["ZF", "AGCO", "VALTRA", "JOHN DEERE"],
    veiculos: [
      "MF250", "MF265", "MF275", "MF281", "MF283",
      "MF5275", "MF5285", "MF5290", "MF5650",
      "MF AX4.90", "VALTRA 785",
      "JD5285", "JD5290"
    ],
    codigosCorrespondentes: [
      "4472352162", "4472352062", "033725R1", "80296100",
      "81305C1", "81305C2", "83949007", "83949046",
      "83946018", "L61209", "L60086", "KPTR070"
    ],
    galeria: []
  },
  {
    codigo: "708.240",
    descricao: "Garfo Duplo Carraro 20.18",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "VALTRA", "JOHN DEERE", "NEW HOLLAND"],
    veiculos: [
      "MF283", "MF290", "MF292", "MF610", "MF640",
      "MF250", "MF265", "MF275", "MF281",
      "MF5275", "MF5285", "MF5290",
      "VALTRA 685", "VALTRA 700", "VALTRA 785", "VALTRA 800",
      "VALTRA BL66", "VALTRA BL77", "VALTRA BL88",
      "VALTRA 600", "VALTRA 900",
      "JD 5403", "JD 5600", "JD 5605", "JD 5700", "JD 5705",
      "NH 5610", "NH 5630", "NH 6610", "NH 6630", "NH 7610", "NH 7630"
    ],
    codigosCorrespondentes: [
      "046430", "040974R1", "6230071M1", "CAR519056", "85805995", "87760408"
    ],
    galeria: []
  },
  {
    codigo: "708.241",
    descricao: "Garfo Curto Carraro 20.18",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "VALTRA", "JOHN DEERE", "NEW HOLLAND"],
    veiculos: [
      "MF283", "MF290", "MF292", "MF610", "MF640",
      "MF250", "MF265", "MF275", "MF281",
      "MF5275", "MF5285", "MF5290",
      "VALTRA 685", "VALTRA 700", "VALTRA 785", "VALTRA 800",
      "VALTRA BL66", "VALTRA BL77", "VALTRA BL88",
      "VALTRA 600", "VALTRA 900",
      "JD 5403", "JD 5600", "JD 5605", "JD 5700", "JD 5705",
      "NH 5610", "NH 5630", "NH 6610", "NH 6630", "NH 7610", "NH 7630"
    ],
    codigosCorrespondentes: [
      "046428", "040973R1", "6230074M1", "VA046428", "706016", "36163"
    ],
    galeria: []
  },
  {
    codigo: "708.242",
    descricao: "Garfo Longo Carraro 20.18",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "VALTRA", "JOHN DEERE", "NEW HOLLAND"],
    veiculos: [
      "MF283", "MF290", "MF292", "MF610", "MF640",
      "MF250", "MF265", "MF275", "MF281",
      "MF5275", "MF5285", "MF5290",
      "VALTRA 685", "VALTRA 700", "VALTRA 785", "VALTRA 800",
      "VALTRA BL66", "VALTRA BL77", "VALTRA BL88",
      "VALTRA 600", "VALTRA 900",
      "JD 5403", "JD 5600", "JD 5605", "JD 5700", "JD 5705",
      "NH 5610", "NH 5630", "NH 6610", "NH 6630", "NH 7610", "NH 7630"
    ],
    codigosCorrespondentes: [
      "040888", "040972R1", "247543A1", "81881C2",
      "AS99411", "85827069", "84990206", "10409"
    ],
    galeria: []
  },
  {
    codigo: "708.243",
    descricao: "Pivô do Mancal Sup. Carraro 20.18",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "VALTRA", "JOHN DEERE", "NEW HOLLAND"],
    veiculos: [
      "MF283", "MF290", "MF292", "MF610", "MF640",
      "MF250", "MF265", "MF275", "MF281",
      "MF5275", "MF5285", "MF5290",
      "VALTRA 685", "VALTRA 700", "VALTRA 785", "VALTRA 800",
      "VALTRA BL66", "VALTRA BL77", "VALTRA BL88",
      "VALTRA 600", "VALTRA 900",
      "JD 5403", "JD 5600", "JD 5605", "JD 5700", "JD 5705",
      "NH 5610", "NH 5630", "NH 6610", "NH 6630", "NH 7610", "NH 7630"
    ],
    codigosCorrespondentes: [
      "128880", "041066R1", "041066R", "9968023", "NH9968023", "VA041066"
    ],
    galeria: []
  },
  {
    codigo: "708.244",
    descricao: "Pivô do Mancal Inf. Carraro 20.18",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "VALTRA", "JOHN DEERE", "NEW HOLLAND"],
    veiculos: [
      "MF283", "MF290", "MF292", "MF610", "MF640",
      "MF250", "MF265", "MF275", "MF281",
      "MF5275", "MF5285", "MF5290",
      "VALTRA 685", "VALTRA 700", "VALTRA 785", "VALTRA 800",
      "VALTRA BL66", "VALTRA BL77", "VALTRA BL88",
      "VALTRA 600", "VALTRA 900",
      "JD 5403", "JD 5600", "JD 5605", "JD 5700", "JD 5705",
      "NH 5610", "NH 5630", "NH 6610", "NH 6630", "NH 7610", "NH 7630"
    ],
    codigosCorrespondentes: [
      "128881", "041068R1", "043132", "3475348", "3541419M1",
      "3785490M1", "34051800", "V34051800", "85805983", "51335984",
      "82850292", "122259A1", "KPTR554A", "086190566M1"
    ],
    galeria: []
  },
  {
    codigo: "708.245",
    descricao: "Garfo Duplo Carraro 20.14",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "NEW HOLLAND", "CASE", "JOHN DEERE"],
    veiculos: [
      "Case 580L", "Case 580 Super L", "Case 580M", "Case 580 Super M",
      "Case 580N", "Case 570LXT", "Case 570MXT", "Case 570T", "Case 570ST",
      "Case 580SR", "Case 590SR", "Case 585G", "Case 586G", "Case 588G",
      "NH LB75", "NH LB75.B", "NH LB75CP", "NH LB90", "NH LB90.B",
      "NH LB95", "NH LB110", "NH LB110.B",
      "NH B90B", "NH B95B", "NH B95BLR", "NH B95BTC", "NH B95LR", "NH B95TC",
      "NH B100B", "NH B110", "NH B110B", "NH LV80",
      "NH U80", "NH U80B", "NH U80C",
      "Fiatallis FB80.2", "Fiatallis FB80.3", "Fiatallis FB80.4", "Fiatallis FB100.2",
      "Randon RK406", "Randon RK406B",
      "MF 275 Advanced", "MF 283 Advanced", "MF 4275",
      "Case IH MX80C", "Case IH MX90C", "Case IH MX100", "Case IH MX100C",
      "Case IH MX110", "Case IH MX120", "Case IH MX135",
      "Case IH 5120", "Case IH 5130", "Case IH 5140", "Case IH 5150",
      "Case IH 5220", "Case IH 5230", "Case IH 5240", "Case IH 5250",
      "JD 5320", "JD 5420", "JD 5425", "JD 5520"
    ],
    codigosCorrespondentes: [
      "85827070", "068813R1", "85805995", "87772059", "87760408",
      "CAR46196", "046196", "CAR40826", "40826", "CAR519056",
      "144464A1", "195213A1", "247544A1", "81880C1", "81882C1",
      "81874741", "390029A1", "144461A1", "R212901", "HA85827070",
      "74029000", "85827069", "85805994", "48686", "87306930",
      "85805997", "144463A1", "219001013", "87306929", "48685",
      "87710152", "048685", "85807283", "85805996", "144465A1",
      "HCZ117", "9968059", "87306931", "81109400", "144489",
      "040971R1", "CAR126409", "RCA165", "644821", "061345R1",
      "061344R1", "061346R1", "061347R1", "061348R1"
    ],
    galeria: []
  },
  {
    codigo: "708.246",
    descricao: "Garfo curto 1ª ger. Carraro 20.14",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "NEW HOLLAND", "CASE", "JOHN DEERE"],
    veiculos: [
      "Case 580L", "Case 580 Super L", "Case 580M", "Case 580 Super M",
      "Case 580N", "Case 570L", "Case 570LXT", "Case 570MXT", "Case 570NXT",
      "Case 585G", "Case 586G", "Case 586H", "Case 588G", "Case 588H",
      "NH LB75", "NH LB75.B", "NH LB75CP", "NH LB90", "NH LB90.B",
      "NH LB95", "NH LB110", "NH LB110.B",
      "NH LV80", "NH U80", "NH U80B", "NH U80C",
      "Fiatallis FB80.2", "Fiatallis FB80.3", "Fiatallis FB80.4", "Fiatallis FB100.2",
      "Randon RK406", "Randon RK406B",
      "MF 275 Advanced", "MF 283 Advanced", "MF 4275"
    ],
    codigosCorrespondentes: [
      "85802997", "66535R1", "144463A1", "46254", "090005925",
      "33742630", "133742630", "33-742-630", "6005018329", "852041288",
      "390028A1", "219001013", "8012103553001", "6266573M1"
    ],
    galeria: []
  },
  {
    codigo: "708.247",
    descricao: "Garfo curto 2ª ger. Carraro 20.14",
    linha: "Agrícola",
    marcas: ["CARRARO", "CASE", "NEW HOLLAND"],
    veiculos: [
      "NH LB75", "NH LB75.B", "NH LB75B", "NH LB90", "NH LB90.B", "NH LB90B",
      "NH LB95", "NH LB95B", "NH LB110", "NH LB110.B",
      "NH B90", "NH B90B", "NH B95", "NH B95B", "NH B95BLR", "NH B95BTC",
      "NH B95LR", "NH B95TC", "NH B100B",
      "NH B110", "NH B110 TIER 3", "NH B110B", "NH B75D",
      "Case 580SR",
      "Fiatallis FB100.2", "Fiatallis FB100-2", "Fiatallis FB100"
    ],
    codigosCorrespondentes: [
      "87306929", "87710152", "48685", "048685", "CAR0048685",
      "30-048-685", "30-046-254", "219001013"
    ],
    galeria: []
  },
  {
    codigo: "708.248",
    descricao: "Garfo longo Carraro 20.14",
    linha: "Agrícola",
    marcas: ["CARRARO", "CNH", "NEW HOLLAND"],
    veiculos: [
      "NH L90",
      "Case 580L", "Case 580 Super L", "Case 580M", "Case 580 Super M",
      "Case 580N", "Case 570L", "Case 570LXT", "Case 570MXT", "Case 570NXT",
      "Case 585G", "Case 586G", "Case 586H", "Case 588G", "Case 588H",
      "NH LB75", "NH LB75.B", "NH LB75CP", "NH LB90", "NH LB90.B",
      "NH LB95", "NH LB110", "NH LB110.B",
      "NH LV80", "NH U80", "NH U80B", "NH U80C",
      "Fiatallis FB80.2", "Fiatallis FB80.3", "Fiatallis FB80.4", "Fiatallis FB100.2",
      "Randon RK406", "Randon RK406B",
      "MF 275 Advanced", "MF 283 Advanced", "MF 4275"
    ],
    codigosCorrespondentes: [
      "85827069", "85805994", "87306930", "48686", "048686", "CAR0048686"
    ],
    galeria: []
  },
  {
    codigo: "708.249",
    descricao: "Pivô do Mancal Sup. Carraro 20.14",
    linha: "Agrícola",
    marcas: ["CARRARO", "AGCO", "CNH", "JOHN DEERE", "RANDON"],
    veiculos: ["Case 580L", "RD-406"],
    codigosCorrespondentes: [
      "128904", "CAR128904", "061297R1", "061297", "85805980", "RE57471"
    ],
    galeria: []
  },
  {
    codigo: "708.250",
    descricao: "Pivô do Mancal Inf. Carraro 20.14",
    linha: "Agrícola",
    marcas: ["NEW HOLLAND", "JCB", "JOHN DEERE", "KOMATSU", "MANITOU", "VOLVO", "CASE"],
    veiculos: [
      "Case 580", "Case 590", "Case 585G", "Case 586G",
      "JCB 504B", "JCB 520",
      "JD 410E", "JD 210", "JD 310", "JD 315", "JD 410G",
      "NH 555E", "NH 575E", "NH 655E", "NH 675E",
      "NH B95", "NH B110", "NH LB7", "NH LB9", "NH LB110",
      "VOLVO BL60", "VOLVO BL61"
    ],
    codigosCorrespondentes: [
      "128903", "85805983", "905637", "RE57472",
      "CA0128903", "4102634A", "11988562"
    ],
    galeria: []
  }
];

/* Linhas de segmento exibidas no topo do catálogo */
const SEGMENTS = [
  {
    linha: "Automotivo",
    descricao: "Componentes forjados para veículos leves e pesados, implementos rodoviários e sistemas de transmissão.",
    imagem: "img/segmento/quinta_roda.jpg"
  },
  {
    linha: "Agrícola",
    descricao: "Peças forjadas para tratores, colheitadeiras, plantadeiras e implementos agrícolas.",
    imagem: "img/segmento/trator.jpg"
  },
  {
    linha: "Linha Amarela",
    descricao: "Componentes para máquinas de construção, mineração, movimentação de carga e equipamentos pesados.",
    imagem: "img/segmento/amarela.jpg"
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
  segmentsGrid:    document.getElementById("segmentsGrid"),
  piecesGrid:      document.getElementById("piecesGrid"),
  emptyState:      document.getElementById("emptyState"),
  resultsCount:    document.getElementById("resultsCount"),
  searchInput:     document.getElementById("searchInput"),
  linhaFilter:     document.getElementById("linhaFilter"),
  marcaFilter:     document.getElementById("marcaFilter"),
  clearFilters:    document.getElementById("clearFilters"),
  navToggle:       document.getElementById("navToggle"),
  mainNav:         document.getElementById("mainNav"),
  backdrop:        document.getElementById("modalBackdrop"),
  modalBody:       document.getElementById("modalBody"),
  modalTitle:      document.getElementById("modalTitle"),
  modalLinha:      document.getElementById("modalLinha"),
  modalClose:      document.getElementById("modalClose"),
  modalFechar:     document.getElementById("modalFechar"),
  modalWhats:      document.getElementById("modalWhats"),
  sobreBackdrop:   document.getElementById("sobreBackdrop"),
  sobreClose:      document.getElementById("sobreClose"),
  sobreFechar:     document.getElementById("sobreFechar"),
  contatoBackdrop: document.getElementById("contatoBackdrop"),
  contatoClose:    document.getElementById("contatoClose"),
  contatoFechar:   document.getElementById("contatoFechar"),
  toast:           document.getElementById("toastBox")
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

/** Monta a galeria de 3 slides com navegação manual */
function buildGallery(piece) {
  const slides = [0, 1, 2].map(i => {
    const src = piece.galeria && piece.galeria[i];

    if (src) {
      return `<div class="gallery-slide">
                <img src="${src}" alt="${piece.descricao} - foto ${i + 1}"
                     data-slide="${i + 1}" class="gallery-img">
              </div>`;
    }

    return `<div class="gallery-slide">
              <div class="gallery-slide-empty">${GEAR_SVG}<span>Foto ${i + 1}</span></div>
            </div>`;
  }).join("");

  const dots = `<div class="gallery-dots">
                  <button class="active-dot" data-dot="0" aria-label="Foto 1"></button>
                  <button data-dot="1" aria-label="Foto 2"></button>
                  <button data-dot="2" aria-label="Foto 3"></button>
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

  /* Fallback das imagens: se a foto não carregar, mostra o placeholder */
  el.piecesGrid.querySelectorAll('[data-slide]').forEach(img => {
    img.addEventListener("error", () => {
      const indice = img.dataset.slide;
      img.parentNode.innerHTML =
        '<div class="gallery-slide-empty">' + GEAR_SVG +
        '<span>Foto ' + indice + '</span></div>';
    });
  });

  bindGaleria();

  el.emptyState.hidden = lista.length > 0;
  el.resultsCount.textContent =
    `${lista.length} ${lista.length === 1 ? "peça encontrada" : "peças encontradas"}`;

  el.piecesGrid.querySelectorAll(".piece-card").forEach(card => {
    const abrir = () => abrirModal(card.dataset.codigo);
    card.addEventListener("click", abrir);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(); }
    });
  });
}

/** Popula o select de marcas a partir dos dados */
function renderFiltersMarca() {
  const marcas = [...new Set(PRODUCTS.flatMap(p => p.marcas || []))]
    .filter(Boolean)
    .sort();

  el.marcaFilter.innerHTML =
    `<option value="">Todas as marcas</option>` +
    marcas.map(m => `<option value="${m}">${m}</option>`).join("");
}

/* ----------------------------------------------------------
   3.1 NAVEGAÇÃO DA GALERIA (manual)
   ---------------------------------------------------------- */

/** Move o carrossel para o slide indicado e atualiza os dots */
function irParaSlide(card, indice) {
  const track = card.querySelector(".gallery-track");
  const dots  = card.querySelectorAll(".gallery-dots button");
  if (!track) return;

  track.style.transform = `translateX(-${indice * 33.3333}%)`;
  dots.forEach((d, i) => d.classList.toggle("active-dot", i === indice));
  card.dataset.slideAtual = indice;
}

/** Liga os cliques nos dots de todas as peças renderizadas */
function bindGaleria() {
  el.piecesGrid.querySelectorAll(".piece-card").forEach(card => {
    card.dataset.slideAtual = 0;

    card.querySelectorAll(".gallery-dots button").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();               // não abre o modal ao trocar de foto
        irParaSlide(card, Number(btn.dataset.dot));
      });
    });
  });
}

/* ----------------------------------------------------------
   4. BUSCA E FILTROS
   ---------------------------------------------------------- */

function filtrarPecas(lista) {
  const termo = state.busca.trim().toLowerCase();

  return lista.filter(p => {
    if (state.linha && p.linha !== state.linha) return false;
    if (state.marca && !(p.marcas || []).includes(state.marca)) return false;
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
   5. MODAL DE PEÇA
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
    </table>`;

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
   5.2 MODAL SOBRE
   ---------------------------------------------------------- */

function abrirSobre() {
  el.sobreBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharSobre() {
  el.sobreBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function bindSobre() {
  const link = document.getElementById("linkSobre");
  if (link) {
    link.addEventListener("click", e => {
      e.preventDefault();
      abrirSobre();
    });
  }

  if (el.sobreClose)  el.sobreClose.addEventListener("click", fecharSobre);
  if (el.sobreFechar) el.sobreFechar.addEventListener("click", fecharSobre);

  if (el.sobreBackdrop) {
    el.sobreBackdrop.addEventListener("click", e => {
      if (e.target === el.sobreBackdrop) fecharSobre();
    });
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharSobre();
  });
}

/* ----------------------------------------------------------
   5.3 MODAL CONTATO
   ---------------------------------------------------------- */

function abrirContato() {
  el.contatoBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharContato() {
  el.contatoBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function bindContato() {
  const link = document.getElementById("linkContato");
  if (link) {
    link.addEventListener("click", e => {
      e.preventDefault();
      abrirContato();
    });
  }

  if (el.contatoClose)  el.contatoClose.addEventListener("click", fecharContato);
  if (el.contatoFechar) el.contatoFechar.addEventListener("click", fecharContato);

  if (el.contatoBackdrop) {
    el.contatoBackdrop.addEventListener("click", e => {
      if (e.target === el.contatoBackdrop) fecharContato();
    });
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fecharContato();
  });
}

/* ----------------------------------------------------------
   6. NAVEGAÇÃO
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

/* ----------------------------------------------------------
   7. INICIALIZAÇÃO
   ---------------------------------------------------------- */

function init() {
  renderSegments();
  renderFiltersMarca();
  renderPieces();
  bindFilters();
  bindModal();
  bindSobre();
  bindContato();
  bindNav();
}

document.addEventListener("DOMContentLoaded", init);
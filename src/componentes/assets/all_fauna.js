import Swiftia from "./10Swiftia_comauensis.png";
import Aegla from "./11Aegla_denticulata.png";
import Paraholopterus from "./11Paraholopterus_nahuelbutensis.png";
import Alsodes from "./13Alsodes_laevis.png";
import norae from "./14Alsodes:norae.png";
import condorito from "./13Euathlus_condorito.png";
import eulidia from "./15Eulidia_yarrellii.png";
import orestia from "./15Orestiaspiacotensis.png";
import vociferator from "./16Phymaturus_vociferator.png";

let all_fauna = [
  {
    id: 1,
    ncomun: "Cachudito",
    nombreCientifico: "Anairetes parulus",
    estado: "Preocupación menor",
    medida: "10-11 cm",
    masa: "8-9 g",
    descripcion:
      "El cachudito es un pequeño pájaro que se encuentra en las regiones de Atacama, Coquimbo y Valparaíso. Es conocido por su distintivo penacho en la cabeza.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Atacama", "Coquimbo", "Valparaíso"],
    parques: [
      "Parque Nacional Llanos de Challe",
      "Parque Nacional Pan de Azúcar",
      "Parque Nacional Bosque de Fray Jorge",
      "Parque Nacional La Campana",
    ],
  },
  {
    id: 2,
    ncomun: "Sapo de Darwin",
    nombreCientifico: "Rhinoderma darwinii",
    estado: "Vulnerable",
    medida: "3-4 cm",
    masa: "2-5 g",
    descripcion:
      "El sapo de Darwin es una especie de anfibio que habita en las regiones de Los Ríos y Los Lagos. Es conocido por su método único de reproducción, donde los machos incuban los huevos en su boca.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Los Ríos", "Los Lagos"],
    parques: [
      "Parque Nacional Alerce Costero",
      "Parque Nacional Chiloé",
      "Parque Nacional Puyehue",
    ],
  },
  {
    id: 3,
    ncomun: "Degú",
    nombreCientifico: "Octodon degus",
    estado: "Preocupación menor",
    medida: "25-31 cm",
    masa: "170-300 g",
    descripcion:
      "El degú es un roedor que se encuentra en las regiones de Valparaíso, Metropolitana y O'Higgins. Es un animal social que vive en colonias.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Valparaíso", "Metropolitana", "O'Higgins"],
    parques: [
      "Parque Nacional La Campana",
      "Parque Nacional Río Clarillo",
      "Reserva Nacional Roblería del Cobre de Loncha",
    ],
  },
  {
    id: 4,
    ncomun: "Comadrejita trompuda",
    nombreCientifico: "Thylamys elegans",
    estado: "Preocupación menor",
    medida: "9-13 cm",
    masa: "15-40 g",
    descripcion:
      "La comadrejita trompuda es un pequeño marsupial que habita en las regiones de Coquimbo y Valparaíso. Es nocturna y se alimenta de insectos y pequeños vertebrados.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Coquimbo", "Valparaíso"],
    parques: [
      "Parque Nacional Bosque de Fray Jorge",
      "Parque Nacional La Campana",
    ],
  },
  {
    id: 5,
    ncomun: "Lagartija chilena",
    nombreCientifico: "Liolaemus chiliensis",
    estado: "Preocupación menor",
    medida: "15-20 cm",
    masa: "10-20 g",
    descripcion:
      "La lagartija chilena es un reptil que se encuentra en las regiones de Valparaíso, Metropolitana y O'Higgins. Es conocida por su capacidad de cambiar de color para camuflarse.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Valparaíso", "Metropolitana", "O'Higgins"],
    parques: [
      "Parque Nacional La Campana",
      "Parque Nacional Río Clarillo",
      "Reserva Nacional Roblería del Cobre de Loncha",
    ],
  },
  {
    id: 6,
    ncomun: "Pez de Lirima",
    nombreCientifico: "Pseudorestias lirimensis",
    estado: "En peligro crítico",
    medida: "5-7 cm",
    masa: "Desconocido",
    descripcion:
      "Este pequeño pez de agua dulce es endémico del río Lirima en la región de Tarapacá.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Tarapacá"],
    parques: ["Parque Nacional Volcán Isluga"],
  },
  {
    id: 7,
    ncomun: "Sapo de Chusmisa",
    nombreCientifico: "Telmatobius chusmisensis",
    estado: "En peligro",
    medida: "5-7 cm",
    masa: "Desconocido",
    descripcion:
      "Un sapo acuático que se encuentra en las aguas termales de Chusmisa en la región de Tarapacá.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Tarapacá"],
    parques: ["Parque Nacional Volcán Isluga"],
  },
  {
    id: 8,
    ncomun: "Orestias de Gloria",
    nombreCientifico: "Orestias gloriae",
    estado: "En peligro",
    medida: "10-12 cm",
    masa: "Desconocido",
    descripcion:
      "Pez de agua dulce que habita en el altiplano chileno, especialmente en la región de Tarapacá.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Tarapacá"],
    parques: ["Parque Nacional Volcán Isluga"],
  },
  {
    id: 9,
    ncomun: "Sapo de Vilama",
    nombreCientifico: "Telmatobius vilamensis",
    estado: "Vulnerable",
    medida: "5-7 cm",
    masa: "Desconocido",
    descripcion:
      "Este sapo acuático habita en las aguas termales de Vilama en la región de Antofagasta.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Antofagasta"],
    parques: ["Parque Nacional Llullaillaco"],
  },
  {
    id: 10,
    ncomun: "Tarántula de Atacama",
    nombreCientifico: "Euathlus atacama",
    estado: "Preocupación menor",
    medida: "5-6 cm",
    masa: "Desconocido",
    descripcion:
      "Tarántula que se encuentra en el desierto de Atacama, en la región de Antofagasta.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Antofagasta"],
    parques: ["Parque Nacional Llullaillaco", "Reserva Nacional La Chimba"],
  },
  {
    id: 11,
    ncomun: "Escorpión de Philippi",
    nombreCientifico: "Brachistosternus philippii",
    estado: "Preocupación menor",
    medida: "4-6 cm",
    masa: "Desconocido",
    descripcion:
      "Escorpión que habita en el desierto de Atacama, especialmente en la región de Atacama.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Atacama"],
    parques: [
      "Parque Nacional Pan de Azúcar",
      "Parque Nacional Llanos de Challe",
    ],
  },
  {
    id: 12,
    ncomun: "Escarabajo Barrigai",
    nombreCientifico: "Ectinogonia barrigai",
    estado: "Datos insuficientes",
    medida: "2-3 cm",
    masa: "Desconocido",
    descripcion:
      "Escarabajo endémico del norte de Chile, encontrado en la región de Antofagasta.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Antofagasta"],
    parques: ["Parque Nacional Llullaillaco", "Reserva Nacional La Chimba"],
  },
  {
    id: 13,
    ncomun: "Escarabajo Medvedevi",
    nombreCientifico: "Praocis medvedevi",
    estado: "Datos insuficientes",
    medida: "1-2 cm",
    masa: "Desconocido",
    descripcion:
      "Escarabajo encontrado en el desierto de Atacama, región de Antofagasta.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Antofagasta"],
    parques: ["Parque Nacional Llullaillaco", "Reserva Nacional La Chimba"],
  },
  {
    id: 14,
    ncomun: "Cnemalobus de Pegna",
    nombreCientifico: "Cnemalobus pegnai",
    estado: "Datos insuficientes",
    medida: "1-2 cm",
    masa: "Desconocido",
    descripcion: "Escarabajo endémico de la región de Coquimbo.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Coquimbo"],
    parques: [
      "Parque Nacional Bosque de Fray Jorge",
      "Parque Nacional Pan de Azúcar",
    ],
  },
  {
    id: 15,
    ncomun: "Lagartija cabeza negra",
    nombreCientifico: "Liolaemus nigroviridis",
    estado: "Vulnerable",
    medida: "15-20 cm",
    masa: "Desconocido",
    descripcion:
      "Lagartija que se encuentra en las regiones de Valparaíso y Metropolitana.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Valparaíso", "Metropolitana"],
    parques: ["Parque Nacional La Campana", "Parque Nacional Río Clarillo"],
  },
  {
    id: 16,
    ncomun: "Chincol",
    nombreCientifico: "Zonotrichia capensis",
    estado: "Preocupación menor",
    medida: "12-15 cm",
    masa: "20-25 g",
    descripcion:
      "Pajarito muy común en las zonas urbanas y rurales de Chile. Se encuentra en todo el país.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Todo Chile"],
    parques: [
      "Parque Nacional Torres del Paine",
      "Parque Nacional Alerce Andino",
      "Parque Nacional Vicente Pérez Rosales",
    ],
  },
];

export default all_fauna;

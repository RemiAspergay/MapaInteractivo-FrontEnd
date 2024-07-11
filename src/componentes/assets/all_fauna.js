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
    ncomun: "Pseudorestias",
    nombreCientifico: "Pseudorestias lirimensis",
    estado: "Datos insuficientes",
    medida: "5-10 cm",
    masa: "10-15 g",
    descripcion: "Pez endémico de áreas específicas en Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Atacama"],
    parques: ["Parque Nacional Llanos de Challe"],
  },
  {
    id: 2,
    ncomun: "Telmatobius",
    nombreCientifico: "Telmatobius chusmisensis",
    estado: "En peligro",
    medida: "6-8 cm",
    masa: "30-40 g",
    descripcion: "Rana que habita en zonas específicas de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Antofagasta"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 3,
    ncomun: "Orestias",
    nombreCientifico: "Orestias gloriae",
    estado: "Vulnerable",
    medida: "4-6 cm",
    masa: "5-10 g",
    descripcion: "Pez endémico de cuerpos de agua específicos en Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Tarapacá"],
    parques: ["Parque Nacional Volcán Isluga"],
  },
  {
    id: 4,
    ncomun: "Telmatobius",
    nombreCientifico: "Telmatobius vilamensis",
    estado: "En peligro crítico",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Rana que se encuentra en áreas restringidas de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Arica y Parinacota"],
    parques: ["Parque Nacional Lauca"],
  },
  {
    id: 5,
    ncomun: "Tarántula",
    nombreCientifico: "Euathlus atacama",
    estado: "Preocupación menor",
    medida: "15-20 cm",
    masa: "30-50 g",
    descripcion: "Araña tarántula que habita en el desierto de Atacama.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Atacama"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 6,
    ncomun: "Escorpión",
    nombreCientifico: "Brachistosternus philippii",
    estado: "Datos insuficientes",
    medida: "5-7 cm",
    masa: "10-15 g",
    descripcion: "Escorpión que habita en regiones desérticas de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Antofagasta"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 7,
    ncomun: "Escarabajo",
    nombreCientifico: "Ectinogonia barrigai",
    estado: "Preocupación menor",
    medida: "2-3 cm",
    masa: "2-3 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 8,
    ncomun: "Escarabajo",
    nombreCientifico: "Praocis medvedevi",
    estado: "Datos insuficientes",
    medida: "3-4 cm",
    masa: "3-4 g",
    descripcion: "Escarabajo que habita en zonas específicas de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Atacama"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 9,
    ncomun: "Escarabajo",
    nombreCientifico: "Cnemalobus pegnai",
    estado: "Preocupación menor",
    medida: "1-2 cm",
    masa: "1-2 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional La Campana"],
  },
  {
    id: 10,
    ncomun: "Lagarto",
    nombreCientifico: "Liolaemus melaniceps",
    estado: "Preocupación menor",
    medida: "8-10 cm",
    masa: "15-20 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 11,
    ncomun: "Cangrejo",
    nombreCientifico: "Aegla papudo",
    estado: "Preocupación menor",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Cangrejo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional La Campana"],
  },
  {
    id: 12,
    ncomun: "Tarántula",
    nombreCientifico: "Euathlus parvulus",
    estado: "Preocupación menor",
    medida: "10-15 cm",
    masa: "25-35 g",
    descripcion: "Tarántula que habita en el norte de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Arica y Parinacota"],
    parques: ["Parque Nacional Lauca"],
  },
  {
    id: 13,
    ncomun: "Escarabajo",
    nombreCientifico: "Callisphyris ficheti",
    estado: "Preocupación menor",
    medida: "2-3 cm",
    masa: "2-3 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de O'Higgins"],
    parques: ["Parque Nacional Radal Siete Tazas"],
  },
  {
    id: 14,
    ncomun: "Lagarto",
    nombreCientifico: "Phymaturus alicahuense",
    estado: "Preocupación menor",
    medida: "8-12 cm",
    masa: "20-25 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 15,
    ncomun: "Escarabajo",
    nombreCientifico: "Sclerostomulus nitidus",
    estado: "Preocupación menor",
    medida: "1-2 cm",
    masa: "1-2 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional La Campana"],
  },
  {
    id: 16,
    ncomun: "Escarabajo",
    nombreCientifico: "Callyntra hibrida",
    estado: "Preocupación menor",
    medida: "1-2 cm",
    masa: "1-2 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Atacama"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 17,
    ncomun: "Lagarto",
    nombreCientifico: "Liolaemus confusus",
    estado: "Preocupación menor",
    medida: "8-10 cm",
    masa: "15-20 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 18,
    ncomun: "Mosca",
    nombreCientifico: "Nigroperla costalis",
    estado: "Preocupación menor",
    medida: "0.5-1 cm",
    masa: "0.1-0.2 g",
    descripcion: "Mosca endémica de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional La Campana"],
  },
  {
    id: 19,
    ncomun: "Lagarto",
    nombreCientifico: "Liolaemus curis",
    estado: "Preocupación menor",
    medida: "8-10 cm",
    masa: "15-20 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 20,
    ncomun: "Rana",
    nombreCientifico: "Rhinoderma rufum",
    estado: "En peligro crítico",
    medida: "3-5 cm",
    masa: "5-7 g",
    descripcion: "Rana endémica de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de La Araucanía"],
    parques: ["Parque Nacional Huerquehue"],
  },
  {
    id: 21,
    ncomun: "Rana",
    nombreCientifico: "Alsodes vittatus",
    estado: "Vulnerable",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Rana que habita en áreas específicas de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Los Lagos"],
    parques: ["Parque Nacional Vicente Pérez Rosales"],
  },
  {
    id: 22,
    ncomun: "Araña",
    nombreCientifico: "Acanthogonatus hualpen",
    estado: "Preocupación menor",
    medida: "2-3 cm",
    masa: "3-5 g",
    descripcion: "Araña endémica de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región del Biobío"],
    parques: ["Parque Nacional Nonguén"],
  },
  {
    id: 23,
    ncomun: "Escarabajo",
    nombreCientifico: "Chiasognathus jousselini",
    estado: "Preocupación menor",
    medida: "5-6 cm",
    masa: "10-15 g",
    descripcion: "Escarabajo endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Los Ríos"],
    parques: ["Parque Nacional Alerce Costero"],
  },
  {
    id: 24,
    ncomun: "Lagarto",
    nombreCientifico: "Liolaemus hermannunezi",
    estado: "Preocupación menor",
    medida: "8-10 cm",
    masa: "15-20 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 25,
    ncomun: "Cangrejo",
    nombreCientifico: "Aegla denticulata",
    estado: "Preocupación menor",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Cangrejo endémico de Chile.",
    imagenFauna: Aegla,
    imagenHuella: "",
    Region: ["Región de Los Ríos"],
    parques: ["Parque Nacional Alerce Costero"],
  },
  {
    id: 26,
    ncomun: "Coral",
    nombreCientifico: "Swiftia comauensis",
    estado: "Preocupación menor",
    medida: "10-15 cm",
    masa: "50-100 g",
    descripcion: "Coral endémico de Chile.",
    imagenFauna: Swiftia,
    imagenHuella: "",
    Region: ["Región de Los Lagos"],
    parques: ["Parque Nacional Chiloé"],
  },
  {
    id: 27,
    ncomun: "Coleóptero",
    nombreCientifico: "Paraholopterus nahuelbutensis",
    estado: "Preocupación menor",
    medida: "2-3 cm",
    masa: "2-3 g",
    descripcion: "Coleóptero endémico de Chile.",
    imagenFauna: Paraholopterus,
    imagenHuella: "",
    Region: ["Región del Biobío"],
    parques: ["Parque Nacional Nahuelbuta"],
  },
  {
    id: 28,
    ncomun: "Rana",
    nombreCientifico: "Alsodes laevis",
    estado: "Vulnerable",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Rana que habita en áreas específicas de Chile.",
    imagenFauna: Alsodes,
    imagenHuella: "",
    Region: ["Región de Los Ríos"],
    parques: ["Parque Nacional Alerce Costero"],
  },
  {
    id: 29,
    ncomun: "Tarántula",
    nombreCientifico: "Euathlus condorito",
    estado: "Preocupación menor",
    medida: "10-15 cm",
    masa: "25-35 g",
    descripcion: "Tarántula que habita en el norte de Chile.",
    imagenFauna: condorito,
    imagenHuella: "",
    Region: ["Región de Antofagasta"],
    parques: ["Parque Nacional Pan de Azúcar"],
  },
  {
    id: 30,
    ncomun: "Insecto",
    nombreCientifico: "Palmaspis jubae",
    estado: "Preocupación menor",
    medida: "1-2 cm",
    masa: "1-2 g",
    descripcion: "Insecto endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Los Lagos"],
    parques: ["Parque Nacional Chiloé"],
  },
  {
    id: 31,
    ncomun: "Rana",
    nombreCientifico: "Alsodes norae",
    estado: "Vulnerable",
    medida: "5-7 cm",
    masa: "20-30 g",
    descripcion: "Rana que habita en áreas específicas de Chile.",
    imagenFauna: norae,
    imagenHuella: "",
    Region: ["Región de Los Ríos"],
    parques: ["Parque Nacional Alerce Costero"],
  },
  {
    id: 32,
    ncomun: "Pez",
    nombreCientifico: "Orestias piacotensis",
    estado: "En peligro",
    medida: "4-6 cm",
    masa: "5-10 g",
    descripcion: "Pez endémico de cuerpos de agua específicos en Chile.",
    imagenFauna: orestia,
    imagenHuella: "",
    Region: ["Región de Tarapacá"],
    parques: ["Parque Nacional Volcán Isluga"],
  },
  {
    id: 33,
    ncomun: "Colibrí",
    nombreCientifico: "Eulidia yarrellii",
    estado: "En peligro crítico",
    medida: "8-10 cm",
    masa: "2-5 g",
    descripcion: "Pequeño colibrí endémico de Chile.",
    imagenFauna: eulidia,
    imagenHuella: "",
    Region: ["Región de Arica y Parinacota"],
    parques: ["Parque Nacional Lauca"],
  },
  {
    id: 34,
    ncomun: "Picaflor",
    nombreCientifico: "Picaflor de Arica",
    estado: "En peligro crítico",
    medida: "8-10 cm",
    masa: "2-5 g",
    descripcion: "Pequeño colibrí endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Arica y Parinacota"],
    parques: ["Parque Nacional Lauca"],
  },
  {
    id: 35,
    ncomun: "Lagarto",
    nombreCientifico: "Phymaturus vociferator",
    estado: "Preocupación menor",
    medida: "8-12 cm",
    masa: "20-25 g",
    descripcion: "Lagarto endémico de Chile.",
    imagenFauna: vociferator,
    imagenHuella: "",
    Region: ["Región de Coquimbo"],
    parques: ["Parque Nacional Bosque Fray Jorge"],
  },
  {
    id: 36,
    ncomun: "Rayadito",
    nombreCientifico: "Rayadito de Masafuera",
    estado: "En peligro",
    medida: "12-15 cm",
    masa: "20-25 g",
    descripcion: "Pequeño pájaro endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional Archipiélago Juan Fernández"],
  },
  {
    id: 37,
    ncomun: "Picaflor",
    nombreCientifico: "Picaflor de Juan Fernández",
    estado: "En peligro crítico",
    medida: "8-10 cm",
    masa: "2-5 g",
    descripcion: "Pequeño colibrí endémico de Chile.",
    imagenFauna: "",
    imagenHuella: "",
    Region: ["Región de Valparaíso"],
    parques: ["Parque Nacional Archipiélago Juan Fernández"],
  },
  {
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    id: 46,
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
    id: 47,
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
    id: 48,
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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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

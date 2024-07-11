let all_animales = [
  {
    nombre_cientifico: "Anairetes parulus",
    nombre_comun: "Cachudito",
    peso: "8-9 g",
    altura: "10-11 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "El cachudito es un pequeño pájaro que se encuentra en las regiones de Atacama, Coquimbo y Valparaíso. Es conocido por su distintivo penacho en la cabeza.",
    Region: ["Atacama", "Coquimbo", "Valparaíso"],
  },
  {
    nombre_cientifico: "Rhinoderma darwinii",
    nombre_comun: "Sapo de Darwin",
    peso: "2-5 g",
    altura: "3-4 cm",
    nivel_de_amenaza: "Vulnerable",
    descripcion:
      "El sapo de Darwin es una especie de anfibio que habita en las regiones de Los Ríos y Los Lagos. Es conocido por su método único de reproducción, donde los machos incuban los huevos en su boca.",
    Region: ["Los Ríos", "Los Lagos"],
  },
  {
    nombre_cientifico: "Octodon degus",
    nombre_comun: "Degú",
    peso: "170-300 g",
    altura: "25-31 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "El degú es un roedor que se encuentra en las regiones de Valparaíso, Metropolitana y O'Higgins. Es un animal social que vive en colonias.",
    Region: ["Valparaíso", "Metropolitana", "O'Higgins"],
  },
  {
    nombre_cientifico: "Thylamys elegans",
    nombre_comun: "Comadrejita trompuda",
    peso: "15-40 g",
    altura: "9-13 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "La comadrejita trompuda es un pequeño marsupial que habita en las regiones de Coquimbo y Valparaíso. Es nocturna y se alimenta de insectos y pequeños vertebrados.",
    Region: ["Coquimbo", "Valparaíso"],
  },
  {
    nombre_cientifico: "Liolaemus chiliensis",
    nombre_comun: "Lagartija chilena",
    peso: "10-20 g",
    altura: "15-20 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "La lagartija chilena es un reptil que se encuentra en las regiones de Valparaíso, Metropolitana y O'Higgins. Es conocida por su capacidad de cambiar de color para camuflarse.",
    Region: ["Valparaíso", "Metropolitana", "O'Higgins"],
  },
  {
    nombre_cientifico: "Pseudorestias lirimensis",
    nombre_comun: "Pez de Lirima",
    peso: "Desconocido",
    altura: "5-7 cm",
    nivel_de_amenaza: "En peligro crítico",
    descripcion:
      "Este pequeño pez de agua dulce es endémico del río Lirima en la región de Tarapacá.",
    Region: ["Tarapacá"],
  },
  {
    nombre_cientifico: "Telmatobius chusmisensis",
    nombre_comun: "Sapo de Chusmisa",
    peso: "Desconocido",
    altura: "5-7 cm",
    nivel_de_amenaza: "En peligro",
    descripcion:
      "Un sapo acuático que se encuentra en las aguas termales de Chusmisa en la región de Tarapacá.",
    Region: ["Tarapacá"],
  },
  {
    nombre_cientifico: "Orestias gloriae",
    nombre_comun: "Orestias de Gloria",
    peso: "Desconocido",
    altura: "10-12 cm",
    nivel_de_amenaza: "En peligro",
    descripcion:
      "Pez de agua dulce que habita en el altiplano chileno, especialmente en la región de Tarapacá.",
    Region: ["Tarapacá"],
  },
  {
    nombre_cientifico: "Telmatobius vilamensis",
    nombre_comun: "Sapo de Vilama",
    peso: "Desconocido",
    altura: "5-7 cm",
    nivel_de_amenaza: "Vulnerable",
    descripcion:
      "Este sapo acuático habita en las aguas termales de Vilama en la región de Antofagasta.",
    Region: ["Antofagasta"],
  },
  {
    nombre_cientifico: "Euathlus atacama",
    nombre_comun: "Tarántula de Atacama",
    peso: "Desconocido",
    altura: "5-6 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "Tarántula que se encuentra en el desierto de Atacama, en la región de Antofagasta.",
    Region: ["Antofagasta"],
  },
  {
    nombre_cientifico: "Brachistosternus philippii",
    nombre_comun: "Escorpión de Philippi",
    peso: "Desconocido",
    altura: "4-6 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion:
      "Escorpión que habita en el desierto de Atacama, especialmente en la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Ectinogonia barrigai",
    nombre_comun: "Escarabajo Barrigai",
    peso: "Desconocido",
    altura: "2-3 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion:
      "Escarabajo endémico del norte de Chile, encontrado en la región de Antofagasta.",
    Region: ["Antofagasta"],
  },
  {
    nombre_cientifico: "Praocis medvedevi",
    nombre_comun: "Escarabajo Medvedevi",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion:
      "Escarabajo encontrado en el desierto de Atacama, región de Antofagasta.",
    Region: ["Antofagasta"],
  },
  {
    nombre_cientifico: "Cnemalobus pegnai",
    nombre_comun: "Cnemalobus de Pegna",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Escarabajo endémico de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Liolaemus melaniceps",
    nombre_comun: "Lagartija cabeza negra",
    peso: "Desconocido",
    altura: "15-20 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagartija endémica de la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Aegla papudo",
    nombre_comun: "Camarón de Papudo",
    peso: "Desconocido",
    altura: "5-7 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Camarón de agua dulce encontrado en la región de Valparaíso.",
    Region: ["Valparaíso"],
  },
  {
    nombre_cientifico: "Euathlus parvulus",
    nombre_comun: "Tarántula Parvulus",
    peso: "Desconocido",
    altura: "4-5 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Tarántula endémica de la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Callisphyris ficheti",
    nombre_comun: "Escarabajo Ficheti",
    peso: "Desconocido",
    altura: "2-3 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Escarabajo encontrado en la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Phymaturus alicahuense",
    nombre_comun: "Lagarto Alicahuense",
    peso: "Desconocido",
    altura: "15-20 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagarto endémico de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Sclerostomulus nitidus",
    nombre_comun: "Sclerostomulus",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Insecto encontrado en la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Callyntra hibrida",
    nombre_comun: "Callyntra híbrida",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Insecto endémico de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Liolaemus confusus",
    nombre_comun: "Lagartija confusa",
    peso: "Desconocido",
    altura: "10-15 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagartija endémica de la región de Atacama.",
    Region: ["Atacama"],
  },
  {
    nombre_cientifico: "Nigroperla costalis",
    nombre_comun: "Nigroperla",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Insecto encontrado en la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Liolaemus curis",
    nombre_comun: "Lagartija Curis",
    peso: "Desconocido",
    altura: "10-15 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagartija endémica de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Rhinoderma rufum",
    nombre_comun: "Sapo nariz de flauta",
    peso: "Desconocido",
    altura: "3-4 cm",
    nivel_de_amenaza: "En peligro crítico",
    descripcion: "Anfibio endémico de la región de Valparaíso.",
    Region: ["Valparaíso"],
  },
  {
    nombre_cientifico: "Alsodes vittatus",
    nombre_comun: "Sapito de cuatro ojos",
    peso: "Desconocido",
    altura: "3-4 cm",
    nivel_de_amenaza: "Vulnerable",
    descripcion: "Anfibio endémico de la región de Maule.",
    Region: ["Maule"],
  },
  {
    nombre_cientifico: "Acanthogonatus hualpen",
    nombre_comun: "Araña de Hualpén",
    peso: "Desconocido",
    altura: "4-5 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Araña endémica de la región de Biobío.",
    Region: ["Biobío"],
  },
  {
    nombre_cientifico: "Chiasognathus jousselini",
    nombre_comun: "Escarabajo Jousselini",
    peso: "Desconocido",
    altura: "2-3 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Escarabajo encontrado en la región de La Araucanía.",
    Region: ["La Araucanía"],
  },
  {
    nombre_cientifico: "Liolaemus hermannunezi",
    nombre_comun: "Lagartija Hermán Núñez",
    peso: "Desconocido",
    altura: "10-15 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagartija endémica de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Aegla denticulata",
    nombre_comun: "Camarón denticulado",
    peso: "Desconocido",
    altura: "5-6 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Camarón de agua dulce encontrado en la región de Los Ríos.",
    Region: ["Los Ríos"],
  },
  {
    nombre_cientifico: "Swiftia comauensis",
    nombre_comun: "Coral Comau",
    peso: "Desconocido",
    altura: "10-20 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Coral endémico del fiordo Comau en la región de Los Lagos.",
    Region: ["Los Lagos"],
  },
  {
    nombre_cientifico: "Paraholopterus nahuelbutensis",
    nombre_comun: "Escarabajo Nahuelbuta",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Escarabajo endémico de la región de La Araucanía.",
    Region: ["La Araucanía"],
  },
  {
    nombre_cientifico: "Alsodes laevis",
    nombre_comun: "Sapito Laevis",
    peso: "Desconocido",
    altura: "3-4 cm",
    nivel_de_amenaza: "Vulnerable",
    descripcion: "Anfibio endémico de la región de Biobío.",
    Region: ["Biobío"],
  },
  {
    nombre_cientifico: "Euathlus condorito",
    nombre_comun: "Tarántula Condorito",
    peso: "Desconocido",
    altura: "4-5 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Tarántula endémica de la región de O'Higgins.",
    Region: ["O'Higgins"],
  },
  {
    nombre_cientifico: "Palmaspis jubae",
    nombre_comun: "Escarabajo Palmaspis",
    peso: "Desconocido",
    altura: "1-2 cm",
    nivel_de_amenaza: "Datos insuficientes",
    descripcion: "Escarabajo encontrado en la región de Valparaíso.",
    Region: ["Valparaíso"],
  },
  {
    nombre_cientifico: "Alsodes norae",
    nombre_comun: "Sapito Nora",
    peso: "Desconocido",
    altura: "3-4 cm",
    nivel_de_amenaza: "Vulnerable",
    descripcion: "Anfibio endémico de la región de Valparaíso.",
    Region: ["Valparaíso"],
  },
  {
    nombre_cientifico: "Orestias piacotensis",
    nombre_comun: "Orestias de Piacota",
    peso: "Desconocido",
    altura: "10-12 cm",
    nivel_de_amenaza: "En peligro",
    descripcion:
      "Pez de agua dulce encontrado en la región de Arica y Parinacota.",
    Region: ["Arica y Parinacota"],
  },
  {
    nombre_cientifico: "Eulidia yarrellii",
    nombre_comun: "Picaflor de Arica",
    peso: "2-4 g",
    altura: "8-9 cm",
    nivel_de_amenaza: "En peligro crítico",
    descripcion: "Pequeño colibrí endémico de la región de Arica y Parinacota.",
    Region: ["Arica y Parinacota"],
  },
  {
    nombre_cientifico: "Phymaturus vociferator",
    nombre_comun: "Lagarto vociferador",
    peso: "Desconocido",
    altura: "15-20 cm",
    nivel_de_amenaza: "Preocupación menor",
    descripcion: "Lagarto endémico de la región de Coquimbo.",
    Region: ["Coquimbo"],
  },
  {
    nombre_cientifico: "Aphrastura masafuerae",
    nombre_comun: "Rayadito de Masafuera",
    peso: "8-9 g",
    altura: "14-15 cm",
    nivel_de_amenaza: "En peligro crítico",
    descripcion:
      "Pequeño pájaro endémico de la isla Alejandro Selkirk en el archipiélago de Juan Fernández.",
    Region: ["Valparaíso"],
  },
  {
    nombre_cientifico: "Sephanoides fernandensis",
    nombre_comun: "Picaflor de Juan Fernández",
    peso: "6-7 g",
    altura: "11-12 cm",
    nivel_de_amenaza: "En peligro",
    descripcion: "Colibrí endémico del archipiélago de Juan Fernández.",
    Region: ["Valparaíso"],
  },
];

export default all_animales;

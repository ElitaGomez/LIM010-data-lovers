global.window = global;

require('../src/data');
require('./data.spec.js');

const testPoke = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': ['Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
}, {
  'id': 5,
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ],
  'height': '1.09 m',
  'weight': '19.0 kg',
  'candy': 'Charmander Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.012,
  'avg_spawns': 1.2,
  'spawn_time': '19:00',
  'multipliers': [1.79],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'prev_evolution': [{
    'num': '004',
    'name': 'Charmander'
  }],
  'next_evolution': [{
    'num': '006',
    'name': 'Charizard'
  }]
},
];

const testFiltroData = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': ['Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.042,
  'avg_spawns': 4.2,
  'spawn_time': '07:00',
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }],
  'next_evolution': [{
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'candy': 'Bulbasaur Candy',
  'egg': 'Not in Eggs',
  'spawn_chance': 0.017,
  'avg_spawns': 1.7,
  'spawn_time': '11:30',
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'prev_evolution': [{
    'num': '001',
    'name': 'Bulbasaur'
  }, {
    'num': '002',
    'name': 'Ivysaur'
  }]
}
];

const testFiltroDebilidad = [{
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
}, {
  'id': 5,
  'num': '005',
  'name': 'Charmeleon',
  'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
  'type': [
    'Fire'
  ],
  'height': '1.09 m',
  'weight': '19.0 kg',
  'candy': 'Charmander Candy',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'spawn_chance': 0.012,
  'avg_spawns': 1.2,
  'spawn_time': '19:00',
  'multipliers': [1.79],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'prev_evolution': [{
    'num': '004',
    'name': 'Charmander'
  }],
  'next_evolution': [{
    'num': '006',
    'name': 'Charizard'
  }]
},
];

const testOrdenNombreAscendente = [
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': ['Grass',
      'Poison'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fire'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fire'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  }, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  }
];

const testOrdenNombreDescendente = [
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fire'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fire'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': ['Grass',
      'Poison'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  }
];

const testOrdenarNumeroMayor = [
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': ['Grass',
      'Poison'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  }, {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fire'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  }, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  }, {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fire'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  },
];

const testOrdenarNumeroMenor = [
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fire'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  }, {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Grass',
      'Poison'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  }, {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fire'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Water',
      'Ground',
      'Rock'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  }, {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': ['Grass',
      'Poison'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },
];

const testFiltraHuevos = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'type': ['Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy': 'Bulbasaur Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.69,
  'avg_spawns': 69,
  'spawn_time': '20:00',
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}, {
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy': 'Charmander Candy',
  'candy_count': 25,
  'egg': '2 km',
  'spawn_chance': 0.253,
  'avg_spawns': 25.3,
  'spawn_time': '08:45',
  'multipliers': [1.65],
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
  'next_evolution': [{
    'num': '005',
    'name': 'Charmeleon'
  }, {
    'num': '006',
    'name': 'Charizard'
  }]
},
];

describe('filtrarData ', () => {
  it('debería ser una tipo Grass', () => {
    expect(window.pokemon.filtrarData(testPoke, 'Grass')).toEqual(testFiltroData);
  });
});
describe('filtrarDebilidad', () => {
  it('debería se una debilidad tipo Rock', () => {
    expect(window.pokemon.filtrarDebilidad(testPoke, 'Rock')).toEqual(testFiltroDebilidad);
  });
});
describe('ordenarNombreAscendente', () => {
  it('debería ordenar ascendente los pokemones por nombre', () => {
    expect(window.pokemon.ordenaPoke(testPoke, 'Ascendente')).toEqual(testOrdenNombreAscendente);
  });
});
describe('ordenarNombreDescentente', () => {
  it('debería ordenar descendente los pokemones por nombre', () => {
    expect(window.pokemon.ordenaPoke(testPoke, 'Descendente')).toEqual(testOrdenNombreDescendente);
  });
});
describe('ordenarNumeroMayor', () => {
  it('debería ordenar de mayor los pokemones por avg_spawns', () => {
    expect(window.pokemon.ordenaAparicion(testPoke, 'mayor')).toEqual(testOrdenarNumeroMayor);
  });
});
describe('ordenarNumeroMenor', () => {
  it('debería ordenar de menor los pokemones por avg_spawns', () => {
    expect(window.pokemon.ordenaAparicion(testPoke, 'menor')).toEqual(testOrdenarNumeroMenor);
  });
});
describe('filtraHuevos', () => {
  it('deberia filtrar los huevos 2 km', () => {
    expect(window.pokemon.huevoPoke(testPoke, '2 km')).toEqual(testFiltraHuevos);
  });
});
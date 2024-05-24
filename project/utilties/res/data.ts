export type UserDataType = {
    id: number;
    name: string;
    icon: string;
    totalScore?: number;
}

export type PlayerDataType = {
    id: number,
    score: number
}

export type MatchDataType = {
    match: number;
    player1: PlayerDataType;
    player2: PlayerDataType
}

export const starWarsCharactersData = [
    {
      id: 1,
      name: "Boba Fett",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Boba-Fett-icon.png"
    },
    {
      id: 2,
      name: "C3PO",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/C3PO-icon.png"
    },
    {
      id: 3,
      name: "Chewbacca",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Chewbacca-icon.png"
    },
    {
      id: 4,
      name: "Darth Vader",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Darth-Vader-icon.png"
    },
    {
      id: 5,
      name: "Emperor",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Emperor-icon.png"
    },
    {
      id: 6,
      name: "Han Solo",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Han-Solo-icon.png"
    },
    {
      id: 7,
      name: "Princess Leia",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Leia-icon.png"
    },
    {
      id: 8,
      name: "Luke Skywalker",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Luke-Skywalker-icon.png"
    },
    {
      id: 9,
      name: "Obi Wan Kenobi",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Obi-Wan-icon.png"
    },
    {
      id: 10,
      name: "R2D2",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/R2D2-icon.png"
    },
    {
      id: 11,
      name: "Stormtrooper",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Stormtrooper-icon.png"
    },
    {
      id: 12,
      name: "Yoda",
      icon: "http://icons.iconarchive.com/icons/creativeflip/starwars-longshadow-flat/128/Yoda-icon.png"
    }
];
  
export  const matchesData = [
    {
      match: 1,
      player1: {
        id: 1,
        score: 93
      },
      player2: {
        id: 2,
        score: 83
      }
    },
    {
      match: 2,
      player1: {
        id: 3,
        score: 89
      },
      player2: {
        id: 4,
        score: 90
      }
    },
    {
      match: 3,
      player1: {
        id: 5,
        score: 97
      },
      player2: {
        id: 6,
        score: 92
      }
    },
    {
      match: 4,
      player1: {
        id: 7,
        score: 87
      },
      player2: {
        id: 8,
        score: 90
      }
    },
    {
      match: 5,
      player1: {
        id: 9,
        score: 91
      },
      player2: {
        id: 10,
        score: 82
      }
    },
    {
      match: 6,
      player1: {
        id: 11,
        score: 91
      },
      player2: {
        id: 12,
        score: 89
      }
    },
    {
      match: 7,
      player1: {
        id: 10,
        score: 99
      },
      player2: {
        id: 11,
        score: 93
      }
    },
    {
      match: 8,
      player1: {
        id: 9,
        score: 87
      },
      player2: {
        id: 8,
        score: 90
      }
    },
    {
      match: 9,
      player1: {
        id: 1,
        score: 86
      },
      player2: {
        id: 12,
        score: 97
      }
    },
    {
      match: 10,
      player1: {
        id: 4,
        score: 82
      },
      player2: {
        id: 5,
        score: 86
      }
    },
    {
      match: 11,
      player1: {
        id: 7,
        score: 96
      },
      player2: {
        id: 6,
        score: 85
      }
    },
    {
      match: 12,
      player1: {
        id: 2,
        score: 96
      },
      player2: {
        id: 3,
        score: 86
      }
    },
    {
      match: 13,
      player1: {
        id: 3,
        score: 89
      },
      player2: {
        id: 5,
        score: 99
      }
    },
    {
      match: 14,
      player1: {
        id: 12,
        score: 97
      },
      player2: {
        id: 2,
        score: 98
      }
    },
    {
      match: 15,
      player1: {
        id: 8,
        score: 100
      },
      player2: {
        id: 10,
        score: 88
      }
    },
    {
      match: 16,
      player1: {
        id: 9,
        score: 91
      },
      player2: {
        id: 7,
        score: 83
      }
    },
    {
      match: 17,
      player1: {
        id: 1,
        score: 94
      },
      player2: {
        id: 11,
        score: 99
      }
    },
    {
      match: 18,
      player1: {
        id: 6,
        score: 91
      },
      player2: {
        id: 4,
        score: 86
      }
    },
    {
      match: 19,
      player1: {
        id: 4,
        score: 92
      },
      player2: {
        id: 7,
        score: 90
      }
    },
    {
      match: 20,
      player1: {
        id: 5,
        score: 86
      },
      player2: {
        id: 1,
        score: 80
      }
    },
    {
      match: 21,
      player1: {
        id: 6,
        score: 92
      },
      player2: {
        id: 3,
        score: 85
      }
    },
    {
      match: 22,
      player1: {
        id: 2,
        score: 96
      },
      player2: {
        id: 10,
        score: 91
      }
    },
    {
      match: 23,
      player1: {
        id: 12,
        score: 98
      },
      player2: {
        id: 9,
        score: 91
      }
    },
    {
      match: 24,
      player1: {
        id: 8,
        score: 100
      },
      player2: {
        id: 11,
        score: 85
      }
    },
    {
      match: 25,
      player1: {
        id: 10,
        score: 90
      },
      player2: {
        id: 12,
        score: 91
      }
    },
    {
      match: 26,
      player1: {
        id: 1,
        score: 89
      },
      player2: {
        id: 3,
        score: 82
      }
    },
    {
      match: 27,
      player1: {
        id: 8,
        score: 97
      },
      player2: {
        id: 6,
        score: 98
      }
    },
    {
      match: 28,
      player1: {
        id: 9,
        score: 95
      },
      player2: {
        id: 11,
        score: 86
      }
    },
    {
      match: 29,
      player1: {
        id: 2,
        score: 83
      },
      player2: {
        id: 4,
        score: 84
      }
    },
    {
      match: 30,
      player1: {
        id: 7,
        score: 87
      },
      player2: {
        id: 5,
        score: 80
      }
    },
    {
      match: 31,
      player1: {
        id: 12,
        score: 89
      },
      player2: {
        id: 3,
        score: 98
      }
    },
    {
      match: 32,
      player1: {
        id: 4,
        score: 95
      },
      player2: {
        id: 9,
        score: 95
      }
    },
    {
      match: 33,
      player1: {
        id: 2,
        score: 82
      },
      player2: {
        id: 7,
        score: 91
      }
    },
    {
      match: 34,
      player1: {
        id: 11,
        score: 88
      },
      player2: {
        id: 6,
        score: 85
      }
    },
    {
      match: 35,
      player1: {
        id: 8,
        score: 88
      },
      player2: {
        id: 5,
        score: 81
      }
    },
    {
      match: 36,
      player1: {
        id: 10,
        score: 90
      },
      player2: {
        id: 1,
        score: 89
      }
    },
    {
      match: 37,
      player1: {
        id: 2,
        score: 80
      },
      player2: {
        id: 8,
        score: 93
      }
    },
    {
      match: 38,
      player1: {
        id: 6,
        score: 88
      },
      player2: {
        id: 10,
        score: 98
      }
    },
    {
      match: 39,
      player1: {
        id: 4,
        score: 87
      },
      player2: {
        id: 1,
        score: 82
      }
    },
    {
      match: 40,
      player1: {
        id: 5,
        score: 97
      },
      player2: {
        id: 9,
        score: 83
      }
    },
    {
      match: 41,
      player1: {
        id: 11,
        score: 90
      },
      player2: {
        id: 3,
        score: 94
      }
    },
    {
      match: 42,
      player1: {
        id: 12,
        score: 85
      },
      player2: {
        id: 7,
        score: 89
      }
    },
    {
      match: 43,
      player1: {
        id: 6,
        score: 80
      },
      player2: {
        id: 2,
        score: 86
      }
    },
    {
      match: 44,
      player1: {
        id: 8,
        score: 88
      },
      player2: {
        id: 9,
        score: 91
      }
    },
    {
      match: 45,
      player1: {
        id: 1,
        score: 87
      },
      player2: {
        id: 5,
        score: 84
      }
    },
    {
      match: 46,
      player1: {
        id: 4,
        score: 97
      },
      player2: {
        id: 11,
        score: 89
      }
    },
    {
      match: 47,
      player1: {
        id: 10,
        score: 97
      },
      player2: {
        id: 3,
        score: 95
      }
    },
    {
      match: 48,
      player1: {
        id: 12,
        score: 94
      },
      player2: {
        id: 6,
        score: 91
      }
    },
    {
      match: 49,
      player1: {
        id: 7,
        score: 94
      },
      player2: {
        id: 8,
        score: 80
      }
    },
    {
      match: 50,
      player1: {
        id: 4,
        score: 83
      },
      player2: {
        id: 2,
        score: 98
      }
    },
    {
      match: 51,
      player1: {
        id: 11,
        score: 86
      },
      player2: {
        id: 10,
        score: 84
      }
    },
    {
      match: 52,
      player1: {
        id: 3,
        score: 99
      },
      player2: {
        id: 1,
        score: 82
      }
    },
    {
      match: 53,
      player1: {
        id: 5,
        score: 88
      },
      player2: {
        id: 12,
        score: 95
      }
    },
    {
      match: 54,
      player1: {
        id: 9,
        score: 98
      },
      player2: {
        id: 7,
        score: 99
      }
    },
    {
      match: 55,
      player1: {
        id: 8,
        score: 98
      },
      player2: {
        id: 6,
        score: 99
      }
    },
    {
      match: 56,
      player1: {
        id: 2,
        score: 85
      },
      player2: {
        id: 9,
        score: 95
      }
    },
    {
      match: 57,
      player1: {
        id: 1,
        score: 87
      },
      player2: {
        id: 4,
        score: 82
      }
    },
    {
      match: 58,
      player1: {
        id: 3,
        score: 91
      },
      player2: {
        id: 8,
        score: 82
      }
    },
    {
      match: 59,
      player1: {
        id: 10,
        score: 93
      },
      player2: {
        id: 5,
        score: 91
      }
    },
    {
      match: 60,
      player1: {
        id: 12,
        score: 94
      },
      player2: {
        id: 6,
        score: 80
      }
    }
];
  

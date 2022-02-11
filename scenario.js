// Add here all the scenarios you can think of!

// The only condition being : add 3 playerCard description for 1 hackerCard Situation. We've already added a few as an example.

// P.S.: Keep in mind the Power of the number so the witty players don't end up losing :p

// How 'power' works : write a power for the hacker's card and while you write powers for the player's cards, keep in mind that the power of the correct counters should be greater than the hacker's card's power. 

var scenarios = [
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent an unknonwn link with a catchy news",
      power: 4,
    },
    playerCards : [
      {
        description : "I always open random links",
        power:2,
      },
      {
        description: "I never open unknown links",
        power: 5,
      },
      {
        description : "I would love to see what the news is",
        power: 3
      }
    ]
  },
  {
    hackerCard : {
      description : "I made a website for you to download free games",
      power: 3,
    },
    playerCards : [
      {
        description : "I only purchase legitimate games",
        power:5,
      },
      {
        description: "woo hoo! Free game!",
        power: 1,
      },
      {
        description : "will check my usual piracy website if it has the game for free",
        power: 3
      }
    ]
  },
  {
    hackerCard : {
      description : "I made a manipulative video and asked you to pay money",
      power: 4,
    },
    playerCards : [
      {
        description : "Would not pay up and change my IDs",
        power:4,
      },
      {
        description: "Pay up",
        power: 3,
      },
      {
        description : "Complain to cyber police",
        power: 5
      }
    ]
  }
];

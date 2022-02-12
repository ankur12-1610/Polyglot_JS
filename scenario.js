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
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I sent you a mail congratulating you for winning the lottery and ask for a giftcard for the transaction costs.",
      power : 3,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I report the email as scam.",
        power : 5,
      },
      {
        description : "I don't buy the giftcard and ask for the money first.",
        power : 2,
      },
      {
        description : "I send them the required giftcard and wait for my award.",
        power : 1,
      }
    ]
  },
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I meet you on a forum and ask you for places to visit in your city.",
      power : 4,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I don't give away any personal infomation online.",
        power : 5,
      },
      {
        description : "I tell you some places a few cities over so they don't know my city.",
        power : 3,
      },
      {
        description : "I tell you about all my favorite places to visit in the city.",
        power : 1,
      }
    ]
  },
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I try to crack your password to a major site.",
      power : 3,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I have different strong passwords on all sites and change them regularly.",
        power : 5,
      },
      {
        description : "I have one strong password on all the sites I use.",
        power : 4,
      },
      {
        description : "I have a generic password that I can easily remember.",
        power : 1,
      }
    ]
  },
];
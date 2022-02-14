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
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I deleted that account and started a new one.",
        power : 1,
      },
      {
        description : "I use different passwords for all of my other accounts.",
        power : 3,
      },
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      }
    ]
  },
  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location(cloud storage) backup.",
        power : 4,
      },
      {
        description : "I never backed up my data anyway.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I used your USB and I am not afraid of my system getting corrupted.",
        power : 1,
      },
      {
        description : "I refused to use your USB as my system was not having AntiVirus protection & FireWall.",
        power : 3,
      },
      {
        description : "I use AntiVirus protection and FireWall to protect my system.",
        power : 4,
      }
    ]
  },
];

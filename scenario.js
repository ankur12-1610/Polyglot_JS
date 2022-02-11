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
      description : "I sent you an email where I asked to enter your email and password in a site",
      power : 3,
    },
    playerCards : [
      {
        description : "I never enter my email and password in any unknown site",
        power : 5,
      },
      {
        description : "I entered the details but then changed my password",
        power : 4,
      },
      {
        description : "I entered my email and password.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent you some file onlie with some attachment you need to download",
      power : 3,
    },
    playerCards : [
      {
        description : "I scan it before downloading it",
        power : 5,
      },
      {
        description : "I scan it after downloading it ",
        power : 4,
      },
      {
        description : "I download it and do not scan it",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I gave you my USB drive",
      power : 3,
    },
    playerCards : [
      {
        description : "I scanned that USB drive before using it",
        power : 5,
      },
      {
        description : "I did not use your USB as I did not have anti virus",
        power : 4,
      },
      {
        description : "I used your USB without scanning",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I have your Netflix password",
      power : 3,
    },
    playerCards : [
      {
        description : "I changed my password and loged out of all devices",
        power : 5,
      },
      {
        description : "I changed my password but did not log out",
        power : 4,
      },
      {
        description : "I did not changed my password",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I am spamming your DM with fake OTPs",
      power : 3,
    },
    playerCards : [
      {
        description : "I have spamming protection",
        power : 5,
      },
      {
        description : "I ignore those as I know I have not given my number to these sites",
        power : 4,
      },
      {
        description : "I panic!!!!",
        power : 1,
      }
    ]
  },
];
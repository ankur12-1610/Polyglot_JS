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
      description :"I used to hack all of your information whenever you visit unknown websites ",
      power : 4,
    },
    playerCards : [
      {
        description : "I will never visit unknown websites",
        power : 5,
      },
      {
        description : "Sometimes I used to vist unknown websites",
        power : 3,
      },
      {
        description : "I always visit unknown websites",
        power : 1,
      },
    ] 
  },
  {
  hackerCard : {
      description:"I always use some applications to pass bugs into your device. ",
      power : 3,
  },
  playerCards:[
    {
      description:"I will never install unknown applications in my device.",
      power :5,
    },
    {
      description: "I will never check where the source of the application.",
      power :1,
    },
    {
      description :"Sometimes theu used to install in my device with other applications",
      power : 2,
    },
  ]
},
]

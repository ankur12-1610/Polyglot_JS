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
      description : "I sent a fake email to you for claiming your prize money.",
      power: 3,
    },
  playerCards : [
    {
      description : "I opened it to claim the prize.",
      power:1
    },
    {
      description: "I saw the mail but didn't click on the link.",
      power: 4,
    },
    {
      description :" I am well aware of these frauds. So I never entertain such emails.",
      power:5
    },

  ]
  },
  {
  hackerCard : {
    description : "I sent a message to you for downloading premium version of an app.",
    power : 3,

  },
  playerCards : [
    {
      description : "I opened it but didn't download as I don't use that app.",
      power : 2,
    },
    {
      description : "I am aware of phishing. So I don't click on such links.",
      power:5,
    },
    {
      description : "I opened it as I wanted the premium version since a long time.",
      power : 1,
    },
  ]
},
{
  hackerCard : {
    description : "I sent a you a malware disguised as an audio file on whatsapp .",
    power:3,
  },
  playerCards : [
    {
      description : "I opened the file.",
      power:1,
    },
    {
      description : "I blocked and reported the contact and did not open the audio file.",
      power: 5,
    },
    {
      description : "I did not open the audio file and ignored the message.",
      power : 3,
    }

  ]

}
];
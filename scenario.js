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
    // 2
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
    // 3
    hackerCard : {
      description : "I sent a fake link via message claiming for a lottery of 20 lakhs INR.",
      power : 4,
    },
    playerCards : [
      {
        description : "I opened the link but didnt fill the details.",
        power : 3,
      },
      {
        description : "I ignored the message as I didnt filled for any lottery.",
        power : 5,
      },
      {
        description : "I sent the details asked by him!",
        power : 1,
      }
    ]
  },
  {
    // 4
    hackerCard : {
      description : "I sent an malicious software claiming free movies present in Netflix, amazon prime and hotstar.",
      power : 3,
    },
    playerCards : [
      {
        description : "I use Telegram 😎.",
        power : 4,
      },
      {
        description : "I thought for a while then installed it.",
        power : 2,
      },
      {
        description : "I installed the app as I am a binge watcher.",
        power : 1,
      }
    ]
  },
];
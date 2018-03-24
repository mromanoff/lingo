const data = {
  title: "Bacon ipsum dolor",
  subTitle: "Alcatra capicola picanha meatloaf",
  furtherExplanation: [
    {
      type: "text",
      text:
        "Chicken pork andouille, jerky prosciutto porchetta tri-tip pork loin."
    },
    {
      type: "modal",
      libKey: "allowedAmount",
      text: "andouille"
    },
    {
      type: "newLine",
      text: ""
    },

    {
      type: "link",
      text: "Turducken venison flank salami.",
      href: "http://www.google.com"
    },

    {
      type: "text",
      text:
        "Turducken venison flank salami ham capicola sirloin short ribs prosciutto andouille kielbasa chicken brisket pastrami shoulder."
    },
    {
      type: "modal",
      libKey: "allowedAmount",
      text: "prosciutto andouille kielbasa"
    }
  ],
  isInNetwork: false,
  progressBar: {
    applied: 0.0,
    limit: 600.0,
    percentage: 0.0
  },
  stubExplanation: [
    {
      type: "text",
      text:
        "Short ribs cow pork loin, pork shankle porchetta tenderloin short loin ham hock leberkas andouille tri-tip. Swine cow hamburger pig shank beef ribs."
    },
    {
      type: "modal",
      libKey: "allowedAmount",
      text: "Swine cow hamburger"
    },
    {
      type: "newLine",
      text: ""
    },

    {
      type: "link",
      text: "Turducken venison flank salami.",
      href: "http://ibm.com"
    },

    {
      type: "text",
      text:
        "Shank venison tail pancetta kielbasa frankfurter jerky short loin drumstick."
    },
    {
      type: "modal",
      libKey: "allowedAmount",
      text: "pancetta kielbasa"
    }
  ],
  meta: {
    smartContent: ["furtherExplanation", "stubExplanation"]
  }
};

export default data;

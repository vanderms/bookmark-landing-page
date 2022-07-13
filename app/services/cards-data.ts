export enum CardType {
  BOOKMARK = "bookmark",
  SPEEDY = "speedy",
  SHARE = "share",
}

export const getCard = (card: CardType) => {
  return {
    bookmark: {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      href: "/",
      image: { url: "/assets/illustration-bookmark.svg" },
    },

    speedy: {
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      href: "/",
      image: { url: "/assets/illustration-speedy.svg" },
    },

    share: {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      href: "/",
      image: { url: "/assets/illustration-share.svg" },
    },
  }[card];
};

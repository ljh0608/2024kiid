document.addEventListener("DOMContentLoaded", () => {
  const cardHandler = new CardHandler();
  cardHandler.onHoverCard();
});

class CardHandler {
  cards = document.getElementsByClassName("card");

  constructor() {
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      this.onHoverCardAction(card, false);
    }
  }

  onHoverCardAction = (card, on) => {
    on
      ? card.querySelector("img").classList.add("--dimmed")
      : card.querySelector("img").classList.remove("--dimmed");
    const hiddenAssets = card.querySelectorAll("div");
    for (let j = 0; j < hiddenAssets.length; j++) {
      on
        ? hiddenAssets[j].classList.remove("--hidden")
        : hiddenAssets[j].classList.add("--hidden");
    }
  };

  onHoverCard = () => {
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      card.addEventListener("mouseenter", (e) => {
        this.onHoverCardAction(card, true);
      });
      card.addEventListener("mouseleave", (e) => {
        this.onHoverCardAction(card, false);
      });
      card.addEventListener("click", (e) => {
        this.onHoverCardAction(card, false);
      });
    }
  };
}

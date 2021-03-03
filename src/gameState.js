const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);
    if (this.clock === this.wakeTime) {
      this.wake();
    }
    return this.clock;
  },
  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      this.gameStart();
      return;
    }
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("change weather");
  },
  cleanUpPoop() {
    console.log("cleanup poop");
  },
  feed() {
    console.log("feed");
  },
  gameStart() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("born");
    this.current = "IDLE";
    this.wakeTime = -1;
  },
};
export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;

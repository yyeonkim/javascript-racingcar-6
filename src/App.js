import { Console } from "@woowacourse/mission-utils";

import { MESSAGE } from "./constants.js";
import Car from "./Car.js";

class App {
  async play() {
    const name = await Console.readLineAsync(MESSAGE.enterCarName);
    const cars = this.createCarArr(name);
  }

  createCarArr(name) {
    let cars = [];

    const splitedName = this.splitName(name);
    splitedName.forEach((name) => cars.push(new Car(name)));

    return cars;
  }

  splitName(name) {
    return name.split(",");
  }
}

export default App;

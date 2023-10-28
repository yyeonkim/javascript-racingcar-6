import { Console, Random } from "@woowacourse/mission-utils";

import { MESSAGE } from "../constants.js";
import Car from "./Car.js";

class RacingCar {
  async start() {
    const name = await Console.readLineAsync(MESSAGE.enterCarName);
    const cars = this.createCarArr(name);
    const numOfRacing = await Console.readLineAsync(
      MESSAGE.enterNumberOfRacing
    );

    Console.print("실행 결과");
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

  movingForward() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) return true;
    return false;
  }
}

export default RacingCar;

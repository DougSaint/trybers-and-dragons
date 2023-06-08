import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

class Ranger extends Archetype {
  private _energyType: EnergyType;

  private static _rangerInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = "stamina";
    Ranger._rangerInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._rangerInstances;
  }
}

export default Ranger;

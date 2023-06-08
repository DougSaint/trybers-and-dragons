import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

class Warrior extends Archetype {
  private _energyType: EnergyType;

  private static _warriorInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = "stamina";
    Warrior._warriorInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._warriorInstances;
  }
}

export default Warrior;

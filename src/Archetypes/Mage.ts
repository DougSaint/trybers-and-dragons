import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;

  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }
}

export default Mage;

import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Halfling._halflingInstances;
  }
}

export default Halfling;

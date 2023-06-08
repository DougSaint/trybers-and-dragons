import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc._orcInstances;
  }
}

export default Orc;

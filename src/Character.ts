import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage('Fireball');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType,
    };
    this._lifePoints = this._race.maxLifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  levelUp(): void {
    const newLP = this._maxLifePoints + getRandomInt(1, 10);
    if (newLP >= this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else this._maxLifePoints = newLP;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(damage: number): number {
    const trueDamage = damage - this._defense;
    if (trueDamage > 0) this._lifePoints -= trueDamage;
    else this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Character;

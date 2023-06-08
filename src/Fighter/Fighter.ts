import { EnergyType } from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: EnergyType;
  
  attack(enemy: Fighter):void;
  special?(enemy: Fighter): void;
  levelUp():void;
  receiveDamage(damage:number): number;
}

export default Fighter;

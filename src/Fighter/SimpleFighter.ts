interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(damage: number): number;
}

export default SimpleFighter;

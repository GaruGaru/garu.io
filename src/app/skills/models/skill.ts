export class Skill {

  private readonly _name: string;

  private readonly _experience: string;

  private readonly _level: number;

  constructor(name: string, experience: string, level: number) {
    this._name = name;
    this._experience = experience;
    this._level = level;
  }

  get name(): string {
    return this._name;
  }

  get experience(): string {
    return this._experience;
  }

  get level(): number {
    return this._level;
  }

}

export class Company {
  private readonly _name: string;
  private readonly _website: string;
  private readonly _logo: string;

  constructor(name: string, website: string, logo: string) {
    this._name = name;
    this._website = website;
    this._logo = logo;
  }

  get name(): string {
    return this._name;
  }

  get website(): string {
    return this._website;
  }

  get logo(): string {
    return this._logo;
  }
}

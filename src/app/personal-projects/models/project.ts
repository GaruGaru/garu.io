export class Project {

  private readonly _name: string;

  private readonly _description: string;

  private readonly _language: string;

  private readonly _uri: string;

  private readonly _tags: string[];

  constructor(name: string, description: string, language: string, uri: string, tags: string[]) {
    this._name = name;
    this._description = description;
    this._language = language;
    this._uri = uri;
    this._tags = tags;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get language(): string {
    return this._language;
  }

  get uri(): string {
    return this._uri;
  }

  get tags(): string[] {
    return this._tags;
  }

}

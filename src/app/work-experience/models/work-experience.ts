import {Company} from './company';

export class WorkExperience {

  private readonly _role: string;
  private readonly _company: Company;
  private readonly _start_year: number;
  private readonly _end_year: number;
  private readonly _description: string;

  constructor(role: string, company: Company, startYear: number, endYear: number, description: string) {
    this._role = role;
    this._company = company;
    this._start_year = startYear;
    this._end_year = endYear;
    this._description = description;
  }

  get role(): string {
    return this._role;
  }

  get company(): Company {
    return this._company;
  }

  get start_year(): number {
    return this._start_year;
  }

  get end_year(): number {
    return this._end_year;
  }

  get description(): string {
    return this._description;
  }

  get isCurrent(): boolean {
    return this._end_year === -1;
  }

}

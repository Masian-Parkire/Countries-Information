export class LanguagesDTO {
  name: string;

  length: number;
  constructor(data: any) {
    this.name = data['name'];
  }
}

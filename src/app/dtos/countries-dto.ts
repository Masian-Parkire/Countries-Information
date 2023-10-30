import { CurrenciesDTO } from "./currencies-dto";
import { LanguagesDTO } from "./languages-dto";

export class CountriesDTO {
    name: string;
    subRegion: any;
    capital: string;
    languages: LanguagesDTO;
    currencies: CurrenciesDTO;

    constructor(data: any) {
        this.name = data['name'];
        this.subRegion = data['subRegion'];
        this.capital = data['capital'];
        this.languages = data['languages'];
        this.currencies = data['currencies'];
    }

}

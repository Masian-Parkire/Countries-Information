import { LanguagesDTO } from "./dtos/languages-dto";

export interface AppInterface {
    name : string,
    topLevelDomain :string[],
    alpha2Code : string,
    alpha3Code : string,
    callingCodes : string[],
    capital : string,
    altSpellings ?: string[],
    region : string,
    subregion : string,
    population : number,
    latlng: number[],
    demonym ?: string,
    area : number,
    gini ?: number,
    timezones : string[],
    borders ?: string[],
    nativeName ?: string,
    numericCode? : string,
    currencies : object[],
    languages : LanguagesDTO,
    translations ?: object,
    flag : string,
    regionalBlocs ?: object[],
    cioc ?: string,
   
}
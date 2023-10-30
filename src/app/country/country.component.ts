import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WorldHttpService } from "../world-http.service";
import { Location } from "@angular/common";
import { AppInterface } from "../../app/application-interface";
import { Subscription } from 'rxjs';
import { CountriesDTO } from '../dtos/countries-dto';

@Component({
  selector: 'app-country',
  templateUrl:'./country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit {


  public countries: CountriesDTO[]=[];
  public returnParameters!: Subscription|undefined;
  public currencyParameter: boolean = false;
  public languageParameter: boolean = false;
  public region: string='';
  public regionSelected: string='';
  public subregionSelected: string='';

 
  constructor(
    public _route: ActivatedRoute,
    public router: Router,
    public worldHttpService: WorldHttpService,
    public location: Location
  ) {}

  ngOnInit() {
    this.returnParameters = this._route.queryParams.subscribe(params => {
      if (params["currency"]) {
        this.currencyParameter = true;
        this.getCountryByCurrency(params["currency"]);
      } else if (params["language"]) {
        this.languageParameter = true;
        // this.getCountryByLanguage(params["language"]);
      } else {
        this.currencyParameter = false;
        this.region = this.region ?? '';
        console.log(this.region);
        this.regionSelected = this.region;
        this.subregionSelected = this.region;

        this.worldHttpService.getAllCountriesFromRegion(this.region).subscribe(
          (data: AppInterface[]) => {
            this.countries = data;
            console.log(this.countries);
          },
          (error: { errorMessage: any; }) => {
            console.log(error.errorMessage);
          }
        );
      }
    });
  }

  public goback() {
    this.location.back();
  }

  getCountryByCurrency(code: any) {
    this.worldHttpService.getCountryByCurrency(code).subscribe((data: any[]) => {
      this.countries = data;
    });
  }

//   getCountryByLanguage(code: any) {
//     this.worldHttpService.getCountryByLanguage(code).subscribe((data) => {
//       this.countries = data;
//     });
//   }

  public regionSelect(event: any) {
    this.worldHttpService.getAllCountriesFromRegion(event).subscribe((data: AppInterface[]) => {
      this.countries = data;
      console.log(this.countries);
    }, (error: { errorMessage: any; }) => {
      console.log(error.errorMessage);
    });
  }

  public subregionSelect(event: any) {
    this.worldHttpService.getAllCountriesFromRegion(event).subscribe((data: AppInterface[]) => {
      this.countries = data;
      console.log(this.countries);
    }, (error: { errorMessage: any; }) => {
      console.log(error.errorMessage);
    });
  }
}

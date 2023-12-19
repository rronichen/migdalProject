import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GarageMapPipe } from './garage-map.pipe';
import { BehaviorSubject } from 'rxjs';
import { Garage } from './garage';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private garageMap = new GarageMapPipe().transform;

  public garageListSub = new BehaviorSubject<Array<Garage>>( [] );

  // hard coded object - instead of response from server
  garageList =  [
    {
      "Name": "דרור סנקביץ - שרותי מוסכים בע\"",
      "Type": "סוג: מוסך כללי",
      "Address": "האצ\"ל 12",
      "City": "ראשון לציון",
      "PhoneNumber": "03-9612838",
      "FaxNumber": "03-9612188",
      "Area": "מרכז",
      "IsFix": false,
      "AdditionalDesc": "פרטים נוספים: ",
      "VehicleModel": "דגם: כולם",
      "Location": {
          "Latitude": 31.989167,
          "Longitude": 34.7656937,
          "Address": "האצ\"ל 12 , ראשון לציון"
      }
  },
    {
        "Name": "מוסך יהודה מרכזי לצפון עמיר י.",
        "Type": "סוג: מוסך כללי",
        "Address": "יהודה הלוי ת\"ד 700",
        "City": "טבריה",
        "PhoneNumber": "04-6722201",
        "FaxNumber": "04-6791078",
        "Area": "צפון",
        "IsFix": true,
        "AdditionalDesc": "פרטים נוספים: שייך לנבחרת מוסכי פיקס",
        "VehicleModel": "דגם: כולם",
        "Location": {
            "Latitude": 32.7890532,
            "Longitude": 35.5335639,
            "Address": "יהודה הלוי ת\"ד 700 , טבריה"
        }
    },
    {
        "Name": "מוסך רובין פחחות וצבע רכב",
        "Type": "סוג: מוסך כללי",
        "Address": "א.תעשיה ישן",
        "City": "צפת",
        "PhoneNumber": "04-6970467",
        "FaxNumber": "04-6924484",
        "Area": "צפון",
        "IsFix": true,
        "AdditionalDesc": "פרטים נוספים: שייך לנבחרת מוסכי פיקס",
        "VehicleModel": "דגם: כולם",
        "Location": {
            "Latitude": 32.959649,
            "Longitude": 35.499011,
            "Address": "א.תעשיה ישן , צפת"
        }
    },
    {
        "Name": "מוסך סופר צבע נהריה בע\"מ",
        "Type": "סוג: מוסך כללי",
        "Address": "לוחמי הגיטאות 26",
        "City": "נהרייה",
        "PhoneNumber": "04-9923757",
        "FaxNumber": "04-9922935",
        "Area": "צפון",
        "IsFix": true,
        "AdditionalDesc": "פרטים נוספים: שייך לנבחרת מוסכי פיקס",
        "VehicleModel": "דגם: כולם",
        "Location": {
            "Latitude": 33.0029233,
            "Longitude": 35.0974292,
            "Address": "לוחמי הגיטאות 26 , נהרייה"
        }
    },
    {
        "Name": "מוסך נעמה בע\"מ",
        "Type": "סוג: מוסך מורשה",
        "Address": "יפו 128",
        "City": "חיפה",
        "PhoneNumber": "04-8553392",
        "FaxNumber": "04-8510288",
        "Area": "צפון",
        "IsFix": true,
        "AdditionalDesc": "פרטים נוספים: רכב חשמלי , שייך לנבחרת מוסכי פיקס",
        "VehicleModel": "דגם: פורד",
        "Location": {
            "Latitude": 32.8264015,
            "Longitude": 34.9884448,
            "Address": "יפו 128 , חיפה"
        }
    }];

  public getGarages(){
    let gg: Array<Garage>= []
    this.garageList.map(g=> {
      gg.push(this.garageMap(g));
    });
    this.garageListSub.next(gg);

    // יש בעיה עם הקריאה הספציפית לא מחזירה תשובה לכן נשלח האובייקט במקום הקריאה

    return;

    let url = "https://customersservices.migdal.co.il/api/experts/getgarages";
    let body =  {};
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8",
    });
    this.http.post<any>(url, body, { headers: headers}).subscribe(res=> {
        this.garageListSub.next(res.Data);
    }, err => {

    })
  }

  public getAreas(){
    
    let url = "https://front.migdal.co.il//experts/api/garageareas";
    let body =  {};
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8",
    });
    return this.http.post<any>(url, body, { headers: headers})
  }
}

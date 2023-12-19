import { Pipe, PipeTransform } from "@angular/core";
import { Garage } from "./garage";

@Pipe({
  name: 'garageMap'
})
export class GarageMapPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let garge = new Garage();
    garge.Name = value.Name;
    garge.Type = value.Type;
    garge.Address = value.Address;
    garge.City = value.City;
    garge.PhoneNumber = value.PhoneNumber;
    garge.FaxNumber = value.FaxNumber;
    garge.Area = value.Area;
    garge.IsFix = value.IsFix;
    garge.AdditionalDesc = value.AdditionalDesc;
    garge.VehicleModel = value.VehicleModel;
    garge.Location = value.Location;

    return garge;
  }
}
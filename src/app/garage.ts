export class Garage {

    Name: string = "";
    Type:  string = "";
    Address : string = "";
    City : string = "";
    PhoneNumber: string = "";
    FaxNumber: string = "";
    Area:  string = "";
    IsFix?: boolean;
    AdditionalDesc: string = "";
    VehicleModel: string = "";
    Location : { Latitude: number, Longitude: number, Address: string } = {Latitude: -1, Longitude: -1, Address : ""};
}
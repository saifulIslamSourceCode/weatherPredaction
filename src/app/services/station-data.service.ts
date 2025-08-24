import { Injectable } from '@angular/core';

export interface StationData {
  sl: number;
  name: string;
  contact: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StationDataService {

   stationData: StationData[] = [
    { sl: 1, name: "RADAR Station, Dhaka", contact: ["9183322"] },
    { sl: 2, name: "PBO, Ishurdi", contact: ["63365"] },
    { sl: 3, name: "1st Class Observatory, Rajshahi", contact: ["588866454"] },
    { sl: 4, name: "1st Class Observatory, Dinajpur", contact: ["66779"] },
    { sl: 5, name: "1st Class Observatory, Tangail", contact: ["61352"] },
    { sl: 6, name: "1st Class Observatory, Faridpur", contact: ["63060"] },
    { sl: 7, name: "1st Class Observatory, Badalgachhi, Naogaon", contact: ["56188"] },
    { sl: 8, name: "1st Class Observatory, Tarash, Sirajganj", contact: ["56119"] },
    { sl: 9, name: "1st Class Observatory, Gopalganj", contact: ["6681837"] },
    { sl: 10, name: "Agromet Observatory, Dimla, Nilphamari", contact: ["56313"] },
    { sl: 11, name: "1st Class Observatory, Chandpur", contact: ["084167911"] },
    { sl: 12, name: "1st Class Observatory, Bhola", contact: ["491-61110"] },
    { sl: 13, name: "1st Class Observatory, Patuakhali", contact: ["0441-62812"] },
    { sl: 14, name: "1st Class Observatory, Chuadanga", contact: ["0761-81113"] },
    { sl: 15, name: "Regional Inspection Centre (RIC), Khulna", contact: ["041723330"] },
    { sl: 16, name: "PBO, Barishal", contact: ["043162811"] },
    { sl: 17, name: "DMO, Sylhet", contact: ["02996632317", "0821-727439"] },
    { sl: 18, name: "Regional Inspection Centre (RIC), Cumilla", contact: ["081-76522"] },
    { sl: 19, name: "Weather RADAR Station, Molvibazar", contact: ["0861-63700"] },
    { sl: 20, name: "Agromet Observatory, Kumarkhali, Kushtia", contact: ["071-76742"] },
    { sl: 21, name: "Pilot Balloon Observatory (PBO), Feni", contact: ["0331-74722"] },
    { sl: 22, name: "1st Class Observatory, Kutubdia", contact: ["56038"] },
    { sl: 23, name: "1st Class Observatory, Mongla", contact: ["04658-75184"] },
    { sl: 24, name: "1st Class Observatory, Teknaf", contact: ["75054"] },
    { sl: 25, name: "1st Class Observatory, Maijdi Court", contact: ["0321-71630"] },
    { sl: 26, name: "DMO, Cox's Bazar", contact: ["0341-63618", "0341-63397"] },
    { sl: 27, name: "RADAR Station, Cox's Bazar", contact: ["0341-63465"] },
    { sl: 28, name: "RADAR Station, Khepupara", contact: ["02478883877", "02478883920"] },
    { sl: 29, name: "PBO, Ambagan, Chattogram", contact: ["02334466123"] },
    { sl: 30, name: "MMO, Patenga, Chattogram", contact: ["02333300962", "02333300988", "02333300907"] },
    { sl: 31, name: "Geo-Physical Observatory, Ambagan, Chattogram", contact: ["02333354208", "02333354248", "02333354378"] }
  ];

}

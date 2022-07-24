import { Injectable } from '@angular/core';
import { BarCode } from 'src/app/models/bar-code';

@Injectable({
  providedIn: 'root'
})
export class BarCodeService {

  private barCodes: BarCode[];
  private allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { 
    this.barCodes = [
      {
        uuid: "2c42e6e3-b44f-4064-9259-0cdc9dde1cd9",
        barCode: "TOMSDRINKS",
      },
      {
        uuid: "003379a8-7233-4723-90eb-8f4103173ff0",
        barCode: "lkjDAlkjDa",
      },
      {
        uuid: "7090f7b5-b399-4b74-857f-3b8237392e1c",
        barCode: "uASopfAacV",
      }
    ]
  }

  isBarCodeAvailable(barCode: string): boolean {
    return (this.barCodes.find((element) => element.barCode === barCode) === undefined);
  }

  generateNewBarCode(): string {
    const uuid = crypto.randomUUID();
    let barCode: string;
    do {
      barCode = this.randomString(10, this.allowedCharacters);
    } while (!this.isBarCodeAvailable(barCode));
    this.barCodes.push({uuid: uuid, barCode: barCode});
    return barCode;
  }

  private randomString(length: number, chars: string) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}

import { Time } from '@angular/common';

export interface Pointage {
    idPointage: Number;
    idPointEmploye: Number;
    datePointage: Date;
    arrivePointage: Time;
    departPointage: Time;
}
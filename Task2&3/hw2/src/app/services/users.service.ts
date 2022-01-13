import { Injectable } from '@angular/core';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public user: any = [{
    id: "1",
    firstName: "Vaibhav",
    lastName: "Gupta",
    age: 23,
    login: "vg@gmail.com",
    password: "Pass",
    isDeleted: false
  },
  {
    id: "2",
    firstName: "Prashant",
    lastName: "Pranav",
    age: 23,
    login: "PP@gmail.com",
    password: "Pass",
    isDeleted: true
  },
  {
    id: "3",
    firstName: "Parag",
    lastName: "Sharma",
    age: 28,
    login: "PS@gmail.com",
    password: "Pass",
    isDeleted: true
  },
  {
    id: "4",
    firstName: "Devu",
    lastName: "Pandey",
    age: 24,
    login: "DP@gmail.com",
    password: "Pass",
    isDeleted: false
  },
  {
    id: "5",
    firstName: "Shounik",
    lastName: "Verma",
    age: 23,
    login: "SV@gmail.com",
    password: "Pass",
    isDeleted: true
  },
  {
    id: "6",
    firstName: "Harshit",
    lastName: "Gupta",
    age: 40,
    login: "HG@gmail.com",
    password: "Pass",
    isDeleted: false
  },
  {
    id: "7",
    firstName: "Manas",
    lastName: "Khatri",
    age: 23,
    login: "MK@gmail.com",
    password: "Pass",
    isDeleted: true
  },
  {
    id: "8",
    firstName: "Pinku",
    lastName: "Meena",
    age: 28,
    login: "PM@gmail.com",
    password: "Pass",
    isDeleted: true
  }];
  constructor() { }
  getData(){
    return this.user
  }
}

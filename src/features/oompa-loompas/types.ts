export interface EmployeesResponse {
  current: number;
  total: number;
  results: Employee[];
}

export interface Employee {
  first_name: string;
  last_name: string;
  favorite: Favorite;
  gender: Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: Country;
  height: number;
  id: number;
}

export enum Country {
  Loompalandia = "Loompalandia",
}

export interface Favorite {
  color: Color;
  food: Food;
  random_string: string;
  song: string;
}

export enum Color {
  Blue = "blue",
  Red = "red",
}

export enum Food {
  Chocolat = "Chocolat",
  CocoaNuts = "cocoa nuts",
}

export enum Gender {
  F = "F",
  M = "M",
}

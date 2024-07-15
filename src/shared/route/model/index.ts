export class Route {
  public id: number;
  public name: string;
  public path: string;

  constructor(id: number, name: string, path: string) {
    this.id = id;
    this.name = name;
    this.path = path;
  }
}

export const routes = {
  undefined: new Route(0, "undefined", "/undefined"),
  main: new Route(1, "Главная", "/"),
};

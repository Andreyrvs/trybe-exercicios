class Tv {
  brand:string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[], connectedTo:string) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo
  }

  turnOn() {
    console.log(`Marca da TV: ${this.brand}, Tamanho em polegadas: ${this.size}in, Resolução da tela: ${this.resolution}, conexões disponíveis(HDMI, Ethernet, etc.):${this.connections}`);
    
  }
}

const tv1 = new Tv('Tochiba', 22, 'Full hd',['HDMI, P2'], "?")

tv1.turnOn()

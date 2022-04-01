import { ProductProtocol } from "./product-protocol";

/*
   O decorator imita a classe que ele decora.
   Por isso ele deve ter os mesmos métodos.
*/

// o decorator pode ser uma classe, função ou interface
export class ProductDecorator implements ProductProtocol {
  // possui dentro um componente concreto
  constructor(protected product: ProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}

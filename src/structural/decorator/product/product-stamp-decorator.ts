import { ProductDecorator } from "./product-decorator";

export class ProductStampDecorator extends ProductDecorator {
  // incrementa em R$ 10 pra cada produto decorado
  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}

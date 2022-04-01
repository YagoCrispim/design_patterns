import { ProductDecorator } from "./product-decorator";
import {ProductStampDecorator} from "./product-stamp-decorator";
import { TShirt } from "./t-shit";

// componente original
const tshirt = new TShirt();

// não deve alterar o comportamento do component original
const decoratedTshirt = new ProductDecorator(tshirt);

console.log("Preço da camiseta -> ", tshirt.getPrice());
console.log("Preço da camiseta(decorator) -> ", decoratedTshirt.getPrice());

// não deve alterar o comportamento do component original
const decoratedTshirtWithStamp = new ProductStampDecorator(tshirt);

console.log(
  "Preço da camiseta com estampa(decorator) -> ",
  decoratedTshirtWithStamp.getPrice()
);

import { ProductDecorator } from "./product-decorator";
import { ProductStampDecorator } from "./product-stamp-decorator";
import { TShirt } from "./t-shit";

// componente original
const tshirt = new TShirt();
console.log("Preço da camiseta -> ", tshirt.getPrice());

// não deve alterar o comportamento do component original
const decoratedTshirtPlusFive = new ProductDecorator(tshirt);
console.log(
  "\nPreço da camiseta(decorator + 5<Up>) -> ",
  decoratedTshirtPlusFive.getPrice()
);

// não deve alterar o comportamento do component original
const decoratedTshirtWithStamp = new ProductStampDecorator(tshirt);
console.log(
  "\nPreço da camiseta com estampa(decorator) -> ",
  decoratedTshirtWithStamp.getName(),
  decoratedTshirtWithStamp.getPrice()
);

const decoratedTshirtWithStampFrontAndBack = new ProductStampDecorator(
  decoratedTshirtWithStamp
);
console.log(
  "\nPreço da camiseta com estampa na frente e atrás(decorada 2x) -> ",
  decoratedTshirtWithStampFrontAndBack.getName(),
  decoratedTshirtWithStampFrontAndBack.getPrice()
);

import Card from "./../cards/Card";
import { v4 as uuidv4 } from "uuid";

export default function Body() {
  let dataJson = require("../data/data.json");
  const filteredArray = [...dataJson].filter((item) => item.state === "active");

  return (
   <>
      {[...filteredArray].map((el) => (
        <Card
          key={uuidv4()}
          url={el.url}
          title={el.title}
          currency_code={el.currency_code}
          price={el.price}
          MainImage={el.MainImage.url_570xN}
          quantity={el.quantity}
        />
      ))}
  </>
  );
}

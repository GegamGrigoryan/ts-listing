import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

interface ICard {
  listing_id: string;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const Card: FC<ICard> = ({
  listing_id,
  url,
  title,
  currency_code,
  price,
  quantity,
  MainImage,
}) => {
  const tittleCLiser = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substr(0, maxLength - 1) + "…";
    } else {
      return str;
    }
  };
  const priceValue = (pr: string, code: string) => {
    if (code === "USD") {
      return `$ ${pr}`;
    }
    if (code === "EUR") {
      return `€ ${pr}`;
    }
    return `${code} ${pr}`;
  };

  const quantityLevel = (quantity: number) => {
    if (quantity <= 10) {
      return "item-quantity level-low";
    }
    if (quantity <= 20) {
      return "item-quantity level-medium";
    }
    if (quantity > 20) {
      return "item-quantity level-high";
    }
  };
  return (
    <div className="item-list" key={uuidv4()}>
      <div className="item" key={uuidv4()}>
        <div className="item-image" key={uuidv4()}>
          <a href={url} key={uuidv4()}>
            <img key={uuidv4()} src={MainImage} alt={listing_id} />
          </a>
        </div>
        <div className="item-details" key={uuidv4()}>
          <p className="item-title" key={uuidv4()}>
            {tittleCLiser(title, 50)}
          </p>
          <p className="item-price" key={uuidv4()}>
            {priceValue(price, currency_code)}
          </p>
          <p className={quantityLevel(quantity)} key={uuidv4()}>
            {quantity + " left"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;

import { useCartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { cartData } = useCartContext();

  return (
    <a href="/cart">
      <span>
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png"
          width="45"
          height="45"
        />
      </span>
      <span>{ cartData }</span>
    </a>
  );
}

import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../../Redux/cartSlice";

import css from "./item.module.scss";

export default function ItemCart({ data }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(data?.quantity);
  const [totalPrice, setTotalPrice] = useState(+data?.price * +data?.quantity);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: data?.id }));
  };

  useEffect(() => {
    setTotalPrice(data?.price * quantity);
    dispatch(updateQuantity({ id: data?.id, quantity }));
  }, [quantity, data?.price, data?.id, dispatch]);

  return (
    <tr>
      <td style={{ maxWidth: 450, textAlign: "left" }}>
        <div className="d-flex align-items-center">
          <img src={data.imageUrl} alt="" style={{ width: 100 }} />
          <p style={{ marginLeft: 10 }}>{data.name}</p>
        </div>
      </td>
      <td className={css.price}>{data.price}$</td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className={css.changeBtn}
            onClick={() => {
              if (quantity > 1) {
                setQuantity((pre) => pre - 1);
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            className={css.input}
            onChange={handleChange}
          />
          <button
            className={css.changeBtn}
            onClick={() => setQuantity((pre) => pre + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className={css.price} style={{ fontWeight: "bold" }}>
        {totalPrice}$
      </td>
      <td>
        <button variant="danger" onClick={handleRemove}>
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
}

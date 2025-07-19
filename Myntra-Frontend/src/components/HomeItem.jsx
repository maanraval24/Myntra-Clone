import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/BagSlice";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const HomeIteam = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
    const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          <MdDelete />
          Remove from bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          <IoAdd />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeIteam;

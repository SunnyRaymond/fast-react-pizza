/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { useDispatch } from 'react-redux';

function UpdateItemQuanity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuanity;
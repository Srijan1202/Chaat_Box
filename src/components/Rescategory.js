import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const Rescategory = (props) => {

    console.log(props.detail)

    const dispatch = useDispatch();
    const additemtocart = (info) => {
        dispatch(addItem(info));
    }
  return (
    <div className="flex m-3 p-2 justify-between border-b-2">
      <div className="w-9/12">
        <div className="font-bold mb-2">{props.detail.name}</div>
        <div className="font-semibold">
          ₹{props.detail.price / 100}
        </div>
        <div className="flex align-center">
          <svg
            className="mt-1.5"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            
          >
            <rect width="14" height="14" fill="white"></rect>
            <path
              d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
              fill="#116649"
            ></path>
          </svg>
          <div className="mb-4 text-green-800">
            {props.detail.ratings.aggregatedRating.rating}
          </div>
        </div>
        <div>{props.detail.description}</div>
      </div>
      <div className="w-2/12 ">
      <button className="absolute ml-20 mt-24 bg-gray-400 rounded-lg text-black font-semibold p-1 flex justify-center"
      onClick={()=>additemtocart(props.detail)
      }
      > ADD </button>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
            props.detail.imageId
          }
          alt="img"
        />
      </div>
    </div>
  );
};

export default Rescategory;

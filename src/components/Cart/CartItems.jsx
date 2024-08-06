import { useContext, useEffect } from "react";
import UserContext from "@/Contexts/UserContext";

const CartItems = () => {
  const {orders  } = useContext(UserContext)




  return (
    <div className="w-full  shadow-md rounded-lg p-6 mb-5  ">
      <div className="p-4">
        <table className="min-w-full border-collapse">
          <tbody>
            {/* Order item */}
            {orders.map((item, index) => (
              <tr key={index} className="border-b border-muted">
                <td className=" flex py-5">
                <div className=" aspect-square w-44 border-2 "><img className="bg-cover" src={item.imageUrl} alt="" /></div>
                  <div className="mx-5 font-semibold" >
                  
                  </div>
                  </td>
                <td className="text-right">₹ {item.price}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">₹ {item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-6 bg-accent text-accent-foreground py-2 px-4 rounded-lg hover:bg-accent/80">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartItems;

import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { toast } from "sonner";



function UserCartItemsContent({ cartItem }) {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);



  function handleUpdateQuantity(getCartItem, typeOfAction) {
    dispatch(updateCartQuantity({
      userId: user?.id, 
      productId: getCartItem?.productId,
      quantity:typeOfAction === 'plus' ?
      getCartItem?.quantity + 1 :
      getCartItem?.quantity - 1
    })).then(data => {
      if(data?.payload?.success) {
        toast("Cart item is updated successfully");
      }
    })


  }


  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        toast("Cart item is deleted successfully");
      }
    });
  }







  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-bold">{cartItem?.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Button
            variant="outline"
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateQuantity(cartItem, "minus")}
            className="h-8 w-8 rounded-full" >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="font-semibold">{cartItem?.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => handleUpdateQuantity(cartItem, "plus")} >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          $
          {(
            (cartItem?.salePrice > 0 ? cartItem?.salePrice : cartItem?.price) *
            cartItem?.quantity
          ).toFixed(2)}
        </p>
        <Trash
          onClick={() => handleCartItemDelete(cartItem)}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  )

}

export default UserCartItemsContent;
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { StarIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice';
import { toast } from 'sonner';


function ProductDetailsDialog({ open, setOpen, productDetails }) {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);


    function handleAddToCart(getCurrentProductId) {
        console.log(getCurrentProductId);
        dispatch(addToCart({
            userId: user?.id,
            productId: getCurrentProductId,
            quantity: 1,
        })).then((data) => {
            if (data?.payload?.success) {
                dispatch(fetchCartItems(user?.id));
                toast("Added to cart");
            }
        });
    }





    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             bg-white rounded-lg shadow-lg grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] 
             sm:max-w-[80vw] lg:max-w-[70vw]">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={productDetails?.image}
                        alt={productDetails?.title}
                        width={600}
                        height={600}
                        className="aspect-square w-full object-cover" />
                </div>
                <div className="grid gap-6">
                    <div>
                        <DialogTitle className="text-3xl font-extrabold">
                            {productDetails?.title}
                        </DialogTitle>
                        <p className="text-muted-foreground text-2xl mb-5 mt-4">
                            {productDetails?.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p
                            className={`text-3xl font-bold text-primary ${productDetails?.salePrice > 0 ? "line-through" : ""
                                }`}
                        >
                            ${productDetails?.price}
                        </p>
                        {productDetails?.salePrice > 0 ? (
                            <p className="text-2xl font-bold text-muted-foreground">
                                ${productDetails?.salePrice}
                            </p>
                        ) : null}
                    </div>

                    <div className="mt-5 mb-5">
                        {/* {productDetails?.totalStock === 0 ? (
                            <Button className="w-full opacity-60 cursor-not-allowed">
                                Out of Stock
                            </Button>
                        ) : ( */}
                        <Button
                            className="w-full"
                            onClick={() =>
                                handleAddToCart(
                                    productDetails?._id,
                                    productDetails?.totalStock
                                )
                            }
                        >
                            Add to Cart
                        </Button>
                        {/* )} */}
                    </div>
                    <Separator />
                    <div className="max-h-[300px] overflow-auto">
                        <h2 className="text-xl font-bold mb-4">Reviews</h2>
                        <div className="grid gap-6"></div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                    </div>
                                    <span className='text-muted-foreground'>  (4.5)  </span>
                                    <h3 className="font-bold">SAHIL SINGH</h3>
                                </div>
                                <p className="text-muted-foreground">awesome product !</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                    </div>
                                    <span className='text-muted-foreground'>  (4.5)  </span>
                                    <h3 className="font-bold">SAHIL SINGH</h3>
                                </div>
                                <p className="text-muted-foreground">awesome product !</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                    </div>
                                    <span className='text-muted-foreground'>  (4.5)  </span>
                                    <h3 className="font-bold">SAHIL SINGH</h3>
                                </div>
                                <p className="text-muted-foreground">awesome product !</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <Avatar className="w-10 h-10 border">
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex items-center gap-0.5">
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                        <StarIcon className='w-5 h-5 fill-primary' />
                                    </div>
                                    <span className='text-muted-foreground'>  (4.5)  </span>
                                    <h3 className="font-bold">SAHIL SINGH</h3>
                                </div>
                                <p className="text-muted-foreground">awesome product !</p>
                            </div>
                        </div>
                        <div className='mt-6 flex gap-6'>
                            <input placeholder='Write a review' />
                            <Button>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDetailsDialog
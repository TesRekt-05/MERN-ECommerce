import { Dialog } from "../ui/dialog";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TableHead, TableHeader, TableRow, Table, TableBody, TableCell } from "../ui/table";
import ShoppingOrderDetailsView from "./order-details";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function ShoppingOrders() {
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.auth);
    // const { orderList, orderDetails } = useSelector((state) => state.shopOrder);

    // function handleFetchOrderDetails(getId) {
    //     dispatch(getOrderDetails(getId));
    // }

    // useEffect(() => {
    //     dispatch(getAllOrdersByUserId(user?.id));
    // }, [dispatch]);

    // useEffect(() => {
    //     if (orderDetails !== null) setOpenDetailsDialog(true);
    // }, [orderDetails]);

    // console.log(orderDetails, "orderDetails");

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Order Status</TableHead>
                            <TableHead>Order Price</TableHead>
                            <TableHead >
                                <span className="sr-only">Details</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>123456</TableCell>
                            <TableCell>15/06/2025</TableCell>
                            <TableCell>In Process</TableCell>
                            <TableCell>$1000</TableCell>
                            <TableCell>
                                <Dialog open={openDetailsDialog}
                                    onOpenChange={() => {
                                        setOpenDetailsDialog(false);
                                        // dispatch(resetOrderDetails());
                                    }}>
                                    <Button onClick={() =>
                                        setOpenDetailsDialog(true)}>
                                        View Details
                                    </Button>
                                    <ShoppingOrderDetailsView />
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export default ShoppingOrders;
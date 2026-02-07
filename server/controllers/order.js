import Order from '../models/Order.js';

export const postApiOrders = async (req, res) => {
    try {
        const { user, items, totalAmount } = req.body;

        const order = new Order({
            user,
            items,
            totalAmount
        });

        const savedOrder = await order.save();

        res.status(201).json({
            success: true,
            data: savedOrder,
            message: "Order placed successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

export const getApiOrdersByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const orders = await Order.find({ user: id }).sort({ createdAt: -1 });

        res.json({
            success: true,
            data: orders,
            message: "Orders fetched successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}



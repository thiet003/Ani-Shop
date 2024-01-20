import order from '../Container/Css/Order.module.css'
import React from "react";

function Order({ id, created_at, total_price }) {
    return (
        <div className={order.content}>
            <p className={order.order}>{id}</p>
            <p className={order.status}>Pending</p>
            <p className={order.time}>{created_at}</p>
            <p className={order.total_price}>{total_price} đ</p>
            <br />
        </div>
    );
}

export default Order;
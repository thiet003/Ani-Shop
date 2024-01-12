function Order({ id, created_at, total_price }) {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Time: {created_at}</p>
            <p>Total price: {total_price}</p>
            <br />
        </div>
    );
}

export default Order;
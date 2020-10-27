import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                        src={renderCartImage(product.images)} />
                    <p style={{ paddingLeft: '10px' }}>{product.title}</p>
                </td>
                <td>{product.quantity} шт</td>
                <td> {product.price} </td>
                <td><button
                    onClick={() => props.removeItem(product._id)}
                >Удалить</button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена ₽</th>
                        <th>Удаление</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock

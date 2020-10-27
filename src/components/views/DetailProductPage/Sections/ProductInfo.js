import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Цена"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Продаж">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Обратная связь"> Звоните по номеру 1488800</Descriptions.Item>
                <Descriptions.Item label="Описание"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Добавить в корзину
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo

import ProductList from './productList';

export default function Products() {
    const products = [
        {
            id:1,
            name:'wheat',
            weight:'2kg',
            price:'100rs'
        },
        {
            id:2,
            name:'rice',
            weight:'2kg',
            price:'120rs'
        },
        {
            id:3,
            name:'jowar',
            weight:'1kg',
            price:'50rs'
        }
    ]
    return (
        <div>
            {
                products.map((product) => {
                    return <ProductList key={product.id} product={product}></ProductList>
                })
            }
        </div>
    )
}

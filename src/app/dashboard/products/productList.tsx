import Link from 'next/link';

export default function ProductList(props: any) {
    return (
        <div>
            <Link href={`./products/${props.product.id}`}>{props.product.name}</Link>
        </div>
    )
}
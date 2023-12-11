import Link from 'next/link';

export default function Dashboard() {
    return (
        <div>
            <Link href="dashboard/customers">customers </Link>  &nbsp; &nbsp;
            <Link href="dashboard/vendors">vendors</Link> &nbsp; &nbsp;
            <Link href="dashboard/products">Products</Link>
        </div>
    )
}

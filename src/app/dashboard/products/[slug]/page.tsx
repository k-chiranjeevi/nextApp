export default function ProductDetail({ params }: { params: { slug: string } }) {
    console.log(params)
    return (
        <div>
            Details of product {params.slug}
        </div>
    )
}
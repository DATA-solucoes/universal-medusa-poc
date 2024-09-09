import {RouteConfig} from '@medusajs/admin'
import { Container, Heading  } from '@medusajs/ui'
import { BookOpen } from '@medusajs/icons'
import {useAdminProducts} from 'medusa-react'

const Page = () => {

    const { products } = useAdminProducts({
        expand: 'collection'
    })

    return (
        <Container>
            <Heading level="h1">Fotolivros</Heading>

            {products?.map((product) => {
                return (
                    <div key={ product.id }>
                    <Heading level='h3'>{product?.title}</Heading>
                    <span>{product?.collection_id}</span>
                    <pre>{JSON.stringify(product)}</pre>
                    </div>
                )
            })}
        </Container>
    )
}

export const config: RouteConfig = {
    link: {
        label: "Fotolivros",
        icon: BookOpen 
    }
}

export default Page
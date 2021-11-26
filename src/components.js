import {Col} from 'reactstrap'
import Product from './component/product'
import Counter from './component/counter'


function MyComponent() {
    console.log("terpanggil");
    return (
        <>
            <Col>
                <Product />
            </Col>
            <Col>
                <Counter />
            </Col>
        </>
    )
}
export default MyComponent;
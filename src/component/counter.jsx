import { Component } from "react";
import { Card, Col, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { DECREMENT, INCREMENT } from "../reducers/action";
import {connect} from 'react-redux';


class Counter extends Component {

    render() {
        const { order, dispatch } = this.props;
        return (
            <Col sm="2" >
                <Card className="shadow">
                    <CardHeader tag="strong">
                        <p>Counter</p>
                    </CardHeader>
                    <CardBody>
                        <h5 className="text-center">{order}</h5>
                    </CardBody>
                    <CardFooter>
                        <Button type="button" color="primary" className="float-left" onClick={() => dispatch({ type: INCREMENT })}>+</Button>
                        <Button type="button" color="primary" className="float-right" onClick={() => dispatch({ type: DECREMENT })}>-</Button>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}
export default connect(mapStateToProps)(Counter);



// function Counter(props) {

//     const {handleIncrement, data} = props

//     return (
//         <>
//             <h3>{data}</h3>
//             <button onClick={handleIncrement}>+</button>
//         </>
//     )
// }
import React from 'react'
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { decrement, increment } from '../Redux/Actions/Actions'

const Counter = (props) => {

    // console.log(props.count)
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const n = 5

    return (
        <div className="counterContainer">
            {/* Method 1 : without hooks */}
            {/* <Button variant="dark" onClick={() => props.increment(n)}>Increment</Button>
            <h2 className="count">{props.count}</h2>
            <Button variant="dark" onClick={() => props.decrement(n)}>Decrement</Button> */}

            {/* Method 2 : with hooks */}
            <Button variant="dark" onClick={() => dispatch(increment(n))}>Increment</Button>
            <h2 className="count">{count}</h2>
            <Button variant="dark" onClick={() => dispatch(decrement(n))}>Decrement</Button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return { count: state.count }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: (n) => dispatch(increment(n)),
//         decrement: (n) => dispatch(decrement(n))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
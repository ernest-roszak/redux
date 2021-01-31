import React from 'react'
import Button from '../components/Button';
import { connect } from "react-redux";
import { add, minus, reset} from "../../Counter/redux"

function Home({ counterValue, addValue, minusValue, resetValue }) {
    return (
        <div>
            <h1>Home {counterValue} </h1>
            <Button onClick={addValue} label="ADD Counter" />
            <Button onClick={minusValue} label="MINUS Counter" />
            <Button onClick={resetValue} label="RESET Counter" />
            <Button to="/" label="Load" />
            <Button to="/" label="Reset" />
            <Button to="/" label="Add" />
            <Button to="/users/" label="go to users" />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counterValue: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return  {
        addValue: () => dispatch(add()),
        minusValue: () => dispatch(minus()),
        resetValue: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

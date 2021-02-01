import React from 'react'
import Button from '../components/Button';
import { connect } from "react-redux";
import { add, minus, reset} from "../../Counter/redux"
import ButtonCounter from '../../Counter/components/ButtonCounter';

function Home({ counterValue, addValue, minusValue, resetValue }) {
    return (
        <div>
            <h1>Home {counterValue} </h1>
            <ButtonCounter onClick={addValue} label="ADD Counter" />
            <ButtonCounter onClick={minusValue} label="MINUS Counter" />
            <ButtonCounter onClick={resetValue} label="RESET Counter" />
            <Button to="/" label="Load" />
            <Button to="/" label="Reset" />
            <Button to="/" label="Add" />
            <Button to="/users/" label="go to users" />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counterValue: state.counterInStore.counter
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

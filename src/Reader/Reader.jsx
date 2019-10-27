import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';


class Reader extends Component {
    static defaultProps = {
        step: 1,
    };

    static propTypes = {};

    state = {
        publicationIdx: 0,
        disabled: true,
    };

    // handleDisabled = () => {
    //     if (this.state.publicationIdx === 0 || this.state.publicationIdx === this.props.items.length) {
    //         this.setState(() => ({
    //             disabled: true,
    //         }));
    //         return this.state.disabled;
    //     }
    // };

    handleIncrement = () => {
        // this.handleDisabled;
        if (this.state.publicationIdx < this.props.items.length - 1) {
            this.setState(prevState => ({
                publicationIdx: prevState.publicationIdx + this.props.step,
                disabled: false,
            }));
        };
    };

    handleDecrement = () => {
        if (this.state.publicationIdx > 0) {
            this.setState(prevState => ({
                publicationIdx: prevState.publicationIdx - this.props.step,
                disabled: false,
            }));
        };
    };

    render() {
        console.log(this.state.disabled);
        return (<div className={styles.reader}>
            <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} disabled={this.state.disabled} />
            <Counter currentIdx={this.state.publicationIdx + 1} allProps={this.props.items.length} />
            <Publication items={this.props.items[this.state.publicationIdx]} />
        </div>)
    }
};

export default Reader;
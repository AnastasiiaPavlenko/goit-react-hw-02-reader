import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';


class Reader extends Component {
    static defaultProps = {
        step: 1,
    };

    state = {
        publicationIdx: 0,
    };

    handleIncrement = () => {
        if (this.state.publicationIdx < this.props.items.length - 1) {
            this.setState(prevState => ({
                publicationIdx: prevState.publicationIdx + this.props.step,
            }));
        };
    };

    handleDecrement = () => {
        if (this.state.publicationIdx > 0) {
            this.setState(prevState => ({
                publicationIdx: prevState.publicationIdx - this.props.step,
            }));
        };
    };

    render() {
        const index = this.state.publicationIdx;
        const firstElement = index === 0;
        const lastElement = index === this.props.items.length - 1;
        return (<div className={styles.reader}>
            <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} firstElement={firstElement} lastElement={lastElement} />
            <Counter currentIdx={index + 1} allProps={this.props.items.length} />
            <Publication items={this.props.items[index]} index={this.state.publicationIdx + 1} />
        </div>)
    }
};

Reader.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Reader;
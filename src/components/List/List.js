import React from 'react';
import styles from './List.scss';
import Hero from './../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from './../Column/Column.js';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        src: PropTypes.string.isRequired
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} src={this.props.src} />
                {this.props.children}
                <div className={styles.columns}>
                    <Column title={['Passion']}/>
                    <Column title={['Work']}/>
                    <Column title={['Free Time']}/>
                </div>
            </section>
        )
    }
}

export default List;

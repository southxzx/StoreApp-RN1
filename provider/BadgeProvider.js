import React, { Component } from 'react';
import BadgeContext from '../context/BadgeContext'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 0
        }
        this.updateBadge = this.updateBadge.bind(this);
    }

    updateBadge(badge){
        this.setState({badge: badge})
    }

    render() {
        return (
            <BadgeContext.Provider value={{
                badge: this.state.badge,
                updateBadge: this.updateBadge
            }}>
                {this.props.children}
            </BadgeContext.Provider>
        );
    }
}
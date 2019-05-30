import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {faHome, faLightbulb, faWallet} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types";

const styles = {

    item: {
        padding: '4px 24px',
        '& svg': {
            fontSize: 20,
        },
    },
    itemIcon: {
        margin: 0,
    },
    categoryHeader: {
        padding: '24px 24px 16px',
    },
};
class MainListItems extends Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this)
    }
    goTo(local) {
        return () => {
            this.props.history.push(local)
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <ListItem button={true} onClick={this.goTo('')}  className={classes.categoryHeader}>
                    <ListItemIcon className={classes.itemIcon}>
                        <FontAwesomeIcon
                            icon={faHome}
                            size="lg"
                        />
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Home"/>
                </ListItem>

                <ListItem button onClick={this.goTo('')}  className={classes.categoryHeader}>
                    <ListItemIcon className={classes.itemIcon}>
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            size="lg"
                        />
                    </ListItemIcon>
                    <ListItemText disableTypography  primary="Suas ideias" />
                </ListItem>

            </div>
        );
    }
}
MainListItems.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter (withStyles(styles)(MainListItems))

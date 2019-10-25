import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './fab-styles';
import CircularProgress from '@material-ui/core/CircularProgress';


class FabButton extends Component {
    render() {
        const {
            onClick,
            variant = 'round',
            isFixedOnBottom = false,
            iconPosition = 'start',
            icon = <AddIcon />,
            style = {},
            customClass = {},
            color = 'primary',
            size = 'small',
            typeAdd = false,
            loading = false,
            text = '',
            ...rest
        } = this.props;

        const styles = isFixedOnBottom ? { ...useStyles.fabButton, ...useStyles.fabPadding, ...style } : { ...useStyles.fabPadding, ...style };
        const stylesAdd = isFixedOnBottom ? { ...useStyles.fabButton, ...style } : style;
        const iconStart = iconPosition == 'start' && icon;
        const iconEnd = iconPosition == 'end' && icon
        const content = [iconStart, text, iconEnd]
        console.log(styles)
        return (
            <Fab
                onClick={onClick}
                color={color}
                variant={variant}
                style={typeAdd ? stylesAdd : styles}
                size={size}
                className={customClass}
                typeAdd={typeAdd}
                fullWidth
                {...rest}
            >
                {loading ? <CircularProgress size={24} style={useStyles.buttonProgress} /> : content}
            </Fab>
        )
    }
}

export default FabButton;

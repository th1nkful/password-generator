import React from 'react';
import {
  TopNavigation, TopNavigationAction, Icon,
} from '@ui-kitten/components';

const navItem = () => (
    <TopNavigationAction icon={(style) => <Icon {...style} name="menu-2-outline" />} />
);
  
const Navigation = () => {
    return (
        <TopNavigation
            title="Password Generator"
            alignment="center"
            // leftControl={navItem()}
        />
    );
}

export default Navigation;

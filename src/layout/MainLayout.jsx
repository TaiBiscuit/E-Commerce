import React from 'react';

export const MainLayout = ({children}) => {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return(
        <div style = {styles}>{children}
        </div>
    )
}
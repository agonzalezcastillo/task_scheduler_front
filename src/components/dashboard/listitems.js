import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PublishIcon from '@material-ui/icons/Publish';
import FindInPageIcon from '@material-ui/icons/FindInPage';

export const MainListItems = (props) => {

    const clicHandler = (id)=>{
        alert("click on " + id);
    }

    return(
        <div>
            <ListItem button onClick={()=>props.clicHandler(1)}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button onClick={()=>props.clicHandler(2)}>
                <ListItemIcon>
                    <FindInPageIcon/>
                </ListItemIcon>
                <ListItemText primary="Consultar Asignaciones"/>
            </ListItem>
        </div>
    )
};

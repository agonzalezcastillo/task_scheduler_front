import React from "react";
import {Container, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialTable from "material-table";
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Search = () => {
    const classes = useStyles();

    const clicHandler = ()=>{
        console.log("busqueda OK!");
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return(
        <React.Fragment>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            >
                <Grid
                container
                item xs={12}
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Typography component="h1" variant="h6">
                            Nro de Orden de Compra
                    </Typography>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="filled-basic" label="#" variant="filled" />
                    </form>
                    <Button variant="contained" color="primary" onClick={clicHandler}>
                        Consultar
                    </Button>
                </Grid>
            <Grid
                item xs={12}
                md={12}
                lg={12}
                direction="row"
                justify="center"
                alignItems="center"
                style={{ maxWidth: '100%' }}
            >

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Datos Cliente</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            item xs={12}
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <MaterialTable
                                columns={[
                                    { title: 'Nombre', field: 'name' },
                                    { title: 'Rut', field: 'surname' },
                                    { title: 'Correo', field: 'email' },
                                    { title: 'Telefono', field: 'phoneNumber' }
                                ]}
                                data={[{ name: 'Pedro Perez', surname: '9.999.999-9', email: 'asd@falabella.com', phoneNumber: '+569123456789' }]}
                                title="Datos del Cliente"
                                options={{
                                    paging : false,
                                    search: false
                                }}
                            />
                        </Grid>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Pago</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Informacion de Pago
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Informacion de Pago 2
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Lineas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid
                            item xs={12}
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                        <MaterialTable
                            columns={[
                                { title: 'SKU', field: 'sku' },
                                { title: 'Description', field: 'description' },
                                { title: 'Cantidad', field: 'quantity', type: 'numeric' },
                                { title: 'Estado', field: 'status' }
                            ]}
                            data={[{ sku: 'LG ultragear', description: '4k 144hz 32"', quantity: 2, status: 'Allocated' }]}
                            title="Ordenes de Compra"
                            editable={{
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            // const dataUpdate = [...data];
                                            // const index = oldData.tableData.id;
                                            // dataUpdate[index] = newData;
                                            // setData([...dataUpdate]);

                                            resolve();
                                        }, 1000);
                                    })
                            }}
                            options={{
                                paging : false,
                                search: false,
                                actionsColumnIndex:99,
                            }}
                            localization={{
                                header: {
                                    actions: 'Acciones'
                                },
                            }}
                        />
                        </Grid>
                    </AccordionDetails>
                </Accordion>

            </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Search;
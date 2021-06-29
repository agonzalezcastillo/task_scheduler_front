import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Search = () => {

    const[asignsState, setAsignsState] = useState({});
    const[shift, setShiftState] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8090/api/tasks")
            .then(res => res.json())
            .then((result) => {
                console.log("--->",result);
                setAsignsState(result);
                setShiftState(result.jornadas);

            },(error)=>{
                    console.log(error.message)
                    alert("Oops!! esto es vergonzoso")
                })
    },[])

    const clicHandler = ()=>{
        console.log("busqueda OK!");
        fetch("http://localhost:8090/api/tasks")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setAsignsState(result);
                setShiftState(result.jornadas)
            },(error)=>{
                console.log(error.message);
                alert("Oops!! esto es vergonzoso")
            })
    }

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
                <li>
                    Horas jornada : {asignsState.hrs_jornada}

                </li>
                <li>
                    Dias termino : {asignsState.dias_termino}
                </li>
                <div>
                    {shift.map((item, index) => {
                        return (
                            <div>
                                <ul> - Duracion de jornada : {item.duracion}</ul>
                                <ul>tareas :</ul>
                                {item.tareas.map(item2 =>(
                                    <ul>{item2}</ul>
                                ))}
                            </div>
                        )
                    })
                    }
                </div>
            </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Search;
import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {DropzoneArea} from 'material-ui-dropzone'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const MassiveUpload = () => {
    const classes = useStyles();

    const clicHandler = ()=>{
        console.log("subir archivo OK!");
    }

    return(
        <React.Fragment>
            <Typography component="h1" variant="h6">
                Carga Masiva
            </Typography>
            <DropzoneArea
                // onChange={( (files)=>changeHandlerAsignacion(files)) }
                showFileNames
                dropzoneText="Arrastre archivo o haga clic para seleccionar"
                filesLimit= {1}
                acceptedFiles={['text/xlsx',
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'application/pdf'
                ]}
                // getFileAddedMessage={getFileAddedMessage}
                // getFileRemovedMessage={getFileRemovedMessage}
                // getDropRejectMessage={getDropRejectMessage}
            />
            <Button variant="contained" color="primary" onClick={clicHandler}>
                Cargar
            </Button>
        </React.Fragment>
    )
}

export default MassiveUpload;
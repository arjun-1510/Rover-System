import React from 'react';
import { Button, Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen';
import {Link}  from "react-router-dom"
import { fontSize } from '@mui/system';
import notes,{} from "../../data/notes";


const MyNotes = () => {
    return (
        <div>
            
        <MainScreen title="Welcome Back Arjun......">
            <Link to="createnote">
            <Button style={{marginLeft:10, marginBottom: 6}} size="lg">
                Create New Note
            </Button>
             {
                 notes.map(note => (
                    <Card style={{margin:10}}>
                    <Card.Header style={{display:"flex"}}>
                        <div  style={{
                            color:"block",
                            textDecoration: "none",
                            flex: 1,
                            cursor: "pointer",
                            alignSelf: "center",
                            fontSize: 18,
    
                        }}>
                            {note.title}
                        </div>
                   
                    <div>
                        <Button>Edit</Button>
                        <Button variant='danger' className="mx-2" >Delete</Button>
                    </div>
                    </Card.Header>
                </Card>

                 ))
             }

            
            </Link>
        </MainScreen>
        </div>
    )
}

export default MyNotes;

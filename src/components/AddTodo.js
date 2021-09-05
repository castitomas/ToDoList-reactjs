import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import{ useState } from 'react';
import {nanoid} from 'nanoid';


function AddTodo({ addTodo }) {


    const toast = useToast()


    //Submit de las tareas, si no hay contenido se activa el toast. Si hay contenido
    //Se le entrega al objeto un id con nanoid y el contenido al boy. Una vez agregar el input queda 
    //vacío.
    function handleSubmit(e){
        e.preventDefault();
        if(!content) {
            toast({
                title: "No hay contenido",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }


        const todo = {
            id: nanoid(),
            body: content,
        };
        
        addTodo(todo);
        setContent('');

    }

    const[content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input 
                variant="filled" 
                placeholder="Coloque aquí la tarea" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} //la funcion toma el contenido del input y lo manda a la funcion
                />
                <Button colorScheme="teal" px="8" type="submit">
                    Agregar tarea
                </Button>
            </HStack>
        </form>
    )
}


export default AddTodo;
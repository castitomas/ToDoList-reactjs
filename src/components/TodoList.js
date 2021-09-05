import React from 'react';
import {VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react';
import {FaTrash} from "react-icons/fa";


function TodoList ({ todos, deleteTodo }) {
    
    //Si el contenido de la lista de tareas está vacía, aparece el badge de "no hay tareas".
    if (!todos.length){
        return(
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
            No hay tareas.
        </Badge>    
        )
    }

    return (
    <VStack 
        divider={<StackDivider />} 
        borderColor="gray.100" 
        borderWidth="2px" 
        p="4" 
        borderRadius="lg" w="100%"
        maxW={{base:'90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}  
        alignItems="stretch"> 
        {todos.map((todo) =>(
            <HStack key={todo.id}>
                <Text>
                    {todo.body}
                </Text>
                <Spacer />
                <IconButton 
                    icon={<FaTrash />} 
                    isRound="true" 
                    onClick={() => deleteTodo(todo.id)}  /> //onClick ejectuta la funcion para borrar la tarea, cuando uno apreta el botón.
            </HStack>
        ))}
    </VStack>
    )}

export default TodoList;
import { Container, Form, Input, Button } from './styles'
import todoLogo from '../../assets/todoLogo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { FormEvent, useState, ChangeEvent} from 'react'

interface Props {
    onAddTask: (taskTitle: string) => void;
}
export function Header({onAddTask}: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
 return (
    <Container>
        <img src={todoLogo} alt='todoLogo' />

        <Form onSubmit={handleSubmit}>
            <Input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
            <Button>
                Criar
                <AiOutlinePlusCircle size={20} />
            </Button>
        </Form>
    </Container>
 );
}
import { Itask } from '../../App';
import { Task } from '../Task';
import {
    Section, Header, Div, P, P2, Span, List
} from './styles';

interface Props {
    tasks: Itask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}
export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length; /* quantidade de tasks */
    const completedTasks = tasks.filter(task => task.isCompleted).length; /* função que pega a quantidade de tarefas concluidas através de um filter de tasks com is completed TRUE*/
 return (
    <Section>
        <Header>
            <Div>
                <P>Tarefas Criadas</P>
                <Span>{tasksQuantity}</Span>
            </Div>

            <Div>
                <P2>Concluídas</P2>
                <Span>{completedTasks} de {tasksQuantity}</Span>
            </Div>
        </Header>

        <List>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
            ))}
        </List>
    </Section>
 );
}
import { TbTrash } from 'react-icons/tb'
import { Itask } from '../../App';
import { Div, Button, ButtonCheck, P, Div2,  } from './styles';
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
    task: Itask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const paragraph = event.target as HTMLParagraphElement;
        paragraph.classList.toggle('completed');
    };

    return (
        <Div>
            <ButtonCheck onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <Div2 />}
            </ButtonCheck>

            <P className={task.isCompleted ? 'completed' : ''} onClick={handleClick}>
                {task.title}
            </P>

            <Button onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </Button>
        </Div>
    );
}

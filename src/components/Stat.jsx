import { Alert } from 'react-bootstrap';
import {BsCheck2All} from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx';
export default function Stat({todo}) {
  return (
    <section className='stat'>
      <Alert variant='success'>
        <BsCheck2All/><b>{todo.filter((todoItem) => todoItem.isDone).length}</b>
      </Alert>
      <Alert style={{marginLeft:"30px"}} variant='warning'>
        <RxCross1/>
        <b>{todo.filter((todoItem) => !todoItem.isDone).length}</b>
      </Alert>
    </section>
  );
}

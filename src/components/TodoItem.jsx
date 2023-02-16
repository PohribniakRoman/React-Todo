import { Alert, Badge,  } from "react-bootstrap";
import {BsTrash} from 'react-icons/bs';
import {BsCheck2All} from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx';

export default function TodoItem({ data, changeStatus, deleteItem }) {
  return (
      <Alert className="todo" variant={data.isDone?"success":"warning"}>
        <h5>
          {data.title}<Badge>{data.date}</Badge>
        </h5>
        <div>{`Creator:${data.name}`}</div>
        <div className="controls">
          <div onClick={changeStatus}>{data.isDone?<BsCheck2All/>:<RxCross1/>} </div>
          <div onClick={deleteItem}> <BsTrash/></div>
        </div>
      </Alert>
  );
}

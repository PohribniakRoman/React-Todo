import {BsDoorOpen} from 'react-icons/bs';


export default function Logout({changeStatus}) {
  return (
    <div className="name">
      <div className='name--logout' onClick={() => {
          changeStatus(false);
          localStorage.removeItem("user");
        }}><BsDoorOpen/></div>
      <div className="name--label">{localStorage.getItem('user')}</div>
    </div>
  );
}

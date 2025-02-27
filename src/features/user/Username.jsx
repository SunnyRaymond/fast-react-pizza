import { useSelector } from 'react-redux';
import { getUsername } from './userSlice';

function Username() {
  const userName = useSelector(getUsername);

  if (!userName) {
    return null;
  }

  return <div className="text-sm font-semibold md:block">{userName}</div>;
}

export default Username;

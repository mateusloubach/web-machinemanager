import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageVariants, pageTransition } from '../../assets/framerMotionAnimation';
import UserCard from '../../components/Cards/UserCard';
import Title from '../../components/headings/Title';
import reducerTypes from '../../store/ducks/reducerTypes';
import { loadGetUsersRequest } from '../../store/ducks/users/actions';
import { UserType } from '../../store/ducks/users/types';

import { Container } from './styles';

const Users: React.FC = () => {
  const dispatch = useDispatch()
  const usersGlobalState = useSelector((state: reducerTypes) => state.reducerUsers.users)
  const [users, setUsers] = useState<UserType[]>()

  useEffect(() => {
    if (usersGlobalState.length === 0) {
      dispatch(loadGetUsersRequest())
    } else {
      setUsers(usersGlobalState)
    }
  }, [usersGlobalState, dispatch])

  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Title>Users</Title>
      {
        users?.map((user: UserType) => (
          <UserCard key={user.id} {...user}/>
        ))
      }
    </Container>
  )
}

export default Users;
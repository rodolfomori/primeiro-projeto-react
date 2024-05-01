import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc'

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 40px;
  width: 340px;
`

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  border: none;
  color: #ffffff;
  width: 130px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`

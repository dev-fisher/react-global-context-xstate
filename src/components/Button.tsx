import { useContext } from 'react'
import { context } from '../context/GlobalContext'
import { useActor } from '@xstate/react';


import '../index.css'

interface Props {
    action: 'ACTIVATE' | 'DISABLE';
}

const Button = ({action}: Props) => {

    const {machineService} = useContext(context);
    const [, send] = useActor(machineService);

  return (
    <button onClick={()=>send({type:action})} className="btn">{action}</button>
  )
}

export default Button
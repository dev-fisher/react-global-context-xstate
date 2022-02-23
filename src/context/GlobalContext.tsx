import { useInterpret } from '@xstate/react';
import { createContext,  ReactElement,  useState } from 'react';
import { InterpreterFrom } from 'xstate';
import { machine } from '../machines/Machine';

export const context = createContext({
    machineService: {} as InterpreterFrom<typeof machine>,
    background: 'red',
    counter: 0,
});


interface Props {
	children: ReactElement;
}

const ContextWrapper = ({ children }: Props) => {

    const [counter, setCounter] = useState(1);
    const [background, setBackground] = useState('red');

	const machineService = useInterpret(machine, {
		actions: {
			redBackground: (context, event)=>{
				setCounter(prev=>prev+1);
                setBackground('red');
			},
			greenBackground: (context, event)=>{
				setCounter(prev=>prev+1);
                setBackground('green');
			},
            
		}
	});    

	return (
		<context.Provider value={{machineService, background, counter}}>
			{children}
		</context.Provider>
	);
};

export default ContextWrapper;

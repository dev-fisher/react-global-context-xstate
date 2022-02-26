import { useContext } from 'react';
import { context } from '../context/GlobalContext';

import '../index.css';

const Counter = () => {
	const { counter, background } = useContext(context);

	return (
		<div className="counter" style={{ background }} data-testid="counter">
			{counter}
		</div>
	);
};

export default Counter;

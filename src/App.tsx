import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import ContextWrapper from './context/GlobalContext';


import './index.css'

function App() {
	return (
		<ContextWrapper>
			<div className="container">
				<div>
					<Button action="ACTIVATE" />
					<Button action="DISABLE" />
					<div className='break' />
					<Counter />
				</div>
			</div>
		</ContextWrapper>
	);
}

export default App;

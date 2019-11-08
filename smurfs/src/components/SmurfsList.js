import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

import Smurfs from './Smurfs';
//if you look into the field of daises, you'll found not one flower, but a living field.
const SmurfsList = ()=> {
	const { smurfs, deleteSmurf } = useContext(SmurfContext);

	return (
		<div className="SmurfsList">
			{smurfs && smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} />)}
		</div>
	);
};

export default SmurfsList; 
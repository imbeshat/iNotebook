import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
	const notesInitial = [
		{
			_id: '62a9772a76539aa43de8dabc0',
			user: '62a84bdc8097b4c47d521962',
			title: 'Marvels',
			description: 'Superheroes of marvel universe',
			tag: 'Superhero',
			date: '2022-06-15T06:07:38.869Z',
			__v: 0,
		},
		{
			_id: '62aa0dcf33119w5387210018d',
			user: '62a84bdc8097b4c47d521962',
			title: 'DC Super',
			description: 'Superheroes of DC universe',
			tag: 'Superhero',
			date: '2022-06-15T16:50:23.836Z',
			__v: 0,
		},
		{
			_id: '62aa0dcf3311s95387210018d',
			user: '62a84bdc8097b4c47d521962',
			title: 'DC Super',
			description: 'Superheroes of DC universe',
			tag: 'Superhero',
			date: '2022-06-15T16:50:23.836Z',
			__v: 0,
		},
		{
			_id: '62aa0dcf3311953f87210018d',
			user: '62a84bdc8097b4c47d521962',
			title: 'DC Super',
			description: 'Superheroes of DC universe',
			tag: 'Superhero',
			date: '2022-06-15T16:50:23.836Z',
			__v: 0,
		},
		{
			_id: '62aa0dcf3311953c87210018d',
			user: '62a84bdc8097b4c47d521962',
			title: 'DC Super',
			description: 'Superheroes of DC universe',
			tag: 'Superhero',
			date: '2022-06-15T16:50:23.836Z',
			__v: 0,
		},
	];
	const [notes, setNotes] = useState(notesInitial);
	return <NoteContext.Provider value={{ notes, setNotes }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;

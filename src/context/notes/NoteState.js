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

	//   Add a Note
	const addNote = (title, description, tag) => {
		console.log('Adding a new note');
		const note = {
			_id: '62aa0dcf3311953c87210018d',
			user: '62a84bdc8097b4c47d521962',
			title: title,
			description: description,
			tag: tag,
			date: '2022-06-15T16:50:23.836Z',
			__v: 0,
		};
		setNotes(notes.concat(note));
	};

	//  Delete a Note
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	//  Edit a Note
	const editNote = () => {};

	return (
		<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>{props.children}</NoteContext.Provider>
	);
};

export default NoteState;

import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
	const host = 'http://localhost:5000';
	const notesInitial = [];
	const [notes, setNotes] = useState(notesInitial);

	//   Get all Note
	const getNotes = async () => {
		//  API call
		const response = await fetch(`${host}/api/notes/fetchallnotes`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODRiZGM4MDk3YjRjNDdkNTIxOTYyIn0sImlhdCI6MTY1NTIwMDMzOX0.T1_wh7Rt823jBjNJguMo9dzajksum6FwjnkXvAHa8BQ',
			},
		});
		const json = await response.json();
		console.log(json);
		setNotes(json);
	};

	//   Add a Note
	const addNote = async (title, description, tag) => {
		//  API call
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODRiZGM4MDk3YjRjNDdkNTIxOTYyIn0sImlhdCI6MTY1NTIwMDMzOX0.T1_wh7Rt823jBjNJguMo9dzajksum6FwjnkXvAHa8BQ',
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json);

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
	const deleteNote = async (id) => {
		//  API call
		const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODRiZGM4MDk3YjRjNDdkNTIxOTYyIn0sImlhdCI6MTY1NTIwMDMzOX0.T1_wh7Rt823jBjNJguMo9dzajksum6FwjnkXvAHa8BQ',
			},
		});
		const json = response.json();
		console.log(json);

		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};

	//  Edit a Note
	const editNote = async (id, title, description, tag) => {
		//  API call
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'auth-token':
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODRiZGM4MDk3YjRjNDdkNTIxOTYyIn0sImlhdCI6MTY1NTIwMDMzOX0.T1_wh7Rt823jBjNJguMo9dzajksum6FwjnkXvAHa8BQ',
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = await response.json();
		console.log(json);

		let newNotes = JSON.parse(JSON.stringify(notes));

		//  Login to edit in client
		for (let index = 0; index < newNotes.length; index++) {
			const element = newNotes[index];
			if (element._id === id) {
				newNotes[index].title = title;
				newNotes[index].description = description;
				newNotes[index].tag = tag;
				break;
			}
		}
		setNotes(newNotes);
	};

	return (
		<NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;

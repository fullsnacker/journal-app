import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({
	title = 'Nuevo...',
	body,
	id,
	date,
	imageUrls = []
}) => {
	const dispatch = useDispatch();

	const onClickNote = () => {
		dispatch(setActiveNote({ title, body, id, date, imageUrls }));
	};

	const newTitle = useMemo(() => {
		<ListItemText secondary={body} />;
		return title.length > 17
			? title.substring(0, 17).toUpperCase() + '...'
			: title.toUpperCase();
	}, [title]);

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onClickNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={new Date(date).toLocaleString('es')} />
					<ListItemText secondary={`${newTitle}`} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};

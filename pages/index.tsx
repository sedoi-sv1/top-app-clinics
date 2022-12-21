import React, { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';


export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<div>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='s' color='red'>Red</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			{/*<Input placeholder='Тест' />
	<TextArea placeholder='Тест area' />*/}
		</div>
	);
}

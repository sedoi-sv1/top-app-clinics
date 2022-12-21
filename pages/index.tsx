import React, { useState } from 'react';
import { Htag, Button, P, Rating } from '../components';
import { Tag } from '../components/Tag/Tag';
import { Layout, withLayout } from '../layout/Layout'

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);
	return (
		<>
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
			{/*<<Input placeholder='Тест' />
	<TextArea placeholder='Тест area' />*/}
		</>
	);
}

export default withLayout(Home);

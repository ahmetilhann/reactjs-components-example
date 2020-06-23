import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovelCard from './ApprovelCard';

const App = () => {
  return (
    <div className="ui container comments">

			<ApprovelCard>
				<h4>Warning!</h4>
				Are you sure want this?
			</ApprovelCard>

			<ApprovelCard>
				<CommentDetail 
					author="ahmet" 
					timeAgo="today at 4:00 PM" 
					content="I like this post" 
					avatar={Faker.image.avatar()}
				/>
			</ApprovelCard>
			<CommentDetail 
				author="murat" 
				timeAgo="today at 2:00 PM" 
				content="Amazing post"
				avatar={Faker.image.avatar()}
			/>
			<CommentDetail 
				author="huseyin" 
				timeAgo="yesterday at 4:00 PM" 
				content="Conguralation post"
				avatar={Faker.image.avatar()}
			/>
		</div>
  );
}

export default ReactDOM.render(<App />, document.querySelector('#root'));
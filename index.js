import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments" > 
        <ApprovalCard>
        <CommentDetail image={faker.image.avatar()} author="Sam" date="Today 9 pm" text="Check for new post" />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail image={faker.image.avatar()} author="Alex" date="Today 7 am" text="Nice blog" />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail image={faker.image.avatar()} author="Jane" date="Yesterday 10 am" text="Hello! Checkout" />
        </ApprovalCard>
        </div>
        
    );

};

ReactDOM.render(<App />,document.querySelector("#root"));
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

const NewMeetup = () => {
    const history = useHistory();

    const addMeetupHandler = (DATAFORM) => {
        fetch('https://meetups-app-9b46d-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(DATAFORM),
            headers:{
                'Content-Type' : 'application/json'
            }
        }
        ).then(() =>{
            history.replace('/');
        })
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetup;

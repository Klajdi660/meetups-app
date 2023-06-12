import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
    const history = useHistory();

    const addMeetupHandler = (data) => {
        const url = "https://meetups-1065f-default-rtdb.firebaseio.com/meetups.json"; 
        const headers = {
            'Content-Type' : 'application/json'
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        })
        .then(() => {
            history.replace('/');
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetup;

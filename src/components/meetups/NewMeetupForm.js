import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
    const titleInputRef = useRef(); //hooks
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const data = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDesc
        }

        props.onAddMeetup(data);
    };

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='addres' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' required id='description' ref={descInputRef} />
                </div>
                <div className={classes.actions}>
                    <button> Add Meetup </button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;

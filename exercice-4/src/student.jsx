const Student = (props) => {
    return (
        <li>
            <article>
                <h3>{props.name}</h3>
                <ul>
                    {props.notes.map((note,i) => <li key={i}>{props.note}</li> )}
                </ul>
            </article>
        </li>
        );
};
export default Student;
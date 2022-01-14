import Score from "./Score";
function Student(props) {
    return (
        <div id="box">
            <p>Name: {props.data.name}</p>
            <p>Bio: {props.data.bio}</p>
            {props.data.scores.map((score,index)=>{
                return <Score score={score} key={index}/>
            })}
            
        </div>
    );
}

export default Student;
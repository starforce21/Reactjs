function Data(props) {
    return (
        <div>
            <p>From 01/02/2022 to 01/25/2022</p>
            <p>Trading Day{props.day}</p>
            <p>Closing Price: {props.data.c}</p>
            <p>Opening Price: {props.data.o}</p>
            <p>Day High: {props.data.h}</p>
            <p>Day Low: {props.data.l}</p>
            <p>Volume: {props.data.v}</p>
        </div>
    );
}

export default Data;
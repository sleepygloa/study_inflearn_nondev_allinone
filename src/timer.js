import React from 'react';

function TimeComponent(){
    const [time, setTime] = React.useState(0);
    console.log('component update');

    // function updateTime(){
    //     setTime(time+1 );
    // }

    React.useEffect(()=>{
        setTime(time+1);
        console.log(); 
    }, []);
    return (
        <div>
            <h3>{time}초</h3>
            <button >1씩 올려주세요</button>
        </div>
    );
}
export default TimeComponent; 
import React, {useState, useMemo} from 'react';

const getAverage = numbers => {
    console.log('get average...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    const avg = useMemo(() => getAverage(list), [list]);
    //list 배열이 바뀔 때만 getAverage 함수 호출

    return(
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>submit</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>average: </b>{avg}
                {/* <b>average: </b> {getAverage(list)} */}
            </div>
        </div>
    )
}

export default Average;
import { useState } from 'react';
import BoilingVerdict from './BoilingVerict';

export default function Calculator() {
    const [temperature, setTempertauter] = useState();
    const handleChange = (e) => {
        setTempertauter(e.target.value);
    };

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요</legend>
            <input value={temperature} onChange={handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

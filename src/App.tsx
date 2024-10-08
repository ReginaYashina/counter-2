import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {


    const [maxValue, setMaxValue] = useState('7');
    const [startValue, setStartValue] = useState('0');


    const setStartValueHandler = (value: string) => {
        setStartValue(value)
    }

    const setMaxValueHandler = (value: string) => {
        setMaxValue(value)
    }

    const startValueNumber = Number(startValue)
    const maxValueNumber = Number(maxValue)


    const [count, setCount] = useState(startValueNumber);

    const setIncCounter = () => {
        count < maxValueNumber && setCount(count + 1);
    }

    const resetIncCounter = () => {
        setCount(startValueNumber);
    }


    useEffect(() => {
        const localStorageMaxValue = localStorage.getItem('max value')
        const localStorageMinValue = localStorage.getItem('start value')
        if (localStorageMaxValue) {
            setMaxValue(localStorageMaxValue)
        }
        if (localStorageMinValue) {
            setStartValue(localStorageMinValue)
            setCount(Number(localStorageMinValue))
        }
    }, []);

    const setValues = () => {
        localStorage.setItem('max value', maxValue)
        localStorage.setItem('start value', startValue)
        setCount(startValueNumber)
        openSettings()
    }

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const openSettings = () => {
        setIsSettingsOpen(!isSettingsOpen)
    }

    return (
        <div className="App">
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     count={count}
                     setStartValue={setStartValueHandler}
                     setMaxValue={setMaxValueHandler}
                     setIncCounter={setIncCounter}
                     resetIncCounter={resetIncCounter}
                     setValues={setValues}
                     openSettings={openSettings}
                     isSettingsOpen={isSettingsOpen}
            />
        </div>
    );
}

export default App;

import {SettingsBoard} from './SettingsBoard';
import {CounterBoard} from './CounterBoard';

type CounterPropsType = {
    maxValue: string
    startValue: string
    count: number
    setStartValue: (startValue: string) => void
    setMaxValue: (maxvalue: string) => void
    setIncCounter: (count: number) => void
    resetIncCounter: (count: number) => void
    setValues: () => void
    openSettings: () => void
    isSettingsOpen: boolean
};
export const Counter = ({
                            maxValue,
                            startValue,
                            count,
                            setStartValue,
                            setMaxValue,
                            setIncCounter,
                            resetIncCounter,
                            setValues,
                            openSettings,
                            isSettingsOpen
                        }: CounterPropsType) => {
    return (
        <div>

            {isSettingsOpen
                ?
                <SettingsBoard maxValue={maxValue}
                               startValue={startValue}
                               setStartValue={setStartValue}
                               setMaxValue={setMaxValue}
                               setValues={setValues}/>

                : <CounterBoard count={count}
                                setIncCounter={setIncCounter}
                                resetIncCounter={resetIncCounter}
                                openSettings={openSettings}
                />

            }
        </div>
    );
};
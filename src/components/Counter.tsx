import {SettingsBoard} from './SettingsBoard';
import {CounterBoard} from './CounterBoard';
import {Container, Grid2} from '@mui/material';

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
        <Container sx={{minHeight: '100vh'}}>
            <Grid2 container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
                {isSettingsOpen
                    ?
                    <SettingsBoard maxValue={maxValue}
                                   startValue={startValue}
                                   setStartValue={setStartValue}
                                   setMaxValue={setMaxValue}
                                   setValues={setValues}/>

                    : <CounterBoard maxValue={maxValue}
                                    count={count}
                                    setIncCounter={setIncCounter}
                                    resetIncCounter={resetIncCounter}
                                    openSettings={openSettings}
                    />

                }
            </Grid2>
        </Container>
    );
};
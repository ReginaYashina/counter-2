import {Button, Grid2, Paper} from '@mui/material';
import s from './counter.module.css'

type CounterBoardPropsType = {
    count: number
    maxValue: string
    setIncCounter: (count: number) => void
    resetIncCounter: (count: number) => void
    openSettings: () => void
};

export const CounterBoard = ({
                                 count,
                                 maxValue,
                                 setIncCounter,
                                 resetIncCounter,
                                 openSettings,
                             }: CounterBoardPropsType) => {

    const setIncCounterHandler = () => {
        setIncCounter(count)
    }

    const resetIncCounterHandler = () => {
        resetIncCounter(count)
    }


    return (
        <Paper
            elevation={12}
            sx={{maxWidth: '450px', height: '200px', padding: '20px'}}>
            <Grid2 container height={'100%'} flexDirection={'column'} alignContent={'center'}
                   justifyContent={'space-around'}>
                <div className={count === Number(maxValue) ? `${s.count} ${s.countMax}` : s.count}>{count}</div>
                <div>
                    <Button
                        variant="contained"
                        onClick={setIncCounterHandler}
                        sx={{margin: '0 3px'}}
                        disabled={count === Number(maxValue)}>inc</Button>
                    <Button
                        variant="contained"
                        onClick={resetIncCounterHandler}
                        sx={{margin: '0 3px'}}>reset</Button>
                    <Button
                        variant="contained"
                        onClick={openSettings}
                        sx={{margin: '0 3px'}}>set</Button>
                </div>
            </Grid2>

        </Paper>
    );
};
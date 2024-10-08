import {Button} from '@mui/material';

type CounterBoardPropsType = {
    count: number
    setIncCounter: (count: number) => void
    resetIncCounter: (count: number) => void
    openSettings: () => void
};

export const CounterBoard = ({
                                 count,
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
        <div>
            <div>{count}</div>
            <div>
                <Button
                    variant="contained" onClick={setIncCounterHandler}>inc</Button>
                <Button variant="contained" onClick={resetIncCounterHandler}>reset</Button>
                <Button variant="contained" onClick={openSettings}>set</Button>
            </div>
        </div>
    );
};
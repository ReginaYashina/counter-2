import {Button, Grid2, Paper, TextField} from '@mui/material';
import {ChangeEvent, useState} from 'react';
import s from './counter.module.css'

type SettingsBoardPropsType = {
    maxValue: string
    startValue: string
    setStartValue: (startValue: string) => void
    setMaxValue: (maxValue: string) => void
    setValues: () => void
};
export const SettingsBoard = ({
                                  maxValue,
                                  startValue,
                                  setStartValue,
                                  setMaxValue,
                                  setValues
                              }: SettingsBoardPropsType) => {
    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMaxValue(e.currentTarget.value);
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStartValue(e.currentTarget.value);
    }

    const inputClass = Number(maxValue) < 0 || Number(startValue) < 0 || Number(maxValue) <= Number(startValue) ? s.error : ''
    const isDisabled = Number(maxValue) < 0 || Number(startValue) < 0 || Number(maxValue) <= Number(startValue) ? true : false
    return (
        <Paper
            elevation={12}
            sx={{maxWidth: '450px', height: '200px', padding: '20px'}}>
            <Grid2 container height={'100%'} flexDirection={'column'} alignContent={'center'}
                   justifyContent={'space-around'}>
                <TextField
                    type={'number'}
                    value={startValue}
                    variant="outlined"
                    onChange={setStartValueHandler}
                    className={inputClass}
                    label="start value"
                />
                <TextField
                    type={'number'}
                    value={maxValue}
                    variant="outlined"
                    onChange={setMaxValueHandler}
                    className={inputClass}
                    label="max value"/>
                <Button
                    variant="contained"
                    onClick={setValues}
                    disabled={isDisabled}>set</Button>
            </Grid2>
        </Paper>
    );
};
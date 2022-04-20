import { FC } from 'react';
import style from '../../styles/Container.module.css';

export const Container:FC=({children})=>{
    return(
        <div className={`${style.default}`}>{children}</div>
    )
}
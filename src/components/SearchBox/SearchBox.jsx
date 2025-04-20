import css from "../SearchBox/SearchBox.module.css";

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from '../../redux/contactsSlice.js';

export default function SearchBox(){
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const onFilter = (arg) => {
        dispatch(setFilter(arg)); 
    }

    return(
        <div className={css.searchBox}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.input} type="text" name="name" value={value} onChange={(e)=> onFilter(e.target.value)} />
        </div>
    )
}
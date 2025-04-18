import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({value, onFilter}){
    return(
        <div className={css.searchBox}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.input} type="text" name="name" value={value} onChange={(e)=> onFilter(e.target.value)} />
        </div>
    )
}
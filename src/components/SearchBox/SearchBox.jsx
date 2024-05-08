import css from './SearchBox.module.css';

const SearchBox = ({filter, onFilter}) => {
    return (
        <div className={css.inputWrapper}>
             <label className={css.label}>Find contacts by name</label>
            <input
                type="text"
                name="search"
                value={filter}
                onChange={(e) => onFilter(e.target.value)}
                className={css.input}
            />   
        </div>
    )
}

export default SearchBox;
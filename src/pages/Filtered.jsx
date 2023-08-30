import React, {useState, useMemo} from "react"
import ListItem from "../components/listItem";

const FilteredList = ({quotes}) => {
    const [ author, setAuthor ] = useState(null);

    const authors = useMemo(() => [...new Set(quotes.map(i => i.author))],[quotes]);
    const filteredquotes = useMemo(() => [[author, i => i.author === author],]
        .reduce((acc, i) => i[0] ? acc.filter(i[1]) : acc, quotes),[ quotes, author ]);

    return (
        <div>
            <p className="favourites__header">Поиск: </p>
            <div className="quotes__container">
                <select value={author} onChange={e => setAuthor(e.target.value)} className="custom__select">
                    <option>Поиск...</option>
                    {authors.map(i => <option>{i}</option>)}
                </select>
                {filteredquotes.map(i => <ListItem item={i} />)}
            </div>
        </div>
    )
};

export default FilteredList;
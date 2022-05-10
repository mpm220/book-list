import React, {useRef} from "react";


export default function SearchBar(props){
    const inputEl = useRef("");
    const getSearchTerm = () => {props.handleSearch(inputEl.current.value)};
    return(
        <input className="search" type="text" placeholder="Search..." value={props.term} onChange={getSearchTerm} ref={inputEl}/>
    )
}

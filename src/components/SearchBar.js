import React, {useRef} from "react";


export default function SearchBar(props){
    const inputEl = useRef("");
    const getSearchTerm = () => {props.searchKeyword(inputEl.current.value)};
    return(
        <input className="search" type="text" placeholder="Search..." value={props.term} onChange={getSearchTerm} ref={inputEl}/>
    )
}
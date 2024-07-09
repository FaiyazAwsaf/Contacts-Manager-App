const Header = ( {onAddContacts, onSearch} ) => {
       
    return(
        <div className="header">
            <h1>Contact Manager</h1>
            <button className="addContact-btn" onClick={onAddContacts}>Add Contacts</button>

            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search Contact" 
                    className="search-input"
                    onChange={(event) => onSearch(event.target.value)} />
                <button className="search-btn">Search</button>
            </div>
        </div>

        
    )

}

export default Header;
import "./styles.css"

interface searchProp{
    searchData:(value:string) => void;
}

const SearchBox = ({searchData}:searchProp):JSX.Element =>{
    const ChangeData = (e:React.ChangeEvent<HTMLInputElement>)  => {
        searchData(e.target.value);
    }

    return(
        <section className="search-box-container">
            <h2>Buscador de Productos</h2>
            <input
                className="search-box"
                type="text"
                placeholder="ingrese su busqueda" 
                onChange={ChangeData} />
        </section>
    )

}

export default SearchBox;
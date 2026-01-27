import Input from "../input";
import "./styles.css";

export default function Filter({ search, setSearch }) {
    return (
        <div className="filter">
            <Input 
                type="text" 
                value={search} 
                setter={setSearch} 
                id="search" 
                name="search" 
                label="Buscar por nome" 
                placeholder="Digite o nome do produto..."
            />
        </div>
    );
}

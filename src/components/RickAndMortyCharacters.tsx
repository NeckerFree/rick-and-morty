
import { useRickAndMortyData } from "../customHooks/useRickAndMortyData";
function RickAndMortyCharacters()
{
    const {
        data,
        loading,
        error,
        currentPage,
        setCurrentPage,
        totalPages
    } = useRickAndMortyData("character")
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>
    if (!data?.results?.length) return <div>No characters found</div>;
    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul className="character-grid">{data.results.map(character => (
                <li key={character.id} className="character-card">
                    <img src={character.image} alt={character.name} className="image-info" />
                    <div className="character-info">
                        <h2>{character.name}</h2>
                        <p>Status: {character.status} </p>
                        <p>Species: {character.species}</p>
                    </div>
                </li>
            ))}
            </ul>
            <div className="pagination">
                <div>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</button>
                </div>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div >
    )
}

export default RickAndMortyCharacters;

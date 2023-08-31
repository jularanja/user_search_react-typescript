import {BsSearch} from "react-icons/bs";
const Search = () => {
  return (
    <div>
        <h2>Find user:</h2>
        <div>
            <input type="text" placeholder='Type text here' />
            <button>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search
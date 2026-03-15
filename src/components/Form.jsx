import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormStyled } from "../styles/Form.styled";

function Form({ data, setRegion, setSearch }) {
  const regions = [...new Set(data.map((item) => item.region).filter(Boolean))];

  return (
    <FormStyled>
      <div className="form-group">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <label className="sr-only" htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <label className="sr-only" htmlFor="region"></label>
      <select
        onChange={(e) => setRegion(e.target.value)}
        name="region"
        id="region"
      >
        <option value="" defaultValue={"Filter by Region"}>
          Filter by Region
        </option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select>
    </FormStyled>
  );
}

export default Form;

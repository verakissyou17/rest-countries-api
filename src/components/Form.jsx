import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormStyled } from "../styles/Form.styled";

function Form({ data, setRegion, setSearch }) {
  const regions = [...new Set(data.map((item) => item.region).filter(Boolean))];

  return (
    <FormStyled>
      <div className="form-group">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <select
        onChange={(e) => setRegion(e.target.value)}
        name="region"
        id="region-select"
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

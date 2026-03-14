import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

function App() {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setDarkThemeEnabled((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", darkThemeEnabled ? "dark" : "light");
  }, [darkThemeEnabled]);

  const fetchData = async () => {
    try {
      const response = await fetch("../../data.json");
      if (!response.ok) {
        throw new Error("Couldn't fetch the data.");
      }
      const data = response.json();
      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  const filteredCountries = data.filter((country) => {
    const matchingRegion = region === "" || country.region === region;

    const matchingSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchingRegion && matchingSearch;
  });

  const scrollPage = () => {
    const arrow = document.querySelector(".arrowdown .icon");
    arrow.classList.add("reversed");
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      arrow.classList.remove("reversed");
    }
  };

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              filteredCountries={filteredCountries}
              scrollPage={scrollPage}
              darkThemeEnabled={darkThemeEnabled}
              toggleTheme={toggleTheme}
              setSearch={setSearch}
              setRegion={setRegion}
            />
          }
        />
        <Route
          path="/country/:code"
          element={
            <CountryPage
              data={data}
              toggleTheme={toggleTheme}
              darkThemeEnabled={darkThemeEnabled}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

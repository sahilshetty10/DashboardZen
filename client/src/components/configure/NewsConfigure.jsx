import React, { useState, useEffect } from "react";

const NewsConfigure = () => {
  const newsCategories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countryCodes = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (localStorage.newsCountry) {
      setSelectedCountry(localStorage.newsCountry);
    }
    if (localStorage.newsCategory) {
      setSelectedCategory(localStorage.newsCategory);
    }
  }, []);

  const handleSave = () => {
    localStorage.newsCountry = selectedCountry;
    localStorage.newsCategory = selectedCategory;
    alert("Configuration saved successfully")
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="container-title">News Configuration</h2>
      <div className="flex w-full flex-col gap-4">
        <label htmlFor="newsCountry">Country</label>
        <select
          name="newsCountry"
          id="newsCountry"
          className="w-full rounded-[15px] border bg-slate-100 px-8 py-4 uppercase"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countryCodes.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full flex-col gap-4">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="w-full rounded-[15px] border bg-slate-100 px-8 py-4 capitalize"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {newsCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button
        className="rounded-[15px] border bg-slate-100 px-8 py-4 hover:bg-slate-200"
        onClick={handleSave}
      >
        Save
      </button>
    </section>
  );
};

export default NewsConfigure;

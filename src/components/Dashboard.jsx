import { useEffect, useState } from "react";
import CategoryNav from "./CategoryNav";
import CardsContainer from "./CardsContainer";

export default function Dashboard({ category }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterNew, setFilterNew] = useState(false);

  useEffect(() => {
    const handleSearch = (e) => {
      const detail = e?.detail || {};
      if (typeof detail.query !== "undefined") {
        setSearchQuery(detail.query);
      }
    };

    const handleFilterNew = (e) => {
      const detail = e?.detail || {};
      if (typeof detail.filterNew !== "undefined") {
        setFilterNew(detail.filterNew);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("tools:search", handleSearch);
      window.addEventListener("tools:filter-new", handleFilterNew);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("tools:search", handleSearch);
        window.removeEventListener("tools:filter-new", handleFilterNew);
      }
    };
  }, []);

  return (
    <>
      <CategoryNav filter={category} />
      <CardsContainer
        filter={category}
        searchQuery={searchQuery}
        filterNew={filterNew}
      />
    </>
  );
}

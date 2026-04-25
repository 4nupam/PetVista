import { useMemo, useState } from "react";
import { Pet, SortOption } from "../Hooks/";

export const usePetFilters = (data: Pet[] | null) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("DATE_NEWEST");

  const filteredData = useMemo(() => {
    if (!data) return [];

    let result = [...data];

    // 🔍 SEARCH FILTER
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (pet) =>
          pet.title.toLowerCase().includes(query) ||
          pet.description.toLowerCase().includes(query)
      );
    }

    // ↕️ SORTING
    result.sort((a, b) => {
      switch (sort) {
        case "NAME_ASC":
          return a.title.localeCompare(b.title);

        case "NAME_DESC":
          return b.title.localeCompare(a.title);

        case "DATE_NEWEST":
          return (
            new Date(b.created).getTime() -
            new Date(a.created).getTime()
          );

        case "DATE_OLDEST":
          return (
            new Date(a.created).getTime() -
            new Date(b.created).getTime()
          );

        default:
          return 0;
      }
    });

    return result;
  }, [data, search, sort]);

  return {
    search,
    setSearch,
    sort,
    setSort,
    filteredData,
  };
};
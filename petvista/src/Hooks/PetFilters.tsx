import { SortOption } from "../";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  sort: SortOption;
  setSort: (value: SortOption) => void;
};

const PetFilters = ({ search, setSearch, sort, setSort }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/2"
      />

      {/* ↕️ Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as SortOption)}
        className="border p-2 rounded-lg w-full md:w-1/4"
      >
        <option value="NAME_ASC">Name A-Z</option>
        <option value="NAME_DESC">Name Z-A</option>
        <option value="DATE_NEWEST">Newest First</option>
        <option value="DATE_OLDEST">Oldest First</option>
      </select>
    </div>
  );
};

export default PetFilters;
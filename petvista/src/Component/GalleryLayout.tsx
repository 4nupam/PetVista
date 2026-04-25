import usePetStore from "../Zustand/usePetStore";
import PetCard from "./Card";
import Filter from "../Hooks/PetFilters";

const PetGallery = () => {
  const { data, loading, error } = usePetStore();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="pet-container">
      <div className="pet-grid">
        {data?.map((pets) => (
          <PetCard key={pets.id} pets={pets} />
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
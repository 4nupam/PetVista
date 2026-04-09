import usePetStore from "../Zustand/usePetStore";
import PetCard from "./Card";

const PetGallery = () => {
  const { data, loading, error } = usePetStore();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="pet-container">
      <div className="pet-grid">
        {data?.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
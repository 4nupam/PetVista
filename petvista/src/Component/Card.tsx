type Pet = {
  title: string;
  description: string;
  url: string;
  created: string;
};

const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.url} alt={pet.title} className="pet-image" />
      
      <div className="pet-content">
        <h2 className="pet-title">{pet.title}</h2>
        <p className="pet-description">{pet.description}</p>
        <p className="pet-date">
          {new Date(pet.created).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PetCard;
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModifActionButton = ({ onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    const id = onEdit();
    navigate(`/home/edit/${id}`); // Redirection vers la page de modification, demandenant le nom de l'action pour pré-remplir le champs de texte
  };

  return (
    <button
      onClick={handleEdit}
      className="edit-button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginRight: '5px', 
      }}
    >
      <Pencil size={40} color="#26a269" strokeWidth={2} />
    </button>
  );
};

export default ModifActionButton;

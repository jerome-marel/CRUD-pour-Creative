import { useNavigate } from 'react-router-dom';
import { ListPlus } from 'lucide-react';

const AddInboxButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home/add');
  };

  return (
    <div>
      <ListPlus onClick={handleButtonClick} size={24} /> 
    </div>
  );
};

export default AddInboxButton;
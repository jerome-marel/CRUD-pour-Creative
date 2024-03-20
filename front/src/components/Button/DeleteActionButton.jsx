//https://lucide.dev/icons/circle-x

import { CircleX } from 'lucide-react';

const DeleteActionButton = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={handleDelete}
        className="delete-button"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <CircleX size={40} color="#c01c28" strokeWidth={1.25} />
      </button>
    </div>
  );
};

export default DeleteActionButton;
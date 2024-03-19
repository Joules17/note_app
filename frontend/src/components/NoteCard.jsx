const NoteCard = ({ note, setSelectedNote, setOpenNoteModal }) => {
    
    // limit content 
    const truncateContent = (content, maxLength) => {
      if (content.length > maxLength) {
        return content.substring(0, maxLength) + "...";
      } else {
        return content;
      }
    };

    // format date 
    const formatLastUpdated = (lastUpdated) => {
        const date = new Date(lastUpdated);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return date.toLocaleString('en-US', options);
      };

      const handleSelectNote = () => {
        setSelectedNote(note);
        setOpenNoteModal(true); 
      }
  
    return (
      <div className="max-w-[300px] max-h-[350px] bg-white rounded-lg overflow-hidden m-4 border-2 border-black transition duration-300 ease-in-out transform hover:scale-105 hover:border-green-500">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-green-900">
            {note.title}
          </div>
          <p className="text-black text-base mb-10">{truncateContent(note.content, 150)}</p>
          <p className="font-bold text-gray-600 text-sm mb-4">Last updated: {formatLastUpdated(note.lastUpdated)}</p>
          <hr className="border-gray-500 my-4" />
          <button onClick = {handleSelectNote} className="text-green-900 text-center font-bold w-full">VIEW NOTE</button>
        </div>
      </div>
    );
  };
  
  export default NoteCard;
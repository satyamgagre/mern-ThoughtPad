import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, onDelete, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
      onDelete?.(id); // optional refresh callback
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/notes/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-[#db934b]"
    >
      <div className="card-body">
        <h3 className="card-title">{note.title}</h3>
        <p className="line-clamp-3">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm opacity-60">
            {note.createdAt &&
              new Date(note.createdAt).toLocaleDateString()}
          </span>

          <div className="flex gap-1">
            <button className="btn btn-ghost btn-xs text-primary">
              <PenSquareIcon className="size-4" />
            </button>

            <button
              onClick={(e) => handleDelete(e, note._id)}
              className="btn btn-ghost btn-xs text-error"
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

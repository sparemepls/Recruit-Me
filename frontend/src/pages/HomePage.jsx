import React from "react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a success Toast")}
      >
        Click me
      </button>
    </div>
  );
}

export default HomePage;

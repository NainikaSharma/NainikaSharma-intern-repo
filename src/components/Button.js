import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-2
        bg-blue-500
        text-white
        font-semibold
        rounded-lg
        hover:bg-blue-700
        active:scale-95
        transition-transform
        duration-150
      "
    >
      {children}
    </button>
  );
}

export default Button;
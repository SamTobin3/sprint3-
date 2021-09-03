import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <div className="HOLD UP, WAIT A MIN" role="alert">
        {error}
      </div>
    </div>
  );
}

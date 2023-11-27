import { useState } from "react";

export default function CopyBtn({
  normalStateClass,
  CopiedStateClass,
  valueToCopy,
}) {
  const [isCopying, setIsCopying] = useState("initial");

  function handleCopy() {
    setIsCopying("copying");
    navigator.clipboard
      .writeText(valueToCopy)
      .then(() => setIsCopying("copied"));
  }

  return (
    <button
      className={`${
        isCopying === "initial"
          ? normalStateClass
          : isCopying === "copied"
          ? CopiedStateClass
          : ""
      }`}
      onClick={() => handleCopy()}
    >
      {isCopying === "initial"
        ? "copy"
        : isCopying === "copying"
        ? "copying..."
        : isCopying === "copied"
        ? "copied"
        : ""}
    </button>
  );
}

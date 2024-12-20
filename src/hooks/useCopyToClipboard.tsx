import { useState } from "react";

interface UseCopyToClipboardOptions {
  resetTime?: number;
}

const useCopyToClipboard = (options?: UseCopyToClipboardOptions) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);

      const resetTime = options?.resetTime || 2000;
      setTimeout(() => {
        setIsCopied(false);
      }, resetTime);
    } catch (err) {
      setError("Failed to copy to clipboard");
      console.error("Copy failed:", err);
    }
  };

  return { isCopied, copy, error };
};

export default useCopyToClipboard;

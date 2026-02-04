"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="w-full flex flex-col sm:flex-row items-center justify-evenly px-4 sm:px-8 py-2 text-xs sm:text-sm gap-2 sm:gap-0"
      style={{ background: "#9333EA", color: "white" }}
    >
      {/* Text */}
      <div className="text-center sm:text-left">
        <span className="font-bold">
          New: Cornor Tech Academy is now live!{" "}
          <span className="font-medium">
            Learn from expert mentors with hands-on online courses
          </span>
        </span>
      </div>

      {/* Actions */}
      <div className="ml-20 flex items-center gap-2 sm:gap-4 text-black mt-2 sm:mt-0">
        {/* Explore Button */}
        <Link
          href="https://cornor.academy/"
          target="_self"
          className="flex items-center gap-1 font-semibold"
        >
          <span className="flex justify-center items-center gap-0.5 bg-white rounded-md px-3 py-1">
            Explore courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 13 12"
            >
              <path
                fillRule="evenodd"
                d="M6.954 8.593a.56.56 0 0 1-.777 0L2.584 5.09a.225.225 0 0 1-.002-.321l.453-.453c.09-.089.236-.09.326-.001l3.205 3.123L9.77 4.316a.233.233 0 0 1 .326.001l.453.453c.09.089.089.233-.002.32z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="p-1 hover:bg-black/10 rounded"
          aria-label="Close banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
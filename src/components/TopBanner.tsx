"use client";

import { useState } from "react";
import Link from "next/link";
import { BannerProps } from "@/types";

export default function TopBanner({visible, setVisible}:BannerProps) {
  // const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-2.5 text-xs sm:text-sm gap-3 sm:gap-4 relative overflow-hidden"
      style={{ background: "#111827", color: "white" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Left: Announcement Badge */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-semibold">
            🎉 NEW
          </span>
          <span className="sm:hidden px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-semibold">
            NEW
          </span>
        </div>

        {/* Center: Text */}
        <div className="flex-1 text-center sm:text-left px-2">
          <span className="font-semibold">
            Cornor Tech Academy is now live!{" "}
            <span className="hidden lg:inline font-normal opacity-90">
              Master cutting-edge skills with expert-led courses in Web Development, AI/ML, Digital Marketing, and more.
            </span>
            <span className="lg:hidden font-normal opacity-90">
              Learn from expert mentors with hands-on courses.
            </span>
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Explore Button */}
          <Link
            href="https://cornor.academy/"
            target="_self"
            className="group flex items-center gap-1.5 font-semibold transition-all duration-200"
          >
            <span className="flex justify-center items-center gap-1.5 bg-white text-[#111827] rounded-lg px-4 py-1.5 sm:px-5 sm:py-2 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-sm">
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                Explore Courses
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="transform group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </span>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Close banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
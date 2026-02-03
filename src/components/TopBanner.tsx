"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopBanner() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
            className="w-full flex items-center justify-center gap-35 px-15 py-2 text-sm"
            style={{ background: "#9333EA", color: "#00303B" }}
        >
            {/* Text */}
            <span className="font-medium">
                New: Cornor Tech Academy is now live!{" "}
                <span className="font-mono">
                     Learn from expert mentors with hands-on online courses
                </span>
            </span>

            {/* Actions */}
            <div className="ml-55 flex items-center gap-4">
                {/* Download Button */}
                <Link
                    href="https://www.capcut.com/activity/download_pc?download_channel=capcutpc_off_web_diverse_pc"
                    target="_self"
                    className="flex items-center gap-1 font-semibold"
                >
                    <span className="flex justify-center items-center gap-0.5 bg-white rounded-md p-2">
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

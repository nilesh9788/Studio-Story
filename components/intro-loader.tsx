"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");
  const brand = "Studio Story";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(brand.slice(0, index + 1));
      index++;
      if (index === brand.length) clearInterval(typing);
    }, 90);

    return () => clearInterval(typing);
  }, []);

  // Auto hide
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#fafafa] flex items-center justify-center overflow-hidden font-[var(--font-poppins)]">
      {/* Whiteboard grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#e6e6e6_1px,transparent_1px),linear-gradient(90deg,#e6e6e6_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* ===== STICKY NOTES ===== */}

      {/* Branding */}
      <div className="sticky-note large yellow top-[10%] left-[5%] rotate-[-6deg]">
        Branding ✨
        <p className="text-[12px] mt-1 opacity-100">
          We believe the best advertising starts with a great story. Our team of
          screenwriters, creative directors, and strategists transform brand
          visions into cinematic experiences.
        </p>
      </div>

      {/* Ads */}
      <div className="sticky-note medium pink top-[22%] left-[22%] rotate-[4deg]">
        Ads that convert
        <div className="mt-2 flex gap-1 h-10">
          <span className="bar h-[40%]" />
          <span className="bar h-[70%]" />
          <span className="bar h-[55%]" />
          <span className="bar h-[90%]" />
        </div>
      </div>

      {/* Growth */}
      <div className="sticky-note small green top-[18%] right-[26%] rotate-[-3deg]">
        Growth 📈
        <p className="text-[10px] mt-1 opacity-70">test → learn → scale</p>
      </div>

      {/* Social */}
      <div className="sticky-note medium purple bottom-[26%] left-[18%] rotate-[3deg]">
        Social-first content
        <p className="text-[10px] mt-1 opacity-70">reels • shorts • hooks</p>
      </div>

      {/* Film */}
      <div className="sticky-note large orange bottom-[22%] right-[18%] rotate-[-4deg]">
        Film & Storytelling 🎬
        <div className="mt-3 space-y-1">
          <div className="line w-[60%]" />
          <div className="line w-[80%]" />
          <div className="line w-[45%]" />
        </div>
      </div>

      {/* Strategy */}
      <div className="sticky-note small blue bottom-[7%] right-[38%] rotate-[2deg]">
        {"Story > Ads"}
      </div>

      {/* ===== CENTER BOARD ===== */}
      <div className="relative z-10 w-[440px] h-[260px] bg-white border-2 border-dashed border-neutral-300 rounded-xl shadow-xl flex flex-col items-center justify-center">
        <span className="absolute top-3 left-4 text-xs text-neutral-400">
          whiteboard session
        </span>

        <h1
          className="text-5xl font-semibold"
          style={{ letterSpacing: "-0.04em" }}
        >
          {text}
          <span className="typing-cursor" />
        </h1>

        <p className="mt-4 text-xs text-neutral-500 tracking-wide">
          crafting stories, not ads
        </p>
      </div>

      {/* Marker Scribble */}
      <svg
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
        width="220"
        height="40"
        viewBox="0 0 220 40"
        fill="none"
      >
        <path
          d="M5 20 C40 5, 80 35, 120 20 C160 5, 200 30, 215 20"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-draw"
        />
      </svg>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .sticky-note {
          position: absolute;
          padding: 10px 12px;
          font-size: 15px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
          animation: float 3.5s ease-in-out infinite;
        }

        .small {
          width: 120px;
        }

        .medium {
          width: 160px;
        }

        .large {
          width: 200px;
        }

        .yellow {
          background: #fef08a;
        }
        .pink {
          background: #fbcfe8;
        }
        .green {
          background: #bbf7d0;
        }
        .purple {
          background: #e9d5ff;
        }
        .orange {
          background: #fed7aa;
        }
        .blue {
          background: #bfdbfe;
        }

        .bar {
          flex: 1;
          background: #000;
          opacity: 0.6;
          border-radius: 2px;
          align-self: flex-end;
        }

        .line {
          height: 2px;
          background: #000;
          opacity: 0.6;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(var(--tw-rotate));
          }
          50% {
            transform: translateY(-10px) rotate(var(--tw-rotate));
          }
        }

        .animate-draw {
          animation: draw 1.4s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .typing-cursor {
          display: inline-block;
          width: 1px; /* 👈 THIN line */
          height: 1.2em;
          background: #000;
          margin-left: 4px;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

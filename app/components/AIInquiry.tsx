import { memo, useState, useCallback, useRef } from "react";
import { useFetcher } from "@remix-run/react";
import {
  HiOutlineSparkles,
  HiOutlineDocumentArrowUp,
  HiOutlineXMark,
  HiOutlinePaperAirplane,
  HiOutlineDocumentText,
  HiOutlinePhoto,
} from "react-icons/hi2";
import { LiaLinkedin } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const BUDGET_OPTIONS = [
  { value: "", label: "Select your estimated budget" },
  { value: "500-1000", label: "$500 — $1,000" },
  { value: "1000-3000", label: "$1,000 — $3,000" },
  { value: "3000-5000", label: "$3,000 — $5,000" },
  { value: "5000-10000", label: "$5,000 — $10,000" },
  { value: "10000+", label: "$10,000+" },
  { value: "discuss", label: "Let's discuss" },
];

const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_FILES = 3;

function getFileIcon(type: string) {
  if (type.startsWith("image/")) return HiOutlinePhoto;
  return HiOutlineDocumentText;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / 1048576).toFixed(1)}MB`;
}

function AIInquiry() {
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isImproved, setIsImproved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const rewriteFetcher = useFetcher<{ rewritten?: string; error?: string }>();
  const submitFetcher = useFetcher<{
    success?: string;
    error?: string;
  }>();

  const isRewriting = rewriteFetcher.state !== "idle";
  const isSubmitting = submitFetcher.state !== "idle";

  // Handle AI rewrite response
  if (
    rewriteFetcher.data?.rewritten &&
    rewriteFetcher.state === "idle" &&
    !isImproved
  ) {
    setMessage(rewriteFetcher.data.rewritten);
    setIsImproved(true);
  }

  const handleRewrite = useCallback(() => {
    if (!message.trim() || isRewriting) return;
    setIsImproved(false);
    rewriteFetcher.submit(
      { intent: "rewrite", message: message.trim() },
      { method: "POST", action: "/api/inquiry" }
    );
  }, [message, isRewriting, rewriteFetcher]);

  const handleSubmit = useCallback(() => {
    if (!message.trim() || !budget) return;

    const formData = new FormData();
    formData.append("intent", "submit");
    formData.append("message", message.trim());
    formData.append("budget", budget);
    files.forEach((file) => formData.append("files", file));

    submitFetcher.submit(formData, {
      method: "POST",
      action: "/api/inquiry",
      encType: "multipart/form-data",
    });
  }, [message, budget, files, submitFetcher]);

  // Reset form on successful submission
  if (submitFetcher.data?.success && submitFetcher.state === "idle" && message) {
    setMessage("");
    setBudget("");
    setFiles([]);
    setIsImproved(false);
  }

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDragging) setIsDragging(true);
    },
    [isDragging]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
        ACCEPTED_FILE_TYPES.includes(file.type)
      );
      setFiles((prev) => [...prev, ...droppedFiles].slice(0, MAX_FILES));
    },
    []
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files || []);
      setFiles((prev) => [...prev, ...selected].slice(0, MAX_FILES));
      if (fileInputRef.current) fileInputRef.current.value = "";
    },
    []
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const canSubmit = message.trim().length > 0 && budget !== "";

  return (
    <div
      className="glass rounded-2xl p-6 lg:p-8 space-y-6"
      role="region"
      aria-labelledby="inquiry-heading"
      id="inquiry"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2
          id="inquiry-heading"
          className="text-white text-xl md:text-2xl font-display font-bold tracking-tight"
        >
          What problem is your business facing?
        </h2>
        <p className="text-white/50 text-sm">
          Describe your challenge — I'll help you articulate it clearly.
        </p>
      </div>

      {/* Status Messages */}
      {submitFetcher.data?.success && (
        <div className="bg-secondary/15 border border-secondary/30 rounded-xl px-4 py-3 text-secondary text-sm font-medium" role="alert">
          {submitFetcher.data.success}
        </div>
      )}
      {(submitFetcher.data?.error || rewriteFetcher.data?.error) && (
        <div className="bg-red-500/15 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-medium" role="alert">
          {submitFetcher.data?.error || rewriteFetcher.data?.error}
        </div>
      )}

      {/* Text Area */}
      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setIsImproved(false);
          }}
          placeholder="e.g., We need a web platform for our organization that handles public services, but our current site is slow and hard to navigate..."
          rows={5}
          className="w-full px-4 py-4 rounded-xl bg-white/5 text-white border border-white/10 outline-none transition-all duration-200 resize-none placeholder:text-white/30 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 focus:bg-white/8 text-sm leading-relaxed"
          aria-label="Describe your business problem"
        />

        {/* AI Rewrite Button */}
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={handleRewrite}
            disabled={!message.trim() || isRewriting}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Improve message with AI"
          >
            <HiOutlineSparkles
              className={`w-4 h-4 ${isRewriting ? "animate-spin" : ""}`}
            />
            {isRewriting
              ? "Improving..."
              : isImproved
              ? "Improve again"
              : "Improve my message"}
          </button>
          {isImproved && (
            <span className="text-secondary/70 text-xs font-medium flex items-center gap-1">
              <HiOutlineSparkles className="w-3 h-3" />
              AI improved
            </span>
          )}
        </div>
      </div>

      {/* File Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative rounded-xl border-2 border-dashed transition-all duration-200 cursor-pointer ${
          isDragging
            ? "border-primary/50 bg-primary/5"
            : "border-white/10 hover:border-white/20 hover:bg-white/3"
        } ${files.length >= MAX_FILES ? "opacity-50 pointer-events-none" : ""}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Upload files"
        />
        <div className="flex items-center gap-3 px-4 py-3">
          <HiOutlineDocumentArrowUp
            className={`w-5 h-5 flex-shrink-0 ${
              isDragging ? "text-primary" : "text-white/40"
            }`}
          />
          <div>
            <p className="text-white/60 text-xs font-medium">
              {isDragging
                ? "Drop files here"
                : "Drag & drop files or click to browse"}
            </p>
            <p className="text-white/30 text-[11px]">
              PDF, images, or docs — max {MAX_FILES} files
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((file, index) => {
            const FileIcon = getFileIcon(file.type);
            return (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <FileIcon className="w-4 h-4 text-white/50 flex-shrink-0" />
                <span className="text-white/70 text-xs font-medium truncate max-w-[140px]">
                  {file.name}
                </span>
                <span className="text-white/30 text-[10px]">
                  {formatFileSize(file.size)}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="text-white/30 hover:text-white/60 transition-colors ml-1"
                  aria-label={`Remove ${file.name}`}
                >
                  <HiOutlineXMark className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Budget + Submit Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Budget Selector */}
        <div className="relative flex-1">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none transition-all duration-200 appearance-none cursor-pointer text-sm focus:border-primary/50 focus:ring-2 focus:ring-primary/15 focus:bg-white/8"
            aria-label="Select estimated budget"
          >
            {BUDGET_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[#0a0e14] text-white"
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!canSubmit || isSubmitting}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-primary/20 whitespace-nowrap"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <HiOutlinePaperAirplane className="w-4 h-4" />
              Send Inquiry
            </>
          )}
        </button>
      </div>

      {/* Minimal Contact Strip */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <a
          href="mailto:ansucoder@gmail.com"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-medium group"
          aria-label="Email"
        >
          <HiOutlineMail className="w-4 h-4 group-hover:text-primary transition-colors" />
          ansucoder@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ansu-badjie-3a979b280/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-medium group"
          aria-label="LinkedIn"
        >
          <LiaLinkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
          LinkedIn
        </a>
        <a
          href="https://wa.me/2203338111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-medium group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4 group-hover:text-secondary transition-colors" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default memo(AIInquiry);

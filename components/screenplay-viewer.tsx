"use client"

import { useState, useRef, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface Screenplay {
  id: number
  title: string
  category: string
  pages: number
  year: number
  logline: string
  format: string
  pdfUrl?: string
}

interface ScreenplayViewerProps {
  screenplay: Screenplay
  onBack: () => void
}

export function ScreenplayViewer({ screenplay, onBack }: ScreenplayViewerProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>(screenplay.pages || 1)
  const [pageWidth, setPageWidth] = useState(800)

  const viewerRef = useRef<HTMLDivElement>(null)

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, totalPages))
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1))

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage()
      if (e.key === "ArrowLeft") prevPage()
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [totalPages])

  /* ✅ Responsive PDF width (desktop + mobile safe) */
  useEffect(() => {
    const updateWidth = () => {
      if (!viewerRef.current) return
      const containerWidth = viewerRef.current.offsetWidth
      setPageWidth(Math.min(containerWidth - 32, 800))
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="sticky top-20 z-40 bg-secondary border-b border-border p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 hover:text-accent">
            ← Back
          </button>

          <h2 className="text-lg font-semibold text-center flex-1">
            {screenplay.title}
          </h2>

          {screenplay.pdfUrl ? (
            <a
              href={screenplay.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
            >
              Download PDF
            </a>
          ) : (
            <div className="w-24" />
          )}
        </div>
      </div>

      <div ref={viewerRef} className="flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
          <div className="h-[60vh] overflow-y-auto flex justify-center">
            {screenplay.pdfUrl ? (
              <Document
                file={encodeURI(screenplay.pdfUrl)}
                onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
              >
                <Page
                  pageNumber={currentPage}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            ) : (
              <div className="text-center p-12 text-muted-foreground">
                <h3 className="text-lg font-medium">No PDF available</h3>
                <p className="text-sm mt-2">
                  This screenplay does not have a PDF attached.
                </p>
              </div>
            )}
          </div>

          <div className="bg-secondary border-t border-border p-4 flex justify-between items-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            <div className="text-sm">
              <input
                type="number"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={e => {
                  const v = Number(e.target.value)
                  if (v >= 1 && v <= totalPages) setCurrentPage(v)
                }}
                className="w-16 text-center border rounded px-2 py-1"
              />
              <span className="ml-2">of {totalPages}</span>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

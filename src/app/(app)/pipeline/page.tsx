import { PipelineBoard } from "@/components/pipeline-board";

export default function PipelinePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-1 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Pipeline</h1>
          <p className="mt-1 text-sm text-muted">
            Move deals with the ‹ › buttons, add new ones, or remove them — it&apos;s fully interactive.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <PipelineBoard />
      </div>
    </div>
  );
}

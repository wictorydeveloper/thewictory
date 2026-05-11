import Image from "next/image";

export function AiVisual() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-ink shadow-premium dark:border-white/10">
      <Image
        src="/ai-marketing-lab.svg"
        alt="AI marketing lab visual showing strategy, content, ads and analytics"
        width={1440}
        height={900}
        className="h-full min-h-[24rem] w-full object-cover"
      />
    </div>
  );
}

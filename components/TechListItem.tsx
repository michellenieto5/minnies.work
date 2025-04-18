// components/TechListItem.tsx
export default function TechListItem({ children }: { children: React.ReactNode }) {
    return (
      <li className="flex items-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 mt-[2px] text-purple-400">
          <path fillRule="evenodd" d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z" clipRule="evenodd" />
        </svg>
        <span>{children}</span>
      </li>
    );
  }
  
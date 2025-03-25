export default function ContentWidthContainer({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6 lg:px-12">{children}</div>;
}

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({children}: TitleProps) {
  return (
    <h2 className="self-center px-3 py-2 text-2xl font-semibold rounded-lg max-w-fit bg-primary_green text-zinc-900">
    {children}
  </h2>
  )
}

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="w-full px-10 py-2 mx-auto md:px-16 md:py-1">{children}</div>
  )
}

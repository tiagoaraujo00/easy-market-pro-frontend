interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: Readonly<ContainerProps>) {
  return (
    <div className="w-full px-5 mx-auto md:px-16">{children}</div>
  )
}

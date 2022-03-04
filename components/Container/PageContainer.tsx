import Container, { Height } from './Container'

export type PageContainerProps = {
  children: React.ReactNode
  height?: Height
}

export default function PageContainer({
  children,
  height,
}: PageContainerProps) {
  return (
    <div className="lg:min-h-hero bg-violet-100">
      <Container height={height}>{children}</Container>
    </div>
  )
}

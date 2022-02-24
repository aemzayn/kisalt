import Container from "./Container";

export type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="lg:min-h-hero bg-violet-100">
      <Container>{children}</Container>
    </div>
  );
}

export type CoverProps = {
  closeHeader: () => void
}

export default function Cover({ closeHeader }: CoverProps) {
  return <div id="cover" className="cover hidden" onClick={closeHeader} />
}

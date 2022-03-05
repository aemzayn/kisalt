import Link from 'next/link'

export default function NeutralHeader() {
  return (
    <div
      id="main-header"
      className="sticky top-0 z-50 w-full bg-white shadow-sm shadow-violet-300"
    >
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-8 py-8 lg:px-4 ">
        <Link href="/">
          <a className="text-2xl font-medium text-violet-900">Kisalt.</a>
        </Link>
      </div>
    </div>
  )
}

import Container from 'components/Container/Container'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export type FooterProps = {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-violet-100 pt-5">
      <hr className="border-violet-300 border-opacity-70" />
      <Container>
        <div className="flex justify-between py-10 align-top">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Kisalt © {new Date().getFullYear()}</h1>
            <p className="text-violet-300">
              Made by{' '}
              <a
                className="group duration-150 ease-in-out hover:text-violet-600"
                href="https://github.com/aemzayn"
              >
                <span className="underline underline-offset-2">
                  Ahmad Muslih Zain
                </span>
                <ExternalLinkIcon className="relative ml-1 inline-flex h-4 w-4 -translate-x-2 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </p>
          </div>

          <nav>
            <ul className="flex gap-4 uppercase tracking-wide text-violet-400">
              <li>
                <Link href="/privacy-policy">
                  <a className="before:contents-[''] relative duration-150 before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-violet-300 before:duration-200 hover:text-violet-500 hover:before:w-full">
                    PRIVACY POLICY
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <a className="before:contents-[''] relative duration-150 before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-violet-300 before:duration-200 hover:text-violet-500 hover:before:w-full">
                    TERMS OF SERVICE
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

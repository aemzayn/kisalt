import Container from 'components/Container/Container'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

export type FooterProps = {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-violet-100 pt-5 text-violet-500">
      <hr className="border-violet-300 border-opacity-70" />
      <div className="bg-gray-100">
        <Container>
          <div className="flex flex-col items-center justify-evenly gap-y-6 border-t border-gray-200 py-12 px-4 text-sm leading-5 sm:px-6 md:py-14 lg:flex-row lg:justify-between lg:px-16">
            <div className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-10">
              <h1>
                <span className="font-medium text-violet-700">Kisalt.one</span>{' '}
                © {new Date().getFullYear()}
              </h1>
              <div className="flex items-center">
                <div className="mr-2 h-7 w-7 overflow-hidden rounded-3xl">
                  <Image
                    src="/images/avatar/ahmadmuslih.jpg"
                    alt="Ahmad Muslih Zain"
                    width={50}
                    height={50}
                  />
                </div>
                <p>
                  Developed by{' '}
                  <a
                    className="group duration-150 ease-in-out hover:text-violet-600"
                    href="https://github.com/aemzayn"
                  >
                    <span className="font-medium text-violet-700">
                      Ahmad Muslih Zain
                    </span>
                    <ExternalLinkIcon className="relative ml-1 inline-flex h-4 w-4 -translate-x-2 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </p>
              </div>
            </div>

            <nav>
              <ul className="flex gap-4 uppercase tracking-wide">
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
      </div>
    </footer>
  )
}

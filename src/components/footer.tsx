import Link from "next/link"

const Footer = () => {
  return (
    <footer
  className="bg-blue-500 text-center lg:text-left mt-20">
  <div className="p-4 text-center text-white">
    © 2023 Copyright
    <Link
      className="text-white"
      href={'/'}
      > Cheapa</Link>
  </div>
</footer>
  )
}

export default Footer
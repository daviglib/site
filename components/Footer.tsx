import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer id="fale-conosco" className="bg-[#f4edcf] px-4 py-10 text-[#172d57] sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Coluna 1 - Contato */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-[#172d57]">Fale Conosco</h2>
          <p>
            <span className="font-medium">E-mail: </span>
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="text-[#172d57] transition-colors hover:text-[#172d57]"
            >
              {siteMetadata.email}
            </Link>
          </p>
          <p>
            <span className="font-medium">WhatsApp: </span>
            <Link
              href={`https://wa.me/${siteMetadata.whatsapp1}`}
              className="text-[#172d57] transition-colors hover:text-[#172d57]"
            >
              {siteMetadata.whatsapp1}
            </Link>
          </p>
          <p>
            <span className="font-medium">WhatsApp: </span>
            <Link
              href={`https://wa.me/${siteMetadata.whatsapp2}`}
              className="text-[#172d57] transition-colors hover:text-[#172d57]"
            >
              {siteMetadata.whatsapp2}
            </Link>
          </p>
        </div>

        {/* Coluna 3 - Informações do site */}
        <div className="text-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#172d57]">Informações</h2>
          <p>{siteMetadata.author}</p>
          <p>
            © {new Date().getFullYear()} •{' '}
            <Link href="/" className="text-[#172d57] transition-colors hover:text-[#172d57]">
              {siteMetadata.title}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

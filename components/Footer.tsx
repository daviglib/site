import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer
      id="fale-conosco"
      className="bg-gray-100 px-4 py-10 text-gray-700 sm:px-10 dark:bg-gray-900 dark:text-gray-300"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Coluna 1 - Contato */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Fale Conosco</h2>
          <p>
            <span className="font-medium">E-mail: </span>
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {siteMetadata.email}
            </Link>
          </p>
          <p>
            <span className="font-medium">WhatsApp: </span>
            <Link
              href={`https://wa.me/${siteMetadata.whatsapp1}`}
              className="text-green-500 hover:text-green-700"
            >
              {siteMetadata.whatsapp1}
            </Link>
          </p>
          <p>
            <span className="font-medium">WhatsApp: </span>
            <Link
              href={`https://wa.me/${siteMetadata.whatsapp2}`}
              className="text-green-500 hover:text-green-700"
            >
              {siteMetadata.whatsapp2}
            </Link>
          </p>
        </div>

        {/* Coluna 3 - Informações do site */}
        <div className="text-sm">
          <h2 className="mb-4 text-lg font-semibold">Informações</h2>
          <p>{siteMetadata.author}</p>
          <p>
            © {new Date().getFullYear()} • <Link href="/">{siteMetadata.title}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

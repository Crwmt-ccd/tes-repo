import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between px-4 p-3 item-center">
            <h1 className="text-xl font-bold">{title}</h1>
            {linkHref && linkTitle
                ?
                <Link href={linkHref} className="md:text-xl text-md underline hover:text-teal-600 transition-all">{linkTitle}</Link> : null
            }
        </div>
    )
}

export default Header
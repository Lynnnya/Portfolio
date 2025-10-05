import { navLinks } from '../../../navLinksDef';

export default function NavLinks() {
    return (
        <>
            {navLinks.map((link) => (
                <li key={link.name} className="text-2xl">

                    <a href={link.href} className="hover:underline">
                        {link.name}
                    </a>

                </li>
            ))}
        </>
    );
}
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { WalletConnect } from './wallet-connect'

export default function Header() {
	return (
		<header className="container mx-auto">
			<nav className="flex h-16 items-center justify-between px-4 gap-4">
				<Link href="/" className="flex items-center">
					<span className="text-xl font-bold">Web3 Starter Kit</span>
				</Link>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<WalletConnect />
				</div>
			</nav>
		</header>
	)
}

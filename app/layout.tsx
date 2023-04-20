import './globals.css';
import Navbar from '@/components/Navbar';
import { questrial } from '@/lib/Fonts';

export const metadata = {
	title: 'Random Reviews',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${questrial.className}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

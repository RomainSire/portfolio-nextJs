import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

type Props = Readonly<{
	children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Romain Siré - Frontend Developer",
	description: "I am a front-end developer for hire, and I also code fun apps on my free time.",
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

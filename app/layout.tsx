import type { Metadata } from 'next';
import './globals.css';
const giftEmojiSvg = encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🎁</text></svg>',
);
export const metadata: Metadata = {
    title: 'Jubilee - Never forget a gift again',
    description: 'Plan, share, and track gifts for all your friends and family with Jubilee',
    icons: {
        icon: [
            { url: `/favicon.ico`, rel: 'icon' },
            { url: `data:image/svg+xml,${giftEmojiSvg}`, rel: 'icon', type: 'image/svg+xml' },
        ],
    },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="1uys:y_">
            <body className="" data-oid="kpthioz">
                {children}
            </body>
        </html>
    );
}

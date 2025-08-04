import './globals.css';

export const metadata = {
  title: 'SpaceX Launch Programs',
  description: 'Browse SpaceX launch history with filters',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

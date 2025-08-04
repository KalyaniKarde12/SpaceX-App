import './globals.css';
import ToastProvider from '../components/ToastProvider';

export const metadata = {
  title: 'SpaceX Launch Programs',
  description: 'Browse launches with filters',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}

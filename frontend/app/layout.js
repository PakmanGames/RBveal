import "./globals.css";


export const metadata = {
  title: "RBveal",
  description: "RBveal is a banking simulation platform that helps you learn how to protect your personal information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

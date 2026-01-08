export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* IMPORTANT: This removes global header/footer */}
        {children}
      </body>
    </html>
  );
}

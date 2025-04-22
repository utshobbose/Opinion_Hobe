
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main>
        <p className="text-white">LEFT SIDEBAR</p>
        {children}
        <p className="text-white">RIGHT SIDEBAR</p>
      </main>
  );
}

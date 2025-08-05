export const metadata = {
  title: "about us title",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      &copy:Next js is great
    </div>
  );
}

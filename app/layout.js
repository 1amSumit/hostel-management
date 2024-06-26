import "./globals.css";
import { Oxygen } from "next/font/google";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: {
    template: "%s | The HostelHub",
    default: "Welcome | The HostelHub",
  },
  description: "Hostel Management application manages the hostel.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  );
}

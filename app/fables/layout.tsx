import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "寓言",
};

export default function FablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

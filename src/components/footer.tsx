import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-auto sticky bottom-0">
      <div className="container mx-auto px-4 py-4 text-center flex items-center justify-between gap-10 ">
        <p>
          &copy; {new Date().getFullYear()} Rodrigo Pellegrini. All rights
          reserved.
        </p>
        <p className="">
          <a
            href="mailto:rodrigo_luizp@outlook.com"
            className="text-primary hover:underline flex items-center gap-2"
          >
            <MailIcon /> rodrigo_luizp@outlook.com
          </a>
        </p>
      </div>
    </footer>
  );
}

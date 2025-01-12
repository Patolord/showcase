import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-auto sticky bottom-0">
      <div className="container mx-auto px-4 py-4 text-center flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-10">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Rodrigo Pellegrini. All rights
          reserved.
        </p>
        <p className="text-sm sm:text-base">
          <a
            href="mailto:rodrigo_luizp@outlook.com"
            className="text-primary hover:underline flex items-center gap-2"
          >
            <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            rodrigo_luizp@outlook.com
          </a>
        </p>
      </div>
    </footer>
  );
}

import Header from "@/components/header";
import ProjectGrid from "@/components/project-grid";
import Footer from "@/components/footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <div className="flex justify-center w-full">
          <div className="inline-block mb-16 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-lg">
            <h1 className="text-4xl font-light text-center text-slate-900 tracking-tight">
              Projetos
            </h1>
          </div>
        </div>
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

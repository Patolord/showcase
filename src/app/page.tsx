import Header from "@/components/header";
import ProjectGrid from "@/components/project-grid";
import Footer from "@/components/footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <div className="flex justify-center w-full">
          <div className="inline-block mb-8 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-lg">
            <h1 className="text-4xl font-light text-center text-slate-900 tracking-tight">
              Projetos
            </h1>
            <p className="text-center mt-4">
              Para acessar os projetos, use o usuário{" "}
              <strong className="text-red-700">Teste</strong> e a senha{" "}
              <strong className="text-red-700">Teste@2025</strong>.
            </p>
          </div>
        </div>
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}

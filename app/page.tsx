import CoverParicles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";
import NewData from "@/components/curious-fact";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParicles/>
        <Introduction/>
        <NewData/>
      </div>
    </main>
  );
}

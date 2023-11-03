import LeftSection from "@/components/LoginPage/LeftSection";
import RightSection from "@/components/LoginPage/RightSection";

export default function Home() {
  return (
    <div className="flex flex-row login-page">
      <LeftSection />
      <RightSection />
    </div>
  );
}

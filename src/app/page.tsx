import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardWrapper from "@/components/CardWrapper";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero title="Request Content from your favourite Content creators " description="You can share your video content ideas that you want your favourite creators to create on the platform. Also see other public ideas while managing all your ideas from one dashboard." />
      <CardWrapper />
    </main>
  );
}

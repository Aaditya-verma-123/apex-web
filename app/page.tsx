import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="py-24">
      <Container>
        <SectionTitle
          eyebrow="WELCOME"
          title="Design System"
          description="Testing our reusable UI components."
        />

        <div className="mt-10">
          <Card>
            <p className="mb-4">
              If you can see this card, everything is working.
            </p>

            <Button>Get Started</Button>
          </Card>
        </div>
      </Container>
    </main>
  );
}
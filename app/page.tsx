import { Cta } from "@/components/cta"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Problem } from "@/components/problem"
import { SiteHeader } from "@/components/site-header"
import { Faq } from "@/components/faq"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Problem />
      <HowItWorks />
      <Faq />
      <Cta />
    </main>
  )
}

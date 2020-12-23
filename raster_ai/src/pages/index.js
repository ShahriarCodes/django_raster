import React from "react";
import Layout from "../layouts/index";
import Hero from "../components/hero/Hero";
import HeroIllustration from "../components/hero/HeroIllustration";

export default function IndexPage() {
  return (
    <Layout>
      <Hero
        title="Introducing the Next Gen UI Design Tool"
        content="Bring life to your ideas in a matter of seconds with our Skecth to UI creation tool. - powered by AI "
        illustration={HeroIllustration}
      />
    </Layout>
  );
}

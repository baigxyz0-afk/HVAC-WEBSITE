import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { SimplePage } from "@/components/SimplePage";

const path = routes.privacy();
export const metadata = pageMeta({ title: "Privacy Policy", description: "How HVAC Services Hub collects, uses and shares information when you call or request HVAC service, including sharing with independent contractors.", path });

export default function Privacy() {
  return (
    <SimplePage title="Privacy Policy" crumbs={[{ name: "Home", path: "/" }, { name: "Privacy", path }]} lead="Last updated November 6, 2026 (11/06/2026).">
      <h2>Website Operator &amp; Contact</h2>
      <p>This website and referral service is operated by <strong>Muhammad Afzal</strong> (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), doing business as {site.name}. For privacy-related inquiries, requests, or questions regarding your personal information, you may reach Muhammad Afzal{site.email ? ` at ${site.email}` : ""}{site.phone ? ` or by telephone at ${site.phone}` : ""}.</p>
      <h2>What we collect</h2>
      <p>When you submit a request, we collect what you enter: the service you need, ZIP code, timing, name, phone, optional email and notes. We also collect how you found us (for example ad campaign parameters and the page you landed on), basic device type, and a one-way hash of your IP address for spam prevention.</p>
      <h2>Calls</h2>
      <p>Phone numbers on this site may be call-tracking numbers. Calls may be routed through a third-party provider and may be recorded for quality and billing purposes, where permitted by law, with notice at the start of the call.</p>
      <h2>How we share it</h2>
      <p>{site.name} is a referral service. We share your request with up to three independent, licensed HVAC contractors or lead partners who serve your area so they can contact you about the job. We don&#39;t sell your information for unrelated marketing.</p>
      <h2>Texts and calls</h2>
      <p>If you agree on the form, we and the contractors may call or text you about your request, including by automated means. Consent isn&#39;t required to buy anything. Reply STOP to opt out of texts.</p>
      <h2>Cookies and analytics</h2>
      <p>We store attribution details in your browser for 30 days. If analytics are enabled, we use Google Tag Manager and Google Analytics, subject to your consent choices.</p>
      <h2>Your choices</h2>
      <p>To ask what we hold about you, or to have it deleted, contact Muhammad Afzal{site.email ? ` at ${site.email}` : " using the phone number on this site"}.</p>
    </SimplePage>
  );
}

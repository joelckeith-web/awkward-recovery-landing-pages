import type { Metadata } from "next";
import {
  Phone,
  ShieldCheck,
  Star,
  Clock,
  Heart,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  MessageCircle,
  MapPin,
  Sparkles,
  HandHeart,
  Pill,
  Activity,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import LandingForm from "@/components/landing/LandingForm";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ScrollToTopLink from "@/components/landing/ScrollToTopLink";

/* ------------------------------------------------------------------ */
/*  ASSET URLs (from awkwardrecovery.com Wix CDN)                      */
/* ------------------------------------------------------------------ */

const GOLD_SEAL_IMG =
  "https://static.wixstatic.com/media/55fcb2_c8bc10969062441dbaccea1c97a756cb~mv2.png";

const LIFESTYLE_PHOTOS = {
  tattooGroup:
    "https://static.wixstatic.com/media/nsplsh_4c7734744e637645614538~mv2_d_5328_3552_s_4_2.jpg",
  communityGathering:
    "https://static.wixstatic.com/media/55fcb2_c32cc77ef9b14b079a32e4eacb48d8e6~mv2.jpg",
  mentalHealthMatters:
    "https://static.wixstatic.com/media/nsplsh_4f5274716a784f55516445~mv2_d_4032_3024_s_4_2.jpg",
  supportGroup:
    "https://static.wixstatic.com/media/nsplsh_5867655a75326a42615649~mv2_d_6000_4000_s_4_2.jpg",
  personReflecting:
    "https://static.wixstatic.com/media/nsplsh_4fe8df2dec5b4f76b6fe2e50069c5c23~mv2.jpg",
  smiling:
    "https://static.wixstatic.com/media/nsplsh_5936544f58364c6e494773~mv2_d_3604_2413_s_4_2.jpg",
};

const insuranceLogos = [
  {
    name: "Baylor Scott & White",
    src: "https://static.wixstatic.com/media/55fcb2_2f25e3be20584a64955f9453f488139d~mv2.png",
  },
  {
    name: "BlueCross BlueShield",
    src: "https://static.wixstatic.com/media/55fcb2_bcaa92b23b654fa0b76ed290d17de4e6~mv2.png",
  },
  {
    name: "Cigna Healthcare",
    src: "https://static.wixstatic.com/media/55fcb2_72180b2415674b9a92c1846273d6c5e9~mv2.png",
  },
  {
    name: "TriWest Healthcare Alliance",
    src: "https://static.wixstatic.com/media/55fcb2_64cfd3fc2914434388ce5585ab405e9c~mv2.png",
  },
  {
    name: "Aetna",
    src: "https://static.wixstatic.com/media/55fcb2_8b174753999544a280da076657c72da1~mv2.png",
  },
];

export const metadata: Metadata = {
  title:
    "Substance Abuse Treatment in Austin, TX | Awkward Recovery",
  description:
    "Evidence-based substance abuse treatment programs in Austin, TX. Intensive outpatient (IOP), dual diagnosis, and personalized recovery. Insurance accepted. Call (512) 616-0809.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Substance Abuse Treatment in Austin, TX | Awkward Recovery",
    description:
      "Real substance abuse treatment that works. Flexible IOP programs, insurance accepted, Joint Commission accredited. Start your recovery today.",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  {
    icon: ShieldCheck,
    label: "Joint Commission Accredited",
    value: "Gold Seal",
  },
  { icon: Star, label: "Google Reviews", value: "4.8 Stars" },
  { icon: BadgeCheck, label: "Insurance", value: "In-Network" },
  { icon: Clock, label: "Schedule", value: "Flexible IOP" },
];

const benefits = [
  {
    icon: Brain,
    title: "Evidence-Based Therapies",
    description:
      "DBT, EMDR, and trauma-informed care proven to treat substance use disorders at their root — not just the symptoms.",
  },
  {
    icon: Clock,
    title: "Flexible IOP Schedule",
    description:
      "Sessions Monday through Thursday so you can keep your job, stay with your family, and still get the substance abuse treatment you need.",
  },
  {
    icon: Heart,
    title: "Dual Diagnosis Treatment",
    description:
      "We treat co-occurring mental health conditions alongside substance abuse — because one without the other doesn't work.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Accepted",
    description:
      "In-network with BlueCross BlueShield, Aetna, Cigna, TriWest, and more. We'll verify your benefits for free.",
  },
  {
    icon: Users,
    title: "Community-Driven Recovery",
    description:
      "Small group sizes, real connections, and a community that actually gets it. Recovery doesn't happen in isolation.",
  },
  {
    icon: Sparkles,
    title: "Holistic Approach",
    description:
      "Beyond sobriety — we address trauma triggers, coping skills, relationships, and wellness so recovery actually sticks.",
  },
];

const signsChecklist = [
  "Using substances more often or in larger amounts than intended",
  "Failed attempts to cut down or control substance use",
  "Spending excessive time obtaining, using, or recovering from substances",
  "Experiencing cravings or strong urges to use",
  "Failing to meet responsibilities at work, school, or home",
  "Continuing use despite relationship or social problems",
  "Giving up important activities because of substance use",
  "Using substances in physically dangerous situations",
  "Developing tolerance — needing more to get the same effect",
  "Experiencing withdrawal symptoms when not using",
];

const programs = [
  {
    icon: Activity,
    title: "Intensive Outpatient Program (IOP)",
    description:
      "Structured substance abuse treatment 3-4 days per week. Our flagship program combines group therapy, individual sessions, and skill-building in a supportive environment.",
    variant: "purple" as const,
  },
  {
    icon: CalendarCheck,
    title: "Outpatient Program (OP)",
    description:
      "Step-down care for those transitioning from IOP or seeking ongoing substance abuse support with fewer weekly sessions.",
    variant: "green" as const,
  },
  {
    icon: Brain,
    title: "Dual Diagnosis Treatment",
    description:
      "Integrated treatment for co-occurring substance use and mental health disorders including anxiety, depression, PTSD, and trauma.",
    variant: "green" as const,
  },
  {
    icon: Pill,
    title: "Substance-Specific Programs",
    description:
      "Specialized treatment tracks for alcohol, cocaine, methamphetamine, fentanyl, and other substance use disorders.",
    variant: "purple" as const,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Reach Out",
    description:
      "Call our admissions line, submit a form, or verify your insurance online. It takes just a few minutes — no commitment required.",
  },
  {
    step: "02",
    title: "Free Assessment",
    description:
      "We'll evaluate your situation confidentially, verify your insurance benefits, and build a personalized substance abuse treatment plan.",
  },
  {
    step: "03",
    title: "Start Treatment",
    description:
      "Begin your program with a community that understands. Most clients start within days of their initial call.",
  },
];

const reviews = [
  {
    text: "This program has drastically improved my life. Our group is so close. The clinicians are knowledgeable and compassionate while challenging us. I cannot recommend this place enough!",
    author: "Google Review",
    role: "5-Star Review",
  },
  {
    text: "Awkward Recovery was nothing less of a miracle. It showed up in my life when I was destitute. When I started working the program the staff embraced me and ensured I would be alright. I received education and saw the best version of myself. They showed me I am worthy. When I believed it, I changed.",
    author: "Google Review",
    role: "5-Star Review",
  },
  {
    text: "I was blessed to have found Awkward Recovery. I made the decision in rehab that I wasn't going back to my hometown. I called all kinds of places, turned down so much because I didn't have the money. So randomly I called and the next day I had a new home and a new IOP. I am happy to get to be called an Awkward alumni.",
    author: "Google Review",
    role: "5-Star Review",
  },
];

const serviceAreas = [
  "Downtown Austin",
  "South Austin",
  "Travis Heights",
  "South Lamar",
  "Barton Hills",
  "Bouldin Creek",
  "St. Edwards",
  "Sunset Valley",
  "Rollingwood",
  "Westlake Hills",
  "Oak Hill",
  "Travis Country",
  "Garrison Park",
  "Williamson",
  "East Congress",
  "Round Rock",
  "Cedar Park",
  "Georgetown",
  "San Marcos",
  "Kyle",
];


const faqs = [
  {
    question: "What is substance abuse treatment?",
    answer:
      "Substance abuse treatment is a structured program that helps individuals overcome dependence on drugs or alcohol. At Awkward Recovery, our treatment combines evidence-based therapies like DBT and EMDR with group support, individual counseling, and holistic wellness approaches to address the root causes of addiction — not just the symptoms.",
  },
  {
    question: "What substance abuse programs does Awkward Recovery offer?",
    answer:
      "We offer Intensive Outpatient Programs (IOP), standard Outpatient Programs (OP), and dual diagnosis treatment for co-occurring mental health conditions. We treat alcohol, cocaine, methamphetamine, fentanyl, and other substance use disorders with personalized treatment plans for each client.",
  },
  {
    question:
      "How is an Intensive Outpatient Program (IOP) different from inpatient rehab?",
    answer:
      "IOP provides structured substance abuse treatment while allowing you to live at home and maintain work or school. Sessions typically run 3-4 days per week (Monday through Thursday at Awkward Recovery). It's ideal for those who need more support than weekly therapy but don't require 24-hour residential care.",
  },
  {
    question: "Does Awkward Recovery accept insurance for substance abuse treatment?",
    answer:
      "Yes. We are in-network with BlueCross BlueShield, Aetna, Cigna, TriWest Healthcare Alliance, and Baylor Scott & White. We also work with out-of-network providers to maximize your benefits. Use our free insurance verification tool or call our admissions team to check your coverage.",
  },
  {
    question: "How do I know if I need substance abuse treatment?",
    answer:
      "Common signs include inability to control substance use, failed attempts to quit, neglecting responsibilities, relationship problems caused by use, developing tolerance, and experiencing withdrawal symptoms. If substance use is negatively affecting your life in any way, it may be time to seek professional help.",
  },
  {
    question: "What does a substance abuse evaluation involve?",
    answer:
      "A substance abuse evaluation is a confidential assessment conducted by our clinical team. We'll discuss your substance use history, mental health, medical background, and personal goals to develop a treatment plan tailored specifically to you. There is no obligation after the evaluation.",
  },
  {
    question: "How long does substance abuse treatment take?",
    answer:
      "Treatment length varies by individual. Our IOP typically runs 8-12 weeks, with the option to step down to outpatient care. Some clients benefit from longer programs. We work with you to determine the right duration based on your progress and needs — not arbitrary timelines.",
  },
  {
    question: "Is there substance abuse rehab near me in Austin, TX?",
    answer:
      "Awkward Recovery is located at 4109 Todd Ln, Suite 700, Austin, TX 78744. We serve clients throughout the Austin metro area including South Austin, Travis Heights, Barton Hills, Westlake Hills, Round Rock, Cedar Park, and surrounding communities.",
  },
  {
    question: "What therapies are used in your substance abuse program?",
    answer:
      "Our 8-segment clinical curriculum includes Dialectical Behavior Therapy (DBT), EMDR for trauma processing, distress tolerance and mindfulness training, emotional regulation, communication techniques, family and relationship work, and wellness and values exploration. Every therapy is evidence-based and tailored to substance abuse recovery.",
  },
  {
    question: "Can I work while attending substance abuse treatment?",
    answer:
      "Absolutely. Our IOP is specifically designed for working professionals. Sessions run Monday through Thursday, and we work with your schedule. Many of our clients maintain their jobs, attend school, or care for their families while receiving substance abuse treatment.",
  },
  {
    question: "What makes Awkward Recovery different from other substance abuse treatment centers?",
    answer:
      "We embrace the uncomfortable truth that recovery is awkward — and that's actually a strength. Our Joint Commission-accredited program combines clinical excellence with a raw, authentic community. No corporate cookie-cutter approach. Small groups, real connections, and a team that actually cares about your recovery.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function SubstanceAbuseTreatmentLP() {
  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="relative bg-brand-black overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/30 via-brand-black to-brand-black" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-mint/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div className="space-y-6">
              <p className="inline-block text-brand-purple-light font-semibold text-sm uppercase tracking-widest">
                Substance Abuse Treatment in Austin, TX
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Substance Abuse Treatment{" "}
                <span className="text-brand-mint">Austin, TX</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Stop putting it off. Awkward Recovery offers evidence-based
                substance abuse treatment programs in Austin — flexible IOP,
                insurance accepted, and a community that gets it.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <a
                  href={`tel:${siteConfig.business.phoneLink}`}
                  className="btn-mint"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.business.phone}
                </a>
                <a
                  href={siteConfig.business.insuranceVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-brand-black"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Verify Insurance
                </a>
              </div>

              {/* Insurance logos */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  In-Network With
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {insuranceLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="bg-white rounded-full px-3 py-1.5"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={100}
                        height={30}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:sticky lg:top-20">
              <LandingForm
                heading="Join Our Community"
                leadSource="Substance Abuse Treatment LP"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOINT COMMISSION CREDIBILITY BAR (first thing after hero)      */}
      {/* ============================================================ */}
      <section className="bg-brand-black border-b border-white/10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Gold Seal */}
            <a
              href="https://www.jointcommission.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group"
            >
              <Image
                src={GOLD_SEAL_IMG}
                alt="Joint Commission Gold Seal of Approval"
                width={80}
                height={80}
                className="w-20 h-20 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <p className="font-heading font-extrabold text-white text-lg">
                  Joint Commission Accredited
                </p>
                <p className="text-white/50 text-sm">
                  The Gold Standard of Care
                </p>
              </div>
            </a>

            <div className="hidden md:block w-px h-14 bg-white/20" />

            {/* Trust stats */}
            {trustStats.slice(1).map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <stat.icon className="w-8 h-8 text-brand-purple-light flex-shrink-0" />
                <div>
                  <p className="font-heading font-extrabold text-white text-base">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY CHOOSE AWKWARD RECOVERY                                    */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
              Why Choose Awkward Recovery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine clinical excellence with raw authenticity. Our
              Joint Commission-accredited substance abuse program is built
              for people who are ready to get real about recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-brand-xl p-[2px] bg-gradient-to-br from-brand-purple-light via-brand-purple to-brand-purple-dark
                           shadow-md hover:shadow-[0_10px_40px_rgba(187,52,203,0.2)]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-white rounded-[calc(1.5rem-2px)] p-7 h-full">
                  <div className="w-12 h-12 rounded-brand-lg bg-brand-purple/10 flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SIGNS YOU NEED HELP                                           */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Checklist */}
            <div>
              <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
                Recognize the Signs
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
                Do You or a Loved One Need Help?
              </h2>
              <p className="text-gray-600 mb-8">
                Substance use disorders affect millions of Americans. If any of
                the following sound familiar, it may be time to seek
                professional substance abuse treatment.
              </p>
              <ul className="space-y-3">
                {signsChecklist.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA Card with lifestyle photo */}
            <div className="space-y-6">
              <div className="rounded-brand-xl overflow-hidden">
                <Image
                  src={LIFESTYLE_PHOTOS.tattooGroup}
                  alt="Awkward Recovery community in Austin, Texas"
                  width={600}
                  height={350}
                  className="w-full h-56 md:h-64 object-cover"
                />
              </div>
            <div className="bg-gradient-to-br from-brand-purple-dark to-brand-black rounded-brand-xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-mint/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
              <div className="relative z-10 space-y-6">
                <HandHeart className="w-12 h-12 text-brand-mint" />
                <h3 className="font-heading font-extrabold text-2xl">
                  You Don&apos;t Have to Figure This Out Alone
                </h3>
                <p className="text-white/70 leading-relaxed">
                  If you recognized yourself or someone you love in that list,
                  take the next step. Our admissions team is available to talk
                  confidentially — no pressure, no judgment.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.business.phoneLink}`}
                    className="btn-mint w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    {siteConfig.business.phone}
                  </a>
                  <ScrollToTopLink className="btn-outline border-brand-mint text-brand-mint hover:bg-brand-mint hover:text-brand-black w-full justify-center">
                    <MessageCircle className="w-5 h-5" />
                    Contact Now
                  </ScrollToTopLink>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR PROGRAMS                                                  */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
              Our Programs
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
              Our Recovery Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intensive outpatient to ongoing support, we offer flexible
              substance abuse programs tailored to where you are in your
              recovery journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => {
              const isPurple = program.variant === "purple";
              const isGreen = program.variant === "green";
              return (
                <div
                  key={program.title}
                  className={`rounded-brand-xl p-7 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                    hover:-translate-y-1 transition-all duration-300 ${
                    isPurple
                      ? "bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white"
                      : isGreen
                      ? "bg-gradient-to-br from-brand-mint to-brand-green-medium text-brand-black"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-brand-lg flex items-center justify-center mb-5 ${
                      isPurple
                        ? "bg-white/15"
                        : isGreen
                        ? "bg-brand-black/10"
                        : "bg-brand-purple/10"
                    }`}
                  >
                    <program.icon
                      className={`w-6 h-6 ${
                        isPurple
                          ? "text-brand-mint"
                          : isGreen
                          ? "text-brand-black"
                          : "text-brand-purple"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-heading font-bold text-xl mb-2 ${
                      isPurple
                        ? "text-white"
                        : "text-brand-black"
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isPurple
                        ? "text-white/80"
                        : isGreen
                        ? "text-brand-black/70"
                        : "text-gray-600"
                    }`}
                  >
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIFESTYLE PHOTO BREAK                                         */}
      {/* ============================================================ */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={LIFESTYLE_PHOTOS.communityGathering}
          alt="Community and connection at Awkward Recovery in Austin"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-brand-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="font-heading font-extrabold text-3xl md:text-4xl text-white max-w-md">
              Recovery is better{" "}
              <span className="text-brand-mint">together.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DEEP CONTENT — SEO COPY                                       */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-extrabold text-3xl text-brand-black">
              Recovery Starts With the Right Program
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Substance abuse affects every part of your life — your health,
              your relationships, your career, your sense of self. At Awkward
              Recovery, we believe that effective substance abuse treatment
              starts with honesty. Recovery is uncomfortable. It&apos;s awkward.
              And that&apos;s exactly where growth happens.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our substance abuse treatment center in Austin, TX provides
              outpatient programs designed for real life. Unlike inpatient
              substance abuse rehab, our IOP allows you to receive intensive,
              evidence-based treatment while maintaining your daily
              responsibilities. We serve clients dealing with alcohol abuse,
              cocaine addiction, methamphetamine dependency, fentanyl and opioid
              use disorders, and other substance abuse challenges.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets our substance abuse program apart is our clinical
              approach. Our 8-segment curriculum covers trauma and recovery
              education, DBT-based coping skills, distress tolerance and
              mindfulness, emotional regulation, healthy relationships,
              communication techniques, and wellness exploration. Every aspect
              of our substance abuse treatment is designed to give you practical
              tools — not just theory.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Finding the right substance abuse resources can feel overwhelming.
              Whether you&apos;re searching for substance abuse rehab near you,
              evaluating long-term substance abuse treatment options, or just
              trying to understand what substance abuse programs are available in
              Austin, our admissions team is here to help. We offer free
              substance abuse evaluations and insurance verification to make
              getting started as simple as possible.
            </p>
          </div>

          {/* Inline lifestyle photo */}
          <div className="my-10 rounded-brand-xl overflow-hidden">
            <Image
              src={LIFESTYLE_PHOTOS.mentalHealthMatters}
              alt="Mental health and addiction recovery at Awkward Recovery"
              width={900}
              height={450}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Mid-content CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.business.insuranceVerificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ShieldCheck className="w-5 h-5" />
              Verify Insurance
            </a>
            <ScrollToTopLink className="btn-outline">
              <MessageCircle className="w-5 h-5" />
              Submit a Form
            </ScrollToTopLink>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS — 3-STEP PROCESS                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/20 via-transparent to-brand-mint/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div>
              <p className="text-brand-purple-light font-semibold text-sm uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6">
                Getting Started Is Simple
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We&apos;ve made the process as straightforward as possible.
                Most clients begin their substance abuse program within days of
                reaching out.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={`tel:${siteConfig.business.phoneLink}`}
                  className="btn-mint"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.business.phone}
                </a>
                <a
                  href={siteConfig.business.insuranceVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white text-white hover:bg-white hover:text-brand-black"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Verify Insurance
                </a>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="space-y-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-brand-xl p-6"
                >
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple/20 border-2 border-brand-purple-light flex items-center justify-center">
                      <span className="font-heading font-extrabold text-sm text-brand-purple-light">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIALS                                                  */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
              4.8 Stars on Google
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black">
              What Our Community Says
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-brand-xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-bold text-brand-black text-sm">
                    {review.author}
                  </p>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIFESTYLE PHOTO BREAK 2                                       */}
      {/* ============================================================ */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src={LIFESTYLE_PHOTOS.smiling}
          alt="Recovery and wellness at Awkward Recovery in Austin, TX"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-brand-black/60 via-brand-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-right">
            <p className="font-heading font-extrabold text-3xl md:text-4xl text-white max-w-md ml-auto">
              You deserve to{" "}
              <span className="text-brand-mint">feel whole again.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ACCREDITATION + INSURANCE BAND                                */}
      {/* ============================================================ */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badges row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-10">
            {/* Joint Commission Gold Seal */}
            <a
              href="https://www.jointcommission.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <Image
                src={GOLD_SEAL_IMG}
                alt="Joint Commission Gold Seal of Approval"
                width={100}
                height={100}
                className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="text-center">
                <p className="font-heading font-extrabold text-brand-black text-sm">
                  Joint Commission Accredited
                </p>
                <p className="text-gray-500 text-xs">
                  The Gold Standard of Care
                </p>
              </div>
            </a>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gray-300" />

            {/* LegitScript Certification Seal */}
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=awkwardrecovery.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <Image
                src="https://static.legitscript.com/seals/32063484.png"
                alt="LegitScript Certified — Verify Approval for awkwardrecovery.com"
                width={100}
                height={100}
                className="w-24 h-24 object-contain group-hover:scale-105 transition-transform"
              />
              <div className="text-center">
                <p className="font-heading font-extrabold text-brand-black text-sm">
                  LegitScript Certified
                </p>
                <p className="text-gray-500 text-xs">
                  Verified Treatment Provider
                </p>
              </div>
            </a>
          </div>

          {/* Insurance provider logos */}
          <div className="text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
              In-Network Insurance Providers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {insuranceLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="bg-white rounded-brand px-5 py-3 shadow-sm"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={55}
                    className="h-9 md:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICE AREAS                                                 */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
              Treatment Near You
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
              Serving the Greater Austin Area
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our substance abuse rehab center is conveniently located in South
              Austin, serving communities across the metro area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700
                           text-sm font-medium px-4 py-2 rounded-full hover:border-brand-purple-light
                           hover:text-brand-purple transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Located at {siteConfig.business.address.street},{" "}
              {siteConfig.business.address.city},{" "}
              {siteConfig.business.address.state}{" "}
              {siteConfig.business.address.zip}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ ACCORDION                                                 */}
      {/* ============================================================ */}
      <div className="bg-gray-50">
        <FAQAccordion
          faqs={faqs}
          title="Frequently Asked Questions"
        />
      </div>

      {/* ============================================================ */}
      {/* FINAL CTA                                                     */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-purple-dark via-brand-purple to-brand-purple-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(187,237,212,0.1)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Take the first step toward a life free from substance abuse.
            Whatever feels right for you — we&apos;re here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.business.phoneLink}`}
              className="btn-mint text-lg"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.business.phone}
            </a>
            <a
              href={siteConfig.business.insuranceVerificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white text-lg"
            >
              <ShieldCheck className="w-5 h-5" />
              Verify Insurance
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

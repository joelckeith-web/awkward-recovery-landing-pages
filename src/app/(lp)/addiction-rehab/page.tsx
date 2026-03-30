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
  title: "Addiction Rehab in Austin, TX | Awkward Recovery",
  description:
    "Top-rated addiction rehab center in Austin, TX. Flexible outpatient programs, dual diagnosis treatment, and insurance accepted. Serving all of Texas. Call (512) 616-0809.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Addiction Rehab in Austin, TX | Awkward Recovery",
    description:
      "Proven addiction rehab that fits your life. Joint Commission accredited, insurance accepted, flexible IOP schedule. Start your recovery today.",
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
    title: "Evidence-Based Rehab",
    description:
      "DBT, EMDR, and trauma-informed therapies that treat addiction at its root — not just the symptoms. Clinical rigor meets real human care.",
  },
  {
    icon: Clock,
    title: "Flexible Outpatient Schedule",
    description:
      "Our IOP runs Monday through Thursday so you can keep your job, stay home with your family, and still get the treatment you need.",
  },
  {
    icon: Heart,
    title: "Dual Diagnosis Treatment",
    description:
      "We treat addiction alongside co-occurring mental health conditions — anxiety, depression, PTSD — because they rarely travel alone.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Accepted",
    description:
      "In-network with BlueCross BlueShield, Aetna, Cigna, TriWest, and more. We'll verify your benefits for free before you commit to anything.",
  },
  {
    icon: Users,
    title: "Real Community",
    description:
      "Small group sizes and genuine connection. Recovery happens with other people, not in isolation — and our community proves it.",
  },
  {
    icon: Sparkles,
    title: "Whole-Person Recovery",
    description:
      "Beyond sobriety — we build coping skills, repair relationships, address trauma, and help you rediscover who you are without addiction.",
  },
];

const signsChecklist = [
  "Unable to stop or cut back despite wanting to",
  "Spending significant time obtaining, using, or recovering from substances",
  "Cravings or urges that are hard to ignore",
  "Neglecting work, school, or family responsibilities",
  "Continuing to use even when it's causing relationship problems",
  "Giving up hobbies or activities you used to enjoy",
  "Using in situations where it's physically dangerous",
  "Needing more of a substance to feel the same effect (tolerance)",
  "Withdrawal symptoms when you go without",
  "Repeated failed attempts to quit on your own",
];

const programs = [
  {
    icon: Activity,
    title: "Intensive Outpatient Program (IOP)",
    description:
      "Our flagship rehab program meets 3-4 days per week. Group therapy, individual sessions, and evidence-based skill-building — structured enough to work, flexible enough for your life.",
    variant: "purple" as const,
  },
  {
    icon: CalendarCheck,
    title: "Outpatient Program (OP)",
    description:
      "Ideal as a step-down from IOP or for those early in recovery who need ongoing support without the full-time schedule.",
    variant: "green" as const,
  },
  {
    icon: Brain,
    title: "Dual Diagnosis Treatment",
    description:
      "Integrated care for co-occurring addiction and mental health disorders including anxiety, depression, PTSD, and trauma-related conditions.",
    variant: "green" as const,
  },
  {
    icon: Pill,
    title: "Substance-Specific Programs",
    description:
      "Dedicated treatment tracks for alcohol, cocaine, methamphetamine, fentanyl/opioids, and other substance use disorders — tailored to your specific path.",
    variant: "purple" as const,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Reach Out",
    description:
      "Call, submit a form, or verify your insurance online. No commitment required. Our admissions team will answer your questions confidentially.",
  },
  {
    step: "02",
    title: "Free Assessment",
    description:
      "We'll evaluate your situation, verify your insurance benefits, and build a personalized rehab plan designed around your life — not a generic checklist.",
  },
  {
    step: "03",
    title: "Start Your Program",
    description:
      "Join a community that understands. Most clients begin within days of their first call. Recovery starts sooner than you think.",
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
    question: "What is an addiction rehab center?",
    answer:
      "An addiction rehab center is a treatment facility that helps people overcome dependence on drugs or alcohol through structured therapeutic programs. At Awkward Recovery, we offer outpatient rehab — meaning you receive intensive, evidence-based treatment while living at home. Our programs include group therapy, individual counseling, and skill-building to address the root causes of addiction.",
  },
  {
    question: "What addiction rehab programs does Awkward Recovery offer?",
    answer:
      "We offer an Intensive Outpatient Program (IOP), a standard Outpatient Program (OP), and dual diagnosis treatment for co-occurring mental health conditions. We treat alcohol addiction, cocaine, methamphetamine, fentanyl and opioid dependence, and other substance use disorders with individualized treatment plans.",
  },
  {
    question: "Is Awkward Recovery a rehab center near me in Austin?",
    answer:
      "Yes. Awkward Recovery is located at 4109 Todd Ln, Suite 700, Austin, TX 78744 — in South Austin. We serve clients throughout the greater Austin metro area including Round Rock, Cedar Park, Georgetown, San Marcos, Kyle, and surrounding communities.",
  },
  {
    question: "How is outpatient rehab different from inpatient rehab?",
    answer:
      "Inpatient rehab requires you to live at the facility for the duration of treatment. Outpatient rehab — like our IOP — provides the same level of clinical care while allowing you to live at home, keep your job, and maintain family commitments. Our IOP meets Monday through Thursday, giving you structure without disrupting your entire life.",
  },
  {
    question: "Does Awkward Recovery accept insurance for addiction rehab?",
    answer:
      "Yes. We are in-network with BlueCross BlueShield, Aetna, Cigna, TriWest Healthcare Alliance, and Baylor Scott & White. We also work with out-of-network providers to maximize your benefits. Use our free insurance verification tool or call our admissions team to check your specific coverage.",
  },
  {
    question: "What does addiction recovery actually look like day to day?",
    answer:
      "During our IOP, you'll attend group therapy sessions, individual counseling, and structured skill-building exercises 3-4 days per week. Our clinical curriculum covers DBT, EMDR for trauma, distress tolerance, emotional regulation, relationship skills, and wellness. Outside of sessions, you return home — working, parenting, living your life.",
  },
  {
    question: "How long does addiction rehab take?",
    answer:
      "Treatment length depends on the individual. Our IOP typically runs 8-12 weeks, with an option to step down to the outpatient program. Some clients benefit from a longer continuum. We determine the right timeline based on your clinical progress — not a predetermined schedule.",
  },
  {
    question: "Are there rehab centers in Texas that treat co-occurring disorders?",
    answer:
      "Yes — and it's one of our specialties. Many people dealing with addiction also struggle with anxiety, depression, PTSD, or trauma. Our dual diagnosis program treats both conditions simultaneously. Treating addiction without addressing the underlying mental health piece is often why people relapse; we address both from day one.",
  },
  {
    question: "Can I work while attending addiction rehab?",
    answer:
      "Absolutely. Our IOP is built for working adults. Sessions run Monday through Thursday, and our admissions team works with your schedule. Many of our clients maintain their jobs, care for their children, or attend school while completing the program.",
  },
  {
    question: "What makes Awkward Recovery different from other rehab centers?",
    answer:
      "We built Awkward Recovery around the belief that recovery is uncomfortable — and that's where the real work happens. Our Joint Commission-accredited program combines clinical excellence with a raw, genuine community. No corporate scripting. Small groups, real connections, and a team that's invested in your outcome long after you graduate.",
  },
  {
    question: "How do I get started at an addiction rehab center in Austin?",
    answer:
      "Call our admissions line at (512) 616-0809, submit a contact form on this page, or use our free online insurance verification tool. Our team will walk you through your options, answer your questions, and help you start as quickly as possible — most clients begin within days of their first call.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function AddictionRehabLP() {
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
                Addiction Rehab Center — Austin, TX
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Addiction Rehab{" "}
                <span className="text-brand-mint">Austin, TX</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                Ready to stop and don&apos;t know where to start? Awkward
                Recovery is an accredited addiction rehab center in Austin
                offering flexible IOP, insurance-accepted programs, and a
                community that actually gets it.
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
                heading="Talk to Our Admissions Team"
                leadSource="Addiction Rehab LP"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOINT COMMISSION CREDIBILITY BAR                              */}
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
      {/* WHY CHOOSE AWKWARD RECOVERY                                   */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
              A Rehab Center Built for Real Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not every rehab center is the same. We&apos;re Joint Commission
              accredited and built on the belief that effective addiction
              recovery has to be honest, flexible, and community-driven.
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
                Is It Time to Seek Rehab?
              </h2>
              <p className="text-gray-600 mb-8">
                Addiction affects millions of people — and it often progresses
                slowly enough that it&apos;s hard to recognize. If any of the
                following sound familiar, an addiction rehab program may be the
                right next step.
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
                  alt="Awkward Recovery addiction rehab community in Austin, Texas"
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
                    You Don&apos;t Have to Do This Alone
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    If you recognized yourself in that list, reaching out is the
                    hardest — and most important — step. Our admissions team is
                    available to talk confidentially, without pressure or judgment.
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
              Addiction Rehab Programs That Fit Your Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intensive outpatient to step-down care, our rehab programs
              are designed to meet you where you are and take you where you
              want to go.
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
                      isPurple ? "text-white" : "text-brand-black"
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
          alt="Addiction recovery community at Awkward Recovery Austin"
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
              Finding the Right Addiction Rehab in Austin
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Searching for an addiction rehab center near you is a significant
              step — and the options can feel overwhelming. At Awkward Recovery,
              we&apos;ve built an outpatient rehab program in Austin that
              prioritizes clinical quality, community, and flexibility. Because
              the best rehab center is the one you&apos;ll actually stick with.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our addiction rehab center serves clients from across the Austin
              metro and throughout Texas. Unlike inpatient or residential
              rehab programs, our Intensive Outpatient Program (IOP) allows
              you to receive structured, evidence-based addiction treatment
              while living at home — maintaining your job, your relationships,
              and your daily life. Sessions run Monday through Thursday, and
              most clients start within days of their first call.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What makes our approach different is the depth of our clinical
              model. Our 8-segment curriculum covers trauma and addiction
              education, Dialectical Behavior Therapy (DBT), EMDR for trauma
              processing, distress tolerance, emotional regulation, healthy
              communication, relationship rebuilding, and wellness exploration.
              Whether you&apos;re dealing with alcohol addiction, opioid
              dependence, stimulant use, or a co-occurring mental health
              condition — we treat the whole person, not just the habit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We know that choosing a rehab center in Texas can feel like a big
              decision. Our admissions team is available to answer every
              question — including how insurance works, what a typical day
              looks like, and whether our program is the right fit for you. No
              pressure. No hard sell. Just honest information so you can make
              the best decision for your recovery.
            </p>
          </div>

          {/* Inline lifestyle photo */}
          <div className="my-10 rounded-brand-xl overflow-hidden">
            <Image
              src={LIFESTYLE_PHOTOS.mentalHealthMatters}
              alt="Addiction recovery and mental health treatment at Awkward Recovery"
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
                Getting Into Rehab Is Easier Than You Think
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We&apos;ve removed every barrier we could. Most clients go from
                first call to first session in just a few days.
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
              From Our Community
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
          alt="Addiction recovery and wellness at Awkward Recovery Austin, TX"
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
              Rehab Near You
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
              Serving Austin and All of Central Texas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our addiction rehab center is located in South Austin and serves
              clients across the greater Austin metro area and throughout Texas.
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
            Ready to Find the Right Rehab?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Awkward Recovery is here when you&apos;re ready. Call to talk to
            our admissions team or verify your insurance — no commitment required.
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

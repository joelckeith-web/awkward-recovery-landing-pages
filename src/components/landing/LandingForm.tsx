"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useUTMParams } from "@/lib/useUTMParams";

interface FormData {
  name: string;
  phone: string;
  email: string;
  helpMessage: string;
  referralSource: string;
}

interface LandingFormProps {
  heading?: string;
  leadSource?: string;
}

function LandingFormInner({
  heading = "Get Confidential Help Now",
  leadSource = "Substance Abuse LP",
}: LandingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const utmParams = useUTMParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          leadSource,
          ...utmParams,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // Push GTM event
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: leadSource,
          form_type: "landing_page_contact",
        });
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please call us directly or try again."
      );
    }
  };

  if (submitted) {
    return (
      <div
        id="top-form"
        className="bg-white rounded-brand-xl shadow-xl p-8 text-center"
      >
        <CheckCircle className="w-14 h-14 text-brand-mint mx-auto mb-4" />
        <h3 className="font-heading font-extrabold text-2xl text-brand-black mb-2">
          We Got Your Message
        </h3>
        <p className="text-gray-600 mb-6">
          Our admissions team will reach out shortly. If you need immediate help,
          call us now.
        </p>
        <a
          href={`tel:${siteConfig.business.phoneLink}`}
          className="btn-primary w-full justify-center"
        >
          <Phone className="w-5 h-5" />
          Call {siteConfig.business.phone}
        </a>
      </div>
    );
  }

  return (
    <div id="top-form" className="bg-white rounded-brand-xl shadow-xl p-6 md:p-8">
      <h3 className="font-heading font-extrabold text-xl text-brand-black mb-1 text-center">
        {heading}
      </h3>
      <p className="text-gray-500 text-sm text-center mb-5">
        100% confidential. No obligation.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name *"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded-brand px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number *"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[\d\s()+-]{7,20}$/,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full border border-gray-300 rounded-brand px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address *"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full border border-gray-300 rounded-brand px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="How can we help? (optional)"
            rows={3}
            {...register("helpMessage")}
            className="w-full border border-gray-300 rounded-brand px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
          />
        </div>

        <div>
          <select
            {...register("referralSource", {
              required: "Please let us know how you found us",
            })}
            defaultValue=""
            className="w-full border border-gray-300 rounded-brand px-4 py-3 text-sm text-gray-500
                       focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
          >
            <option value="" disabled>
              How did you find us? *
            </option>
            <option value="Google">Google</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="Insurance Provider">Insurance Provider</option>
            <option value="Other">Other</option>
          </select>
          {errors.referralSource && (
            <p className="text-red-500 text-xs mt-1">
              {errors.referralSource.message}
            </p>
          )}
        </div>

        {submitError && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-brand">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-mint w-full justify-center text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit a Form"}
        </button>

        <p className="text-xs text-gray-400 text-center leading-snug">
          By submitting, you consent to being contacted by Awkward Recovery.
          Your information is kept strictly confidential.
        </p>
      </form>
    </div>
  );
}

export default function LandingForm(props: LandingFormProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-brand-xl shadow-xl p-8 text-center text-gray-400">
          Loading form...
        </div>
      }
    >
      <LandingFormInner {...props} />
    </Suspense>
  );
}

// Extend Window for GTM dataLayer
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

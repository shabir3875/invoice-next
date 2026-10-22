import React from 'react';
import { ArrowLeft, Check, ShieldCheck, Sparkles, Flame } from 'lucide-react';
import { PREMIUM_PLANS, PREMIUM_FEATURES } from './plans';

/**
 * Premium Plans Page Component
 * Responsive, zoom-safe layout supporting mobile to 4K displays and 100%–200% zoom.
 *
 * @param {Object} props
 * @param {Function} props.onBack - Callback to return to settings/dashboard
 * @param {Function} props.onChoosePlan - Callback triggered when user clicks a plan CTA (receives plan.id)
 */
export function PremiumPage({ onBack, onChoosePlan }) {
  return (
    <main
      className="relative min-h-[calc(100vh-64px)] w-full overflow-y-auto bg-[#f7faf9] px-4 py-6 md:px-8 md:py-8 lg:px-6 lg:py-6"
      tabIndex={-1}
      aria-label="Subscription Plans"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[460px] rounded-full bg-emerald-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-48 size-[520px] rounded-full bg-cyan-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col">
        {/* Navigation & Progress Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-[#00856f] focus:outline-none focus:ring-2 focus:ring-[#10a887] focus:ring-offset-2 lg:h-9"
              aria-label="Back"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <span className="text-sm font-bold text-slate-900">Premium Plans</span>
          </div>

          {/* Stepper Pill */}
          <div className="flex items-center rounded-xl border border-slate-200/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-bold text-[#00856f]">
              <span className="grid size-6 place-items-center rounded-full bg-[#10a887] text-white">
                <Check size={14} strokeWidth={3} />
              </span>
              <span>Choose plan</span>
            </div>
            <span className="mx-3 h-px w-8 bg-gradient-to-r from-[#10a887] to-slate-200" />
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-400">
              <span className="grid size-6 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-500">
                2
              </span>
              <span>Payment</span>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <header className="mx-auto mt-8 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#00856f]">
            <Sparkles size={14} />
            <span>Invonxt Premium</span>
          </div>
          <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Choose the plan that works for you. Every option includes the complete Invonxt toolkit,
            secure cloud storage, and unlimited documents.
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <section
          className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Premium plans"
        >
          {PREMIUM_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] ${
                plan.popular
                  ? 'border-2 border-[#10a887] shadow-[0_22px_55px_rgba(16,168,135,0.16)] lg:-translate-y-1.5'
                  : 'border border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.08)]'
              }`}
            >
              {/* Popular Banner */}
              {plan.popular && (
                <div className="flex h-10 items-center justify-center gap-2 bg-gradient-to-r from-[#00856f] to-[#10a887] text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                  <Flame size={15} fill="currentColor" />
                  <span>Most popular</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {/* Title & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#10a887]">
                      {plan.label}
                    </span>
                    <h2 className="mt-1 text-2xl font-black text-slate-950">{plan.name}</h2>
                  </div>
                  {plan.savings && (
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500">{plan.description}</p>

                {/* Offer Tag */}
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-rose-600">
                  Special Offer
                </p>

                {/* Price Display */}
                <div className="mt-4 flex items-end text-slate-950">
                  {plan.oldPrice && (
                    <span className="mb-2 mr-3 text-lg font-bold text-slate-400 line-through decoration-2">
                      ${plan.oldPrice}
                    </span>
                  )}
                  <span className="mb-2 mr-1 text-xl font-bold">$</span>
                  <strong className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">
                    {plan.price}
                  </strong>
                  <span className="mb-2 ml-2 text-sm font-semibold text-slate-500">/ month</span>
                </div>

                <p className="mt-2 text-xs font-medium text-slate-400">{plan.billingNote}</p>

                <div className="my-6 h-px bg-slate-100" />

                {/* Features List */}
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">
                  Everything included
                </p>
                <ul className="space-y-3">
                  {PREMIUM_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-[#10a887] ring-1 ring-inset ring-emerald-200">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button Pinned to Bottom */}
                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => onChoosePlan && onChoosePlan(plan.id)}
                    className={`h-11 w-full rounded-lg px-5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#10a887] focus:ring-offset-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#00856f] to-[#10a887] text-white shadow-lg shadow-emerald-900/15 hover:brightness-95'
                        : 'border border-[#10a887] bg-white text-[#00856f] hover:bg-emerald-50'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Guarantee Banner */}
        <footer className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur sm:flex-row sm:gap-8 sm:text-left">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={20} className="text-[#10a887]" />
            <span>30-day money-back guarantee</span>
          </div>
          <span className="hidden h-5 w-px bg-slate-200 sm:block" />
          <p className="text-sm text-slate-500">
            Secure billing. Cancel or change your plan anytime.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default PremiumPage;


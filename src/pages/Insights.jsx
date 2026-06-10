import React from 'react';

export default function Insights() {
  return (
    <>
      <div className="w-full max-w-md mx-auto md:max-w-container-max md:px-margin-desktop md:py-20">
        <main className="space-y-16">

<section className="px-margin-mobile">
<div className="relative w-full aspect-[4/5] bg-on-background overflow-hidden flex flex-col justify-end group cursor-pointer border border-on-background/5">
<img alt="Featured Insight" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" data-alt="A sophisticated abstract 3D render representing data flows and neural networks. Glowing geometric lines and particles float in a deep black void, punctuated by vibrant lime green accents that signify strategic nodes. The aesthetic is high-end, minimalist, and clinical, reflecting the AGIII brand identity of precision and digital calm. The lighting is focused and dramatic, creating a sense of technological depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqWM-fzdjrBCriYLYWpctuh04sMTD-6BbfXyRgJJ9D7j2YSt3km4gvmCK39CCSSodIV2wNs7QVktSy3SM9_HQ2UEyZN7i659XCp_NTEarUFVbJfW7Q8xtsG6s2R0xFTdakgW1pLTC4oWbonnb8vSo36jRMoV3tY6-hEi7Tp3tiV3PDOIV0gjVSqthoQTx8X7cfaHzPNDEG0OJkW5NzSPH3G0ihCf_zgPGDmu3AHRwHdVctgQtxDQ8sVrEfOfD1wH3dD5VQqX9qfAFK" />
<div className="relative p-8 bg-gradient-to-t from-on-background via-on-background/40 to-transparent">
<span className="inline-block bg-primary-container text-on-primary-container font-label-sm text-label-sm px-3 py-1 mb-4">Featured Report</span>
<h2 className="font-headline-md text-headline-md text-white mb-4">The Convergence of Robotics and Sovereign Strategy</h2>
<p className="font-body-md text-body-md text-white/70 mb-6">How automated workforce policy is redefining global geopolitical leverage in the 2025 horizon.</p>
<button className="flex items-center gap-2 text-primary-fixed font-label-md text-label-md group-hover:gap-4 transition-all">
                        READ FULL REPORT 
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>

<section className="px-margin-mobile space-y-8">
<div className="flex justify-between items-end border-b border-on-background/10 pb-4">
<h3 className="font-headline-sm text-headline-sm">Latest Analysis</h3>
<span className="font-label-sm text-label-sm text-tertiary">12 Articles</span>
</div>

<div className="divide-y divide-on-background/5">

<article className="py-8 group opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-3">
<span className="font-label-sm text-label-sm text-secondary py-1 px-2 bg-secondary-container/20 border border-secondary-container/30">AI &amp; Robotics</span>
<span className="font-label-sm text-label-sm text-tertiary">6 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm mb-3 group-hover:text-primary transition-colors">Neural Architecture and Corporate Sovereignty</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Examining the rise of private compute clusters as independent geopolitical entities.</p>
<time className="font-label-sm text-label-sm text-tertiary uppercase">November 14, 2024</time>
</article>

<article className="py-8 group opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-3">
<span className="font-label-sm text-label-sm text-secondary py-1 px-2 bg-secondary-container/20 border border-secondary-container/30">Strategy</span>
<span className="font-label-sm text-label-sm text-tertiary">4 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm mb-3 group-hover:text-primary transition-colors">The New Non-Alignment: Digital Neutrality</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Middle powers are increasingly seeking 'stack independence' to avoid technological block-locking.</p>
<time className="font-label-sm text-label-sm text-tertiary uppercase">November 12, 2024</time>
</article>

<article className="py-8 group opacity-100 translate-y-0">
<div className="flex justify-between items-start mb-3">
<span className="font-label-sm text-label-sm text-secondary py-1 px-2 bg-secondary-container/20 border border-secondary-container/30">Risk Analysis</span>
<span className="font-label-sm text-label-sm text-tertiary">8 min read</span>
</div>
<h4 className="font-headline-sm text-headline-sm mb-3 group-hover:text-primary transition-colors">Supply Chain Fragility in the Silicon Straits</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">A deep dive into the specific bottlenecks of high-purity neon gas and noble metal refining.</p>
<time className="font-label-sm text-label-sm text-tertiary uppercase">November 09, 2024</time>
</article>
</div>
<button className="w-full py-4 border border-on-background font-label-md text-label-md uppercase tracking-widest hover:bg-on-background hover:text-background transition-colors">
                View Archive
            </button>
</section>

<section className="mx-margin-mobile bg-surface-container-low p-10 border border-on-background/5">
<div className="max-w-md">
<h3 className="font-headline-md text-headline-md mb-4">Briefings in your inbox.</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Weekly strategic intelligence distilled for leaders. No noise, just analysis.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Intelligence Briefing Subscribed.')">
<div className="group">
<input className="w-full bg-white border border-on-background/10 px-4 py-4 focus:outline-none focus:border-primary-fixed transition-all placeholder:text-tertiary/50" placeholder="Corporate Email Address" required="" type="email" />
</div>
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 font-bold uppercase tracking-widest active:scale-[0.98] transition-transform">
                        Subscribe
                    </button>
<p className="font-label-sm text-[10px] text-tertiary text-center">By subscribing, you agree to our <a className="underline underline-offset-2" href="#">Privacy Policy</a> regarding data handling.</p>
</form>
</div>
</section>
</main>



<div className="fixed inset-0 bg-background z-[100] translate-x-full transition-transform duration-500 ease-in-out p-margin-mobile" id="mobile-menu">
<div className="flex justify-end mb-12">
<button className="material-symbols-outlined text-on-background p-2" id="menu-close">close</button>
</div>

<div className="absolute bottom-16 left-margin-mobile right-margin-mobile">
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 font-bold uppercase tracking-widest">Get Started</button>
</div>
</div>
      </div>
    </>
  );
}

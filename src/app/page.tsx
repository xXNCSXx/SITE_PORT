"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import Image from "next/image";
import { useEffect } from "react";

// Custom Cursor Component
function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');

    if (!cursor || !cursorFollower) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.5)';
      cursorFollower.style.transform = 'scale(2)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursorFollower.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-mask-text]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-follower" id="cursor-follower"></div>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="section-padding py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Minh Pham</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center section-padding text-center relative">
        {/* Animated Logo */}
        <div className="mb-12 fade-in logo-container">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-full overflow-hidden logo-pulse">
            <Image
              src="https://ext.same-assets.com/674241859/3351812975.gif"
              alt="Minh Pham Logo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="hero-text text-center mb-8 fade-in hero-glow">
          making<MaskContainer
            revealText="awesome"
            className="inline-block w-fit h-fit"
            size={10}
            revealSize={120}
          >
            good
          </MaskContainer><MaskContainer
            revealText="magic"
            className="inline-block w-fit h-fit"
            size={10}
            revealSize={120}
          >
            shit
          </MaskContainer>since2009
        </div>

        <Button
          variant="outline"
          size="lg"
          className="mt-8 px-8 py-6 text-lg border-white/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 start-button"
        >
          START
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-8">ABOUT ME</div>
          <div className="large-text leading-relaxed">
            I'm a <MaskContainer
              revealText="really smart"
              className="inline-block w-fit h-fit"
              size={10}
              revealSize={150}
            >
              selectively skilled
            </MaskContainer> product
            designer with strong focus on
            producing high quality &
            impactful digital experience.
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-16">WHAT I DO</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* 3D */}
            <div className="group">
              <div className="text-6xl md:text-8xl font-black text-muted/20 mb-4 transition-colors group-hover:text-primary/20">3D</div>
              <div className="text-xl font-bold mb-2">3D</div>
              <div className="text-muted-foreground">I can produce anything that my 16" laptop can render</div>
            </div>

            {/* Visual */}
            <div className="group">
              <div className="text-6xl md:text-8xl font-black text-muted/20 mb-4 transition-colors group-hover:text-primary/20">VISUAL</div>
              <div className="text-xl font-bold mb-2">Visual</div>
              <div className="text-muted-foreground">I search the internet for visual references and then combine them to create my own work.</div>
            </div>

            {/* Motion */}
            <div className="group">
              <div className="text-6xl md:text-8xl font-black text-muted/20 mb-4 transition-colors group-hover:text-primary/20">MOTION</div>
              <div className="text-xl font-bold mb-2">Motion</div>
              <div className="text-muted-foreground">I use fancy motion that makes my design more interesting that it actually is</div>
            </div>

            {/* Product */}
            <div className="group">
              <div className="text-6xl md:text-8xl font-black text-muted/20 mb-4 transition-colors group-hover:text-primary/20">PRODUCT</div>
              <div className="text-xl font-bold mb-2">Product</div>
              <div className="text-muted-foreground">I utilize common design best practices, test, and re-iterate until it works (hopefully).</div>
            </div>

            {/* Tutorial */}
            <div className="group">
              <div className="text-6xl md:text-8xl font-black text-muted/20 mb-4 transition-colors group-hover:text-primary/20">TUTORIAL</div>
              <div className="text-xl font-bold mb-2">Tutorial</div>
              <div className="text-muted-foreground">I thought I'd make millions of $ from Youtube but I didn't</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-8">EXPERIENCE</div>
          <div className="large-text mb-16 leading-relaxed">
            Over <MaskContainer
              revealText="many years"
              className="inline-block w-fit h-fit"
              size={10}
              revealSize={120}
            >
              a decade
            </MaskContainer> of
            experience in interactive
            design and working with
            some of the most talented
            people in the business
          </div>

          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-12">HISTORY</div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center border-b border-border pb-6">
              <div className="text-2xl font-bold mb-2 md:mb-0 md:w-24">NOW</div>
              <div className="flex-1">
                <div className="text-xl font-semibold">Design Lead</div>
                <div className="text-muted-foreground">Fantasy Interactive</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center border-b border-border pb-6">
              <div className="text-2xl font-bold mb-2 md:mb-0 md:w-24">2016</div>
              <div className="flex-1">
                <div className="text-xl font-semibold">Senior Product Designer</div>
                <div className="text-muted-foreground">Interactive Labs</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center border-b border-border pb-6">
              <div className="text-2xl font-bold mb-2 md:mb-0 md:w-24">2012</div>
              <div className="flex-1">
                <div className="text-xl font-semibold">Art Director</div>
                <div className="text-muted-foreground">DR Com Group</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center border-b border-border pb-6">
              <div className="text-2xl font-bold mb-2 md:mb-0 md:w-24">2009</div>
              <div className="flex-1">
                <div className="text-xl font-semibold">Flash Designer</div>
                <div className="text-muted-foreground">DR Com Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-8">CLIENTS</div>
          <div className="large-text mb-16 leading-relaxed">
            I worked with some of the most
            <MaskContainer
              revealText="brilliant"
              className="inline-block w-fit h-fit"
              size={10}
              revealSize={120}
            >
              innovative
            </MaskContainer> industry leaders to
            help build their top-notch
            products
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "FORD", desc: "Working on the Next-Generation HMI Experience without no driving experience." },
              { name: "UFC", desc: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan." },
              { name: "LINCOLN", desc: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life." },
              { name: "ROYAL CARIBBEAN", desc: "I was just one person on a massive team that created an entire Royal Caribbean eco-system." },
              { name: "SLEEPIQ", desc: "Designed a 1M+ users product utilizing my best personal experience: sleeping." },
              { name: "NFL", desc: "Explored the Future of Fantasy Football while being in a country where football means a total different sport." }
            ].map((client, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border hover:border-primary/50 transition-colors">
                <div className="text-2xl font-black mb-4">{client.name}</div>
                <div className="text-muted-foreground">{client.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-16">WHAT THEY SAID</div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Minh is seriously
                  the best and he
                  never complains
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">Michael Glass</div>
                  <div className="text-muted-foreground">Group Design Director</div>
                  <div className="text-muted-foreground">Fantasy Interactive</div>
                </div>
              </div>
              <div className="w-24 h-24 bg-gray-600 rounded-full flex-shrink-0"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  This looks
                  amazing.
                  <MaskContainer
                    revealText="Perfect!"
                    className="inline-block w-fit h-fit"
                    size={10}
                    revealSize={140}
                  >
                    Great work!
                  </MaskContainer>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">Peter Smart</div>
                  <div className="text-muted-foreground">Head of Product</div>
                  <div className="text-muted-foreground">Fantasy Interactive</div>
                </div>
              </div>
              <div className="w-24 h-24 bg-gray-600 rounded-full flex-shrink-0"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  He's a beast.
                  His skills are
                  insane!
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">Linh Le</div>
                  <div className="text-muted-foreground">Project Manager</div>
                  <div className="text-muted-foreground">Interactive Labs</div>
                </div>
              </div>
              <div className="w-24 h-24 bg-gray-600 rounded-full flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-16">CONNECT</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Dribbble</span>
                <span className="text-muted-foreground text-sm">Fake works</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Youtube</span>
                <span className="text-muted-foreground text-sm">Random tutorials</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Linkedin</span>
                <span className="text-muted-foreground text-sm">Serious me</span>
              </a>
            </div>

            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Instagram</span>
                <span className="text-muted-foreground text-sm">Not Tiktok</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Facebook</span>
                <span className="text-muted-foreground text-sm">Mostly dog stories</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-lg hover:text-primary transition-colors">
                <span className="text-primary">→</span>
                <span>Behance</span>
                <span className="text-muted-foreground text-sm">The Jurassic Park</span>
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Email</div>
              <a href="mailto:minhpham.design@gmail.com" className="text-lg hover:text-primary transition-colors">
                minhpham.design@gmail.com
              </a>
              <div className="text-sm text-muted-foreground">100% chance I read it</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Phone</div>
              <a href="tel:+84366138837" className="text-lg hover:text-primary transition-colors">
                +84 366 138 837
              </a>
              <div className="text-sm text-muted-foreground">90% chance I don't pickup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 section-padding border-t border-border">
        <div className="text-center text-muted-foreground">
          <div className="large-text mb-4">Good design is honest</div>
          <div className="text-sm">Dieter Rams</div>
        </div>
      </footer>
    </div>
  );
}

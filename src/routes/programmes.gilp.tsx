import { buildMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Lightbulb,
  Key,
  Users,
  Compass,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Globe2,
  Quote,
  Building2,
  Share2,
  Award,
  Sparkles,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  FileDown,
  Star,
  Layers,
  HelpCircle,
  BookOpen,
  Network,
  Target,
  Cpu,
  MessageSquare,
  Globe,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Footer } from "./index";

// Image assets
import logoJBS from "../assets/logo-cambridge-jbs.png";
import logoJbsClean from "../assets/logo-cambridge-jbs-white-text.png";
import logoJbsBackup from "../assets/logo-cambridge-jbs-backup.png";
import logoGEL from "../assets/logo-gel.jpg";
import cambridgeJbsOfficial from "../assets/cambridge_jbs_official.png";
import kingsCrest from "../assets/kings-college-crest.png";
import gilpHeroImg from "../assets/gilp_hero_new_bg.jpg";
import cambridgeBridgeImg from "../assets/cambridge_7.jpg";
import glipClassroomImg from "../assets/glip_final_classroom.jpg";
import lordCricketImg from "../assets/site visit.jpg";
import lordKaranImg from "../assets/house_of_lords_group.jpg";
import guyDozaImg from "../assets/gilp_guy_doza_session.jpg";
import jaideepLectureImg from "../assets/gilp_jaideep_prabhu_lecture.jpg";
import cohortWalkImg from "../assets/gilp_cohort_11.jpg";
import cohortDinnerImg from "../assets/gilp-dinner.png";
import certificateImg from "../assets/new-certificate.png";
import gilpCommunityFullImg from "../assets/gilp-community-full.png";
import gilpCommunityNetworkImg from "../assets/gilp_cohort_1.jpg";
import welcomePackImg from "../assets/gilp_welcome_pack_table.jpg";
import cambridgeSkylineImg from "../assets/cambridge.jpg";
import gilpPremiumBg from "../assets/gilp_premium_bg.jpg";
import cohortTreesImg from "../assets/cohort_trees.jpg";
import cohortBuildingImg from "../assets/cohort_building.jpg";
import day01ArrivalImg from "../assets/gilp_day01_arrival.jpg";
import day03ClassroomImg from "../assets/gilp_day03_classroom.jpg";
import day04LordsImg from "../assets/gilp_day04_lords.jpg";
import day05DinnerImg from "../assets/gilp_day05_dinner.jpg";

// Perspectives Leaders
import leaderKumaranImg from "../assets/leader_kumaran.jpg";
import leaderKaranImg from "../assets/leader_karan.jpg";
import leaderJulianImg from "../assets/leader_julian.jpg";
import leaderUdayImg from "../assets/leader_uday.jpg";
import leaderPaulImg from "../assets/leader_paul.jpg";

// Signature Moments
import momentKaranImg from "../assets/moment_karan.jpg";
import momentLordsImg from "../assets/moment_lords.jpg";
import momentIndiaUkImg from "../assets/moment_india_uk.jpg";
import momentLiveChallengesImg from "../assets/moment_live_challenges.jpg";
import momentCambridgeImg from "../assets/moment_cambridge.jpg";
import momentConversationsImg from "../assets/moment_conversations.jpg";

// 5 Dimensions images
import dimThinkImg from "../assets/dim_think.jpg";
import dimConnectImg from "../assets/dim_connect.jpg";
import dimExperienceImg from "../assets/dim_experience.jpg";
import dimActImg from "../assets/dim_act.jpg";
import dimAccessImg from "../assets/dim_access.jpg";


// Faculty portraits
import newJaideepImg from "../assets/faculty-jaideep.jpg";
import newShashaImg from "../assets/faculty-shasha.jpg";
import newLionelImg from "../assets/faculty-lionel.jpg";
import newRaghavendraImg from "../assets/faculty-raghavendra.jpg";
import newEdenImg from "../assets/faculty-eden.jpg";
import newOguzhanImg from "../assets/faculty-oguzhan.jpg";
import newKamiarImg from "../assets/faculty-kamiar.jpg";
import newElizabethImg from "../assets/faculty-elizabeth.jpg";
import newSerishImg from "../assets/faculty-serish.jpg";
import newGuyImg from "../assets/faculty-guy.jpg";
import newNickImg from "../assets/nick_ford_young.jpg";
import newThomasImg from "../assets/faculty-thomas-roulet.jpg";

// Guest leaders
import personJulianImg from "../assets/person2.jpg";
import personUdayImg from "../assets/person10.jpg";
import personScullyImg from "../assets/person4.jpg";
import personHighCommImg from "../assets/person8.jpg";
import personKeesImg from "../assets/person6.jpg";
import guyDozaSpeakerImg from "../assets/speaker10.jpg";

// Speaker Modal Images
import gilpSpeaker1 from "../assets/gilp_speaker_1.jpg";
import gilpSpeaker2 from "../assets/gilp_speaker_2.jpg";
import gilpSpeaker3 from "../assets/gilp_speaker_3.jpg";
import gilpSpeaker4 from "../assets/gilp_speaker_4.jpg";
import gilpSpeaker5 from "../assets/gilp_speaker_5.jpg";

// Testimonial alumni
import alumniSnigdha from "../assets/alumni-snigdha.jpg";
import alumniFatin from "../assets/alumni-fatin.jpg";
import alumniSamwer from "../assets/alumni-samwer.jpg";
import alumniAashish from "../assets/alumni-aashish.jpg";
import alumniAnand from "../assets/alumni-anand.jpg";
import alumniBidisha from "../assets/alumni-bidisha.jpg";
import alumniRamashankar from "../assets/alumni-ramashankar.jpg";
import alumniSam from "../assets/alumni-sam.jpg";
import alumniHersh from "../assets/alumni-hersh.jpg";
import alumniGhanshyam from "../assets/alumni-ghanshyam.png";
import alumniAshwini from "../assets/alumni-ashwini.jpg";
import alumniMario from "../assets/alumni-mario.jpg";
import alumniParag from "../assets/alumni-parag.jpg";

import logoGodrej from "../assets/logo-godrej.jpg";
import logoAakash from "../assets/logo-aakash.jpg";
import logoPratham from "../assets/logo-pratham.png";
import logoTmf from "../assets/logo-tmf.jpg";
import logoKao from "../assets/logo-kao.jpg";
import logoEfl from "../assets/logo-efl.jpg";
import logoBennett from "../assets/logo-bennett.jpg";
import logoRhenus from "../assets/logo-rhenus.jpg";
import logoRs from "../assets/logo-rs.png";
import logoMetro from "../assets/logo-metro.jpg";
import logoHsbc from "../assets/logo-hsbc.png";
import logoScms from "../assets/logo-scms.png";
import logoGalgotias from "../assets/logo-galgotias.png";
import logoThakorji from "../assets/logo-thakorji.png";
import logoBankdhofar from "../assets/logo-bankdhofar.png";
import logoIrm from "../assets/logo-irm.png";

// Apps Script Backend
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwanNP4Tmv6xhmsEbwyk_Qbmw-L7PN9cjL-oomO7u6TTvXmvrouO4GuwV9nPelXdKRndA/exec";

async function submitToGILP(formType: string, data: Record<string, string>) {
  const body = new URLSearchParams({ formType, ...data });
  await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: body.toString(),
  });
}

export const Route = createFileRoute("/programmes/gilp")({
  head: () => buildMeta("/programmes/gilp"),
  component: GILPPage,
});

export default function GILPPage() {
  const [dayModalIndex, setDayModalIndex] = useState<number | null>(null);
  const [selectedMoment, setSelectedMoment] = useState<any | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(null);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const scrollToApply = () => {
    const el = document.getElementById("priority-application");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCurriculum = () => {
    const el = document.getElementById("curriculum-journey");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-foreground selection:bg-gold/30 selection:text-forest-deep">

      {/* 2. Hero Section with Video Immersion Player & Trust Metrics */}
      <Hero
        onDownloadBrochure={() => setBrochureOpen(true)}
        onNextCohort={scrollToApply}
        onExploreCurriculum={scrollToCurriculum}
      />

      {/* 3. The Executive Distinction (Beyond the Traditional Executive Classroom) */}
      <ExecutiveDistinctionSection />

      {/* 4. Five Dimensions of Executive Mastery */}
      <FiveDimensionsSection />

      {/* 5. The 5-Day Interactive Executive Itinerary */}
      <FiveDaysInteractiveSection onOpenDayModal={(idx) => setDayModalIndex(idx)} />

      {/* 5b. Signature Moments Across GILP */}
      <SignatureMomentsSection onSelectMoment={(m) => setSelectedMoment(m)} />

      {/* 5c. What Leaders Actually Learned */}
      <WhatLeadersLearnedSection />

      {/* 6. Faculty Who Have Shaped GILP */}
      <FacultyShowcaseSection onSelectFaculty={(f) => setSelectedFaculty(f)} />

      {/* 7. Perspectives Beyond Academia */}
      <PerspectivesBeyondAcademiaSection onSelectLeader={(l) => setSelectedFaculty(l)} />

      {/* 8. Cohort Composition & Elite Peer Community */}
      <CohortProfileSection />

      {/* 9. Executive Testimonials & Participant Voices */}
      <TestimonialsSection onOpenTestimonial={(t) => setSelectedTestimonial(t)} />


      {/* 11. Participant Evidence Strip */}
      <ParticipantEvidenceStrip />

      {/* 12. Priority Application & Dossier Acquisition Section */}
      <PriorityApplicationSection />

      {/* 13. Site Footer */}
      <Footer />

      {/* Floating Action Trigger */}
      <FloatingApplyButton onClick={scrollToApply} />

      {/* Interactive Modals */}
      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <DayDetailModal dayIndex={dayModalIndex} onClose={() => setDayModalIndex(null)} />
      <MomentModal moment={selectedMoment} onClose={() => setSelectedMoment(null)} />
      <FacultyModal faculty={selectedFaculty} onClose={() => setSelectedFaculty(null)} />
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. ANNOUNCEMENT & SECONDARY NAV BAR
───────────────────────────────────────────────────────────── */
function TopAnnouncementBar({ onNextCohort }: { onNextCohort: () => void }) {
  return (
    <div className="bg-forest-deep text-white border-b border-forest/30 py-3 px-4 text-center text-[12.5px] sm:text-[13.5px] font-medium tracking-wide">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 text-gold px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider border border-gold/30">
          <Sparkles className="h-3.5 w-3.5" />
          Cohort III Admissions
        </span>
        <span className="text-stone-200 font-normal">
          Global India Leadership Programme | Cambridge Judge Business School & London
        </span>
        <button
          onClick={onNextCohort}
          className="text-gold hover:text-white font-semibold underline underline-offset-4 ml-1 cursor-pointer transition-colors inline-flex items-center gap-1.5"
        >
          <span>Register for Priority Consideration</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function GILPSecondaryNav({
  onNextCohort,
  onDownloadBrochure,
}: {
  onNextCohort: () => void;
  onDownloadBrochure: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-forest/10"
          : "bg-[#FAF8F5] py-4.5 border-forest/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl sm:text-[26px] font-serif font-bold text-forest-deep tracking-tight">
              GILP
            </span>
            <span className="h-5 w-px bg-forest/20 hidden sm:block" />
            <div className="hidden sm:flex flex-col">
              <span className="text-[11.5px] uppercase tracking-[0.18em] font-bold text-forest-deep">
                Global India Leadership Programme
              </span>
              <span className="text-[10.5px] text-forest/70 font-medium">
                University of Cambridge Judge Business School × GEL
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-8 text-[14px] font-semibold tracking-wide text-forest/80">
          <a href="#distinction" className="hover:text-gold-deep transition-colors">
            The Distinction
          </a>
          <a href="#dimensions" className="hover:text-gold-deep transition-colors">
            5 Dimensions
          </a>
          <a href="#curriculum-journey" className="hover:text-gold-deep transition-colors">
            5-Day Immersion
          </a>
          <a href="#moments" className="hover:text-gold-deep transition-colors">
            Signature Moments
          </a>
          <a href="#faculty" className="hover:text-gold-deep transition-colors">
            Dual Faculty
          </a>
          <a href="#cohort-profile" className="hover:text-gold-deep transition-colors">
            The Cohort
          </a>
          <a href="#testimonials" className="hover:text-gold-deep transition-colors">
            Impact
          </a>
          <a href="#faqs" className="hover:text-gold-deep transition-colors">
            FAQs
          </a>
        </nav>

        <div className="flex items-center gap-3.5">
          <button
            onClick={onDownloadBrochure}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-forest-deep shadow-xs hover:border-gold hover:text-gold-deep transition-all cursor-pointer"
          >
            <FileDown className="h-4 w-4 text-gold-deep" />
            <span>Brochure</span>
          </button>

          <button
            onClick={onNextCohort}
            className="inline-flex items-center gap-2.5 rounded-full bg-forest-deep px-6 py-2.5 text-[13.5px] sm:text-[14px] font-semibold text-white shadow-sm hover:bg-forest transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="text-gold font-bold">Apply</span>
            <span className="hidden sm:inline">Priority Access</span>
            <ArrowRight className="h-3.5 w-3.5 text-gold" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. HERO SECTION WITH VIDEO PLAYER & TRUST BADGES
───────────────────────────────────────────────────────────── */
function Hero({
  onDownloadBrochure,
  onNextCohort,
  onExploreCurriculum,
}: {
  onDownloadBrochure: () => void;
  onNextCohort: () => void;
  onExploreCurriculum: () => void;
}) {
  return (
    <section className="relative flex flex-col justify-start pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-black">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={gilpHeroImg}
          alt="Global India Leadership Programme"
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Dark overlay — strong black filter over background image */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-7">



            {/* Top subtitle */}
            <div className="mb-3 sm:mb-4 text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
              CAMBRIDGE JUDGE BUSINESS SCHOOL × GLOBAL EDUCATION LAB
            </div>

            {/* Title */}
            <h1 className="text-[2rem] sm:text-4xl lg:text-[4rem] xl:text-[4.5rem] font-serif font-bold leading-[1.08] text-white mb-4 sm:mb-6 drop-shadow-xl tracking-tight">
              Global India<br />
              Leadership Programme<br />
              <span className="text-[#D4AF37] font-medium italic pr-2">Beyond the Classroom.</span>
            </h1>

            {/* Paragraph — hidden on small mobile to save space */}
            <p className="hidden sm:block text-[14px] sm:text-[15.5px] lg:text-[17px] leading-[1.7] text-stone-200 max-w-[620px] mb-6 sm:mb-10 font-light">
              GILP brings together world-class academic thinking, extraordinary access, powerful peer learning and experiences designed to create value long after the classroom ends.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-10 overflow-x-auto pb-1">
              <div className="text-white shrink-0">
                <span className="block text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-medium text-[#D4AF37] mb-0.5 leading-none">2</span>
                <span className="text-[11px] sm:text-[12px] font-medium text-stone-300">Cohorts</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/20 shrink-0" />
              <div className="text-white shrink-0">
                <span className="block text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-medium text-[#D4AF37] mb-0.5 leading-none">45</span>
                <span className="text-[11px] sm:text-[12px] font-medium text-stone-300">Senior Leaders</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/20 shrink-0" />
              <div className="text-white shrink-0">
                <span className="block text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-medium text-[#D4AF37] mb-0.5 leading-none">5</span>
                <span className="text-[11px] sm:text-[12px] font-medium text-stone-300">Days</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/20 shrink-0 hidden sm:block" />
              <div className="shrink-0 hidden sm:block mt-4 -ml-6 sm:-ml-8">
                <div className="flex flex-col items-center">
                  <img
                    src={logoJbsClean}
                    alt="Cambridge Judge Business School"
                    className="h-20 sm:h-24 lg:h-28 w-auto object-contain object-center"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onNextCohort}
                className="inline-flex items-center gap-2.5 sm:gap-3 rounded bg-[#E4C87F] px-5 sm:px-7 lg:px-9 py-3.5 sm:py-4 text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-black hover:bg-[#F5DE9B] hover:-translate-y-0.5 transition-all shadow-lg w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Apply for Next Cohort</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Video */}
          <div className="lg:col-span-5 relative lg:flex lg:justify-end mt-6 sm:mt-8 lg:mt-0">
            <div className="relative aspect-video w-full lg:w-[115%] xl:w-[125%] max-w-[700px] overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10 bg-black lg:origin-right transform transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.15)] hover:border-white/20">
              <video
                src="/Globalindialeadershipprogramme.mp4"
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="none"
                poster={gilpHeroImg}
              />
            </div>

            {/* Editorial Tag — desktop only */}
            <div className="absolute -bottom-12 right-0 lg:-right-4 z-10 hidden lg:block text-right">
              <p className="font-serif italic text-[18px] text-white/95 mb-1.5 drop-shadow-lg">
                Ideas. People. Possibilities.
              </p>
              <div className="flex items-center justify-end gap-3">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <p className="text-[13px] text-stone-300 font-serif tracking-wide drop-shadow-md">
                  A stronger India. A more connected world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────────────────
   3. THE QUESTION THAT STARTED IT (EXECUTIVE DISTINCTION)
───────────────────────────────────────────────────────────── */
function ExecutiveDistinctionSection() {
  return (
    <section id="distinction" className="relative py-24 sm:py-28 lg:py-32 bg-[#F9F8F6] border-b border-stone-200/80 overflow-hidden">
      
      {/* Background Blended Image - Perfectly faded using a radial mask */}
      <div 
        className="absolute bottom-0 left-0 w-full sm:w-[90%] lg:w-[65%] h-[60%] sm:h-[80%] z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(100% 100% at 0% 100%, black 30%, transparent 100%)',
          maskImage: 'radial-gradient(100% 100% at 0% 100%, black 30%, transparent 100%)'
        }}
      >
        <img
          src={cambridgeSkylineImg}
          alt="University of Cambridge"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#8C7A58] uppercase">
                THE QUESTION THAT STARTED IT
              </span>
              <div className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-serif font-semibold text-gray-900 leading-[1.12] mb-8 tracking-[-0.02em]">
              What should a C-suite leader really take away from executive education?
            </h2>
          </div>

          {/* Middle Column: Beyond List */}
          <div className="lg:col-span-4 lg:pt-1">
            <div className="space-y-3.5 text-[17px] sm:text-[18px] text-stone-800 font-serif font-medium mb-10">
              <p>Beyond frameworks.</p>
              <p>Beyond a certificate.</p>
              <p>Beyond a powerful network.</p>
              <p>Beyond classroom discussions.</p>
            </div>

            <div className="h-px w-12 bg-[#D4AF37] mb-8" />

            <p className="text-[14px] sm:text-[15px] text-stone-600 leading-[1.8] font-light lg:pr-6">
              GILP was created to explore a more ambitious answer — combining academic depth with
              extraordinary access, powerful peer learning and experiences that continue long after
              participants leave Cambridge.
            </p>
          </div>

          {/* Right Column: Quote Box */}
          <div className="lg:col-span-3 lg:border-l lg:border-stone-200/80 lg:pl-10 xl:pl-12">
            <div className="mb-12">
              <span className="text-[4.5rem] font-serif leading-[0.5] select-none block font-medium mb-5 text-[#D4AF37]">
                “
              </span>
              <blockquote className="font-serif italic text-[20px] sm:text-[22px] text-stone-800 leading-[1.35] pr-2 font-light">
                Executive education should change more than what you know. It should change what becomes possible next.
              </blockquote>
            </div>

            <div className="h-px w-10 bg-[#D4AF37] mb-6" />

            <div>
              <p className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#8C7A58] mb-2">
                GLOBAL INDIA LEADERSHIP PROGRAMME
              </p>
              <p className="font-serif italic text-[14px] text-stone-500 font-light">
                Ideas. People. Possibilities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. FIVE DIMENSIONS OF EXECUTIVE MASTERY
───────────────────────────────────────────────────────────── */
function FiveDimensionsSection() {
  const dimensions = [
    {
      num: "01",
      name: "THINK",
      theme: "Intellectual Rigour & Horizon Scanning",
      headline: "Challenge how you frame complex strategic dilemmas.",
      text: "Deconstruct macroeconomic turbulence, frontier AI strategy, corporate governance, and branding with Cambridge faculty who advise Fortune 500 boards and global governments.",
      takeaway: "Master mental models to foresee disruption before competitors.",
      icon: Lightbulb,
      img: dimThinkImg,
      location: "Judge Business School Lecture Chambers",
    },
    {
      num: "02",
      name: "ACCESS",
      theme: "Unprecedented Global Power Corridors",
      headline: "Enter conversations that never take place in standard classrooms.",
      text: "Step inside private boardrooms at Lord's Cricket Ground, historic Cambridge college high tables, and bilateral policy chambers with British parliamentarians and High Commissioners.",
      takeaway: "Direct dialogue with leaders who shape international policy and trade.",
      icon: Key,
      img: dimAccessImg,
      location: "Lord's Pavilion & Bilateral Chambers, London",
    },
    {
      num: "03",
      name: "CONNECT",
      theme: "Unfiltered Peer Intelligence",
      headline: "Learn from the fellow CXO sitting directly beside you.",
      text: "45 senior leaders across two cohorts brought real acquisitions, succession dilemmas, digital pivots, and market entries into closed-door Chatham House discussions.",
      takeaway: "Build a lifelong trusted circle of boardroom peers and allies.",
      icon: Users,
      img: dimConnectImg,
      location: "Cohort Executive Strategy Room",
    },
    {
      num: "04",
      name: "EXPERIENCE",
      theme: "Lived Leadership & Immersive Rituals",
      headline: "Some leadership lessons must be experienced, not lectured.",
      text: "High-pressure rhetoric workshops, elite sporting leadership insights from MCC chairs, and traditional Cambridge collegiate dinners immerse leaders in high-impact executive presence.",
      takeaway: "Refine executive persuasion, resilience, and personal gravity.",
      icon: Compass,
      img: dimExperienceImg,
      location: "Historic College Halls & Punting on Cam",
    },
    {
      num: "05",
      name: "ACT",
      theme: "Translating Vision into Global Scale",
      headline: "What happens when you return to your enterprise on Monday?",
      text: "Apply Frugal Innovation and organizational health frameworks to unlock exponential value with disciplined capital, driving immediate transformations across your enterprise.",
      takeaway: "A tangible, actionable blueprint ready for immediate implementation.",
      icon: TrendingUp,
      img: dimActImg,
      location: "Enterprise Scaling Strategy Labs",
    },
  ];

  return (
    <section id="dimensions" className="py-24 sm:py-28 lg:py-32 bg-white border-b border-stone-200/80">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="h-px w-6 bg-[#99730E]" />
              <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.24em] text-[#99730E] uppercase">
                WHAT GILP OFFERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-bold text-gray-900 leading-tight">
              Five dimensions. One leadership experience.
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-stone-500 max-w-md md:text-right font-normal leading-relaxed">
            GILP brings together world-class academic thinking, extraordinary access, powerful peer learning and experiences designed to create value long after the classroom ends.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-6">
          {dimensions.map((dim, i) => {
            const Icon = dim.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-[0_4px_20px_rgba(20,30,20,0.05)] hover:shadow-[0_20px_40px_rgba(20,35,25,0.12)] hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Permanent Gold Metallic Top Accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#F5DE9B] to-[#99730E]/40 group-hover:from-[#D4AF37] group-hover:via-[#FDE9A6] group-hover:to-[#D4AF37] transition-all duration-500" />

                {/* Background Watermark Numeral */}
                <span className="absolute right-3 top-[46%] text-6xl font-serif font-black text-stone-100 select-none pointer-events-none group-hover:text-amber-100/50 transition-colors duration-500">
                  {dim.num}
                </span>

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Photo Container */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                    <img
                      src={dim.img}
                      alt={dim.name}
                      className="h-full w-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.97] group-hover:brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />

                    {/* Luxury Glass Pill Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-[#0E1C12]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/50 flex items-center gap-1.5 text-[11px] font-bold text-[#F5DE9B] shadow-md">
                      <Icon className="h-3.5 w-3.5 text-[#D4AF37]" />
                      <span>{dim.num}</span>
                    </div>

                    {/* Location hover tag */}
                    <div className="absolute bottom-3 right-3 max-w-[85%] truncate text-[10px] text-stone-200/90 font-medium px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {dim.location}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#99730E]">
                        {dim.name}
                      </span>
                    </div>

                    <h3 className="text-[15px] sm:text-[15.5px] font-semibold text-gray-900 leading-snug tracking-[-0.01em] group-hover:text-[#8C6D23] transition-colors duration-300">
                      {dim.headline}
                    </h3>

                    <p className="text-[12px] text-stone-500 leading-relaxed font-normal tracking-[0.01em]">
                      {dim.text}
                    </p>
                  </div>
                </div>

                {/* Core Executive Outcome Box */}
                <div className="px-5 sm:px-6 py-4 border-t border-[#EFEAE2] bg-gradient-to-b from-[#FBF9F5] to-[#F5F1EA] mt-auto relative z-10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="h-3 w-3 text-[#99730E]" />
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-[#8C7A58]">
                      Core Executive Outcome
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#0E2A18] leading-snug tracking-[-0.005em]">
                    {dim.takeaway}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. THE 5-DAY INTERACTIVE EXECUTIVE ITINERARY
───────────────────────────────────────────────────────────── */
function FiveDaysInteractiveSection({ onOpenDayModal }: { onOpenDayModal: (idx: number) => void }) {
  const days = [
    {
      num: 1,
      tag: "DAY 01",
      headline: "Step outside the everyday.",
      summary: "Arrive in Cambridge, connect deeply, and begin an immersive leadership journey.",
      keyTopics: ["Leadership", "Perspective", "Peer Learning"],
      img: day01ArrivalImg,
    },
    {
      num: 2,
      tag: "DAY 02",
      headline: "Understand the forces reshaping leadership.",
      summary: "Explore the forces reshaping leadership through technology, economics, innovation and debate.",
      keyTopics: ["AI", "Economics", "Innovation"],
      img: guyDozaImg,
    },
    {
      num: 3,
      tag: "DAY 03",
      headline: "Governance. Strategy. Brand.",
      summary: "Dive into governance, strategy and branding through practical frameworks and reflection.",
      keyTopics: ["Governance", "Strategy", "Branding"],
      img: day03ClassroomImg,
    },
    {
      num: 4,
      tag: "DAY 04",
      headline: "Leadership left the classroom.",
      summary: "Experience leadership beyond campus through sport, policy, communication and shared insight.",
      keyTopics: ["Sport", "Policy", "Communication"],
      img: day04LordsImg,
    },
    {
      num: 5,
      tag: "DAY 05",
      headline: "From leadership to global opportunity.",
      summary: "Translate learning into global opportunity, wellbeing, innovation and lasting impact.",
      keyTopics: ["Wellbeing", "Innovation", "Global Impact"],
      img: day05DinnerImg,
    },
  ];

  return (
    <section
      id="curriculum-journey"
      className="py-24 sm:py-28 lg:py-32 bg-[#0E1C12] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="h-px w-6 bg-[#D4AF37]" />
            <span className="text-[12px] font-bold tracking-[0.24em] text-[#D4AF37] uppercase">
              FIVE DAYS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-bold text-white leading-tight mb-4">
            Five Days. Far more than five days of classes.
          </h2>
          <p className="text-[14px] sm:text-[15px] text-stone-300 max-w-2xl leading-relaxed font-light">
            A look inside the September 2026 GILP experience. Programme experiences, faculty and
            speakers have evolved between cohorts.
          </p>
        </div>

        {/* 5 Cards Grid Layout for Desktop & Responsive View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-6 mb-16">
          {days.map((d) => (
            <div
              key={d.num}
              onClick={() => onOpenDayModal(d.num)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white/95 border border-white/10 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100 shrink-0">
                <img
                  src={d.img}
                  alt={d.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                {/* Gold top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Day Tag Badge */}
                <div className="absolute bottom-2.5 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-bold text-[#F5DE9B] tracking-wider">
                  {d.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-[15px] font-semibold text-gray-900 leading-snug tracking-[-0.01em] group-hover:text-[#99730E] transition-colors">
                    {d.headline}
                  </h3>
                  <p className="text-[12px] text-stone-500 leading-relaxed line-clamp-3 font-normal tracking-[0.01em]">
                    {d.summary}
                  </p>
                </div>

                {/* Topics List */}
                <div className="pt-3 border-t border-stone-100 space-y-1.5 mt-auto">
                  {d.keyTopics.map((t, ti) => (
                    <div key={ti} className="flex items-center gap-2 text-[11px] text-stone-500">
                      <span className="h-1 w-1 rounded-full bg-[#D4AF37] shrink-0" />
                      <span className="font-medium tracking-[0.02em]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   5B. SIGNATURE MOMENTS ACROSS GILP
───────────────────────────────────────────────────────────────────────────── */
function SignatureMomentsSection({
  onSelectMoment,
}: {
  onSelectMoment: (m: any) => void;
}) {
  const moments = [
    {
      title: "A fireside with Lord Karan Bilimoria",
      sub: "King's College Immersion",
      desc: "An intimate conversation at King's College during the first GILP cohort on entrepreneurship, leadership and building globally recognised businesses.",
      img: momentKaranImg,
    },
    {
      title: "Leadership at Lord's",
      sub: "Iconic Institutions",
      desc: "Exploring leadership through business, sport, policy, communication and technology in one of the world's most iconic sporting institutions.",
      img: momentLordsImg,
    },
    {
      title: "India–UK dialogue",
      sub: "Diplomatic & Trade Insights",
      desc: "A closing conversation with H.E. Kumaran Periasamy, Indian High Commissioner to the UK, on trade, education, skills and the role of leaders in strengthening bilateral ties.",
      img: momentIndiaUkImg,
    },
    {
      title: "Live organisational challenges",
      sub: "Applied Executive Learning",
      desc: "Moving from theoretical frameworks to real business challenges, with examples from organisations represented within the cohort.",
      img: momentLiveChallengesImg,
    },
    {
      title: "Cambridge beyond CJBS",
      sub: "The Historic Ecosystem",
      desc: "Experiencing the intellectual and cultural ecosystem of Cambridge — where ideas, innovation and impact have been shaped for centuries.",
      img: momentCambridgeImg,
    },
    {
      title: "The conversations after class",
      sub: "Cohort Camaraderie",
      desc: "Some of the most valuable learning happened outside the lecture theatre — over dinner, during walks through Cambridge and in candid discussions with fellow leaders.",
      img: momentConversationsImg,
    },
  ];

  return (
    <section
      id="moments"
      className="py-24 sm:py-28 lg:py-32 bg-[#F5EFE4] text-[#0E1C12] border-b border-stone-300/60"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header Block */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.22em] text-[#99730E] uppercase">
              SIGNATURE MOMENTS ACROSS GILP
            </span>
            <div className="h-0.5 w-10 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-gray-950 leading-tight tracking-tight mb-4">
            Some moments cannot be captured in a syllabus.
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-stone-600 font-normal max-w-2xl">
            Across two cohorts, GILP has taken leaders beyond the traditional classroom — into
            institutions, conversations and experiences that bring new perspectives to leadership.
          </p>
        </div>

        {/* 6 Moments Grid — Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {moments.map((m, i) => (
            <div
              key={i}
              onClick={() => onSelectMoment(m)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] bg-stone-900 shadow-md hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5 hover:ring-[#D4AF37]/60"
              style={{ transform: "translateZ(0)" }}
            >
              {/* Photo */}
              <img
                src={m.img}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Layered gradient: strong at bottom, soft vignette at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 pointer-events-none" />

              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Sub-label pill */}
              <div className="absolute top-4 left-4">
                <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                  {m.sub}
                </span>
              </div>

              {/* Content at bottom */}
              <div className="relative p-6 sm:p-7 text-white flex flex-col gap-2">
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white group-hover:text-[#F3E5AB] transition-colors duration-300 leading-snug tracking-[-0.01em]">
                  {m.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-stone-300/90 font-normal leading-relaxed line-clamp-3 tracking-[0.01em]">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   5C. WHAT LEADERS ACTUALLY LEARNED
───────────────────────────────────────────────────────────────────────────── */
function WhatLeadersLearnedSection() {
  const learnings = [
    {
      num: "01",
      title: "Lead through complexity",
      desc: "Make better decisions when there is no obvious right answer.",
      icon: Landmark,
    },
    {
      num: "02",
      title: "Think strategically",
      desc: "Move beyond frameworks towards sharper organisational choices.",
      icon: Target,
    },
    {
      num: "03",
      title: "Govern responsibly",
      desc: "Understand board dynamics, incentives and the growing responsibilities of leaders.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Navigate AI",
      desc: "Separate AI hype from where technology can genuinely create value.",
      icon: Cpu,
    },
    {
      num: "05",
      title: "Innovate differently",
      desc: "Explore frugal innovation, experimentation and customer-led innovation.",
      icon: Lightbulb,
    },
    {
      num: "06",
      title: "Build enduring brands",
      desc: "Understand how leadership decisions shape identity, positioning and trust.",
      icon: Users,
    },
    {
      num: "07",
      title: "Communicate with influence",
      desc: "Use rhetoric, storytelling and human judgement to move people and organisations.",
      icon: MessageSquare,
    },
    {
      num: "08",
      title: "Think beyond your organisation",
      desc: "Understand how business interacts with policy, society and international opportunity.",
      icon: Globe,
    },
  ];

  return (
    <section
      id="learned"
      className="py-24 sm:py-28 lg:py-32 bg-white text-[#0E1C12] border-b border-stone-200/80"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.22em] text-[#99730E] uppercase">
              WHAT LEADERS ACTUALLY LEARNED
            </span>
            <div className="h-0.5 w-10 bg-gradient-to-r from-[#D4AF37] to-[#E5C158]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-gray-950 leading-tight tracking-tight mb-4">
            Five days later, what had leaders explored?
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-stone-600 font-normal max-w-2xl">
            GILP brought together academic depth, real-world perspective and leadership experiences
            to help participants examine the opportunities and responsibilities shaping their
            decisions.
          </p>
        </div>

        {/* 8 Cards Grid (4 cols x 2 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {learnings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-stone-100 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col gap-4 text-left group overflow-hidden justify-between"
              >
                {/* Subtle gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#D4AF37] to-[#E5C158] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-[#0E1C12] text-[#D4AF37] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[14px] font-serif font-bold text-stone-300 tracking-wider select-none">
                    {item.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[#99730E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-stone-600 leading-relaxed font-normal mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   6. FACULTY WHO HAVE SHAPED GILP (THE MINDS THAT HAVE SHAPED GILP)
───────────────────────────────────────────────────────────────────────────── */
function FacultyShowcaseSection({
  onSelectFaculty,
}: {
  onSelectFaculty: (f: any) => void;
}) {
  const faculty = [
    {
      name: "Prof. Jaideep Prabhu",
      role: "Vice-Dean for Faculty\nCambridge Judge\nBusiness School",
      img: newJaideepImg,
      bio: "Jawaharlal Nehru Professor of Indian Business and Enterprise at CJBS. Globally renowned author of Jugaad Innovation and Frugal Innovation. Advisor to global corporations and governments on low-cost high-impact scaling.",
      institution: "Cambridge Judge Business School",
      expertise: "Frugal Innovation & Programme Leadership",
    },
    {
      name: "Prof. Shasha Lu",
      role: "Associate Professor\nin Marketing\nCambridge Judge\nBusiness School",
      img: newShashaImg,
      bio: "Associate Professor in Marketing & Analytics at CJBS. Pioneer in applying multimodal AI, video analytics, and machine learning to customer decision-making and digital channels.",
      institution: "Cambridge Judge Business School",
      expertise: "Innovation & AI",
    },
    {
      name: "Prof. Lionel Paolella",
      role: "Professor of Social\nSciences & Organisations\nCambridge Judge\nBusiness School",
      img: newLionelImg,
      bio: "Associate Professor in Strategy & Organisation at CJBS. Award-winning researcher focusing on strategic decision-making, market positioning, and competitive advantage.",
      institution: "Cambridge Judge Business School",
      expertise: "Competitive Strategy",
    },
    {
      name: "Prof. Raghavendra Rau",
      role: "Professor of Finance &\nFounder, CCAF\nCambridge Judge\nBusiness School",
      img: newRaghavendraImg,
      bio: "Sir Evelyn de Rothschild Professor of Finance at CJBS. Former President of European Finance Association. Global authority on corporate governance, board accountability, and market design.",
      institution: "Cambridge Judge Business School",
      expertise: "Corporate Governance & Finance",
    },
    {
      name: "Prof. Eden Yin",
      role: "Associate Professor\nin Marketing\nCambridge Judge\nBusiness School",
      img: newEdenImg,
      bio: "Associate Professor in Marketing at CJBS. Expert in global brand architecture, high-tech marketing, market entry strategy, and customer lifetime value.",
      institution: "Cambridge Judge Business School",
      expertise: "Branding & Marketing",
    },
    {
      name: "Prof. Oğuzhan Karakaş",
      role: "Associate Professor\nin Finance\nCambridge Judge\nBusiness School",
      img: newOguzhanImg,
      bio: "Associate Professor in Finance at CJBS. Expert on corporate governance structures, private equity ownership models, and voting mechanisms in high-stakes boardroom battles.",
      institution: "Cambridge Judge Business School",
      expertise: "Boardroom Dynamics & Governance",
    },
    {
      name: "Prof. Thomas Roulet",
      role: "Professor of Organisational\nSociology & Leadership\nCambridge Judge\nBusiness School",
      img: newThomasImg,
      bio: "Professor of Organisational Sociology and Fellow at King's College, Cambridge. Regular contributor to Harvard Business Review, MIT Sloan, and FT on executive wellbeing, mental stamina, and leadership culture.",
      institution: "Cambridge Judge Business School",
      expertise: "Organisational Behaviour",
    },
    {
      name: "Prof. Kamiar Mohaddes",
      role: "Associate Professor\nin Economics & Policy\nCambridge Judge\nBusiness School",
      img: newKamiarImg,
      bio: "Associate Professor in Economics & Policy at CJBS. Specialist in global macroeconomics, energy transitions, currency dynamics, and climate-macro financial risk.",
      institution: "Cambridge Judge Business School",
      expertise: "Economics & Global Macro",
    },
    {
      name: "Elizabeth Osta",
      role: "Visiting Fellow &\nCo-Lead, Frugal AI Hub\nCambridge Judge\nBusiness School",
      img: newElizabethImg,
      bio: "Senior strategy and technology advisor specializing in enterprise AI integration, frontier innovation systems, and agile organizational transformation.",
      institution: "Cambridge Innovation Faculty",
      expertise: "AI & Enterprise Innovation",
    },
    {
      name: "Serish Venkata Gandikota",
      role: "Visiting Fellow\nCambridge Judge\nBusiness School",
      img: newSerishImg,
      bio: "Distinguished practitioner, venture builder, and innovator focusing on lean, scalable artificial intelligence architectures and sustainable technological transformation.",
      institution: "Cambridge Innovation Network",
      expertise: "Frugal AI & Scalable Tech",
    },
    {
      name: "Guy Doza",
      role: "Public Speaking, Influence\n& Executive\nCommunication Coach",
      img: newGuyImg,
      bio: "Cambridge rhetoric expert and speechwriter. Advises FTSE-100 chairs, CEOs, and prime ministers on high-impact persuasion, linguistic framing, and commanding the room under pressure.",
      institution: "Cambridge Judge Business School (Affiliated)",
      expertise: "Executive Communication & Rhetoric",
    },
    {
      name: "Nick Ford-Young",
      role: "Co-CEO, Boldspace &\nBrand Strategy\nArchitect",
      img: newNickImg,
      bio: "Visionary CEO of Boldstream. Expert in digital transformation, high-impact scaling, and modern entrepreneurial leadership.",
      institution: "Boldstream",
      expertise: "Digital Transformation & Scaling",
    },
  ];

  return (
    <section
      id="faculty"
      className="py-16 sm:py-20 lg:py-24 border-b border-stone-800"
      style={{ background: "linear-gradient(160deg, #0E1C12 0%, #162B1C 50%, #0A1508 100%)" }}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.25em] uppercase text-[#D4AF37]">
              FACULTY WHO HAVE SHAPED GILP
            </span>
            <div className="h-0.5 w-10 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            The minds that have shaped{" "}
            <span className="font-serif font-black text-[#D4AF37]">GILP.</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed text-stone-300">
            GILP has been delivered by faculty from Cambridge Judge Business School and
            distinguished experts who bring deep academic knowledge and real-world perspective to
            the programme.
          </p>
        </div>

        {/* Faculty Grid — 6 columns desktop, 3 tablet, 2 mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10">
          {faculty.map((f, i) => (
            <div
              key={i}
              onClick={() => onSelectFaculty(f)}
              className="group cursor-pointer flex flex-col bg-white rounded-[24px] p-2.5 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] mb-3 sm:mb-4 bg-stone-100">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Name & Role */}
              <div className="px-1 pb-1 sm:pb-2 text-center flex flex-col items-center">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#002B49] leading-tight mb-1">
                  {f.name}
                </h3>
                <div className="w-6 sm:w-8 h-[1.5px] bg-[#D4AF37] opacity-80 my-1.5 rounded-full" />
                <p className="text-[9.5px] sm:text-[10.5px] text-[#C09623] font-medium tracking-wide leading-[1.3] whitespace-pre-line">
                  {f.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note & Link */}
        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-stone-400 font-serif italic text-[13px] sm:text-[13.5px]">
            <div className="h-0.5 w-6 bg-[#D4AF37]" />
            <span>Faculty participation and programme content have evolved across cohorts.</span>
          </div>
          <a
            href="#priority-application"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-stone-300 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
          >
            <span>Learn more about our faculty</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────────────────────────────────────
   7. PERSPECTIVES BEYOND ACADEMIA (GLOBAL TITANS & DISTINGUISHED LEADERS)
───────────────────────────────────────────────────────────────────────────── */
function PerspectivesBeyondAcademiaSection({
  onSelectLeader,
}: {
  onSelectLeader: (l: any) => void;
}) {
  const leaders = [
    {
      name: "H.E. Kumaran Periasamy",
      role: "Indian High Commissioner to the UK",
      note: "Trade, education, skills and the role of leadership in strengthening bilateral ties.",
      img: leaderKumaranImg,
      modalImg: gilpSpeaker4,
      imgClass: "scale-[1.3] object-[center_20%] origin-top",
      bio: "Indian High Commissioner to the UK. Key strategic architect of India-UK bilateral corridors spanning trade, education, talent mobility, and technology investment.",
      institution: "High Commission of India, London",
      expertise: "India–UK Opportunity & Bilateral Trade",
    },
    {
      name: "Lord Karan Bilimoria",
      role: "Member of the House of Lords and Founder, Cobra Beer",
      note: "Fireside conversation during the first GILP cohort.",
      img: leaderKaranImg,
      modalImg: gilpSpeaker2,
      bio: "Crossbench Peer in the UK House of Lords, Chancellor of the University of Birmingham, and Founder & Chairman of Cobra Beer. Former President of the Confederation of British Industry (CBI).",
      institution: "House of Lords & CBI",
      expertise: "Entrepreneurship & Global Business",
    },
    {
      name: "Julian Metherell",
      role: "President, MCC; Chair, London Spirit & CJBS Advisory Board",
      note: "Lord's Cricket Ground \nConnecting Sport, Business & Academia",
      img: leaderJulianImg,
      modalImg: gilpSpeaker3,
      bio: "Senior corporate and energy leader. President of Marylebone Cricket Club (Lord's), Chair of London Spirit, and Chair of Cambridge Judge Business School Advisory Board. Former Head of European Energy at Goldman Sachs.",
      institution: "MCC (Lord's) & CJBS Advisory Board",
      expertise: "Connecting Sport, Business & Academia",
    },
    {
      name: "Lord Uday Nagaraju",
      role: "Member of the House of Lords, Founder, AI Policy Labs",
      note: "Perspectives on responsible technology and policy.",
      img: leaderUdayImg,
      modalImg: gilpSpeaker1,
      bio: "Member of the UK House of Lords and global advisor on artificial intelligence governance, technology ethics, and international digital public policy.",
      institution: "UK House of Lords & AI Policy",
      expertise: "AI Governance & Digital Policy",
    },
    {
      name: "Paul Scully",
      role: "Former UK Minister for Tech & the Digital Economy",
      note: "Policy & Human-Centric AI",
      img: leaderPaulImg,
      modalImg: gilpSpeaker5,
      bio: "Former UK Minister for Tech and the Digital Economy, and former Minister for London. Led nationwide initiatives on digital innovation, tech regulation, and economic modernization.",
      institution: "UK Government (Former Tech Minister)",
      expertise: "Policy & Human-Centric AI",
    },
  ];

  return (
    <section
      id="perspectives"
      className="py-24 sm:py-28 lg:py-32 bg-[#E8E1D3] text-[#0E1C12] relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Top Header Block & Right Quote */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16">
          {/* Left Title & Subtext */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[12px] sm:text-[14px] font-extrabold tracking-[0.2em] text-[#99730E] uppercase">
                PERSPECTIVES BEYOND ACADEMIA
              </span>
              <div className="h-px w-16 bg-[#D4AF37]/80" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-serif font-bold text-gray-950 leading-[1.15] tracking-tight mb-6">
              Because leadership is too important
              <br />
              to be understood through academia alone.
            </h2>

            <p className="text-[17px] sm:text-[19px] text-stone-700 leading-relaxed max-w-2xl font-light">
              GILP has brought together distinguished leaders from business, government, sport and
              society to share perspectives that challenge, inspire and broaden thinking.
            </p>
          </div>

          {/* Right Quote Callout */}
          <div className="lg:max-w-[280px] shrink-0 pt-4 flex gap-4 lg:border-l border-[#D4AF37]/30 lg:pl-8">
            <div>
              <span className="text-6xl font-serif text-[#D4AF37] leading-none select-none block -mt-4 mb-2 opacity-90">
                “
              </span>
              <p className="text-[21px] sm:text-[23px] font-serif italic text-stone-800 leading-snug">
                Different worlds.
                <br />
                One leadership
                <br />
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Guest Leaders — Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 border-t border-[#D4AF37]/30 pt-8">
          {leaders.map((l, i) => (
            <div
              key={i}
              onClick={() => onSelectLeader(l)}
              className="group cursor-pointer flex flex-col text-left transition-all duration-300 bg-white rounded-xl shadow-sm border border-stone-200/80 hover:shadow-xl hover:border-[#D4AF37]/50 overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-stone-200 border-b border-stone-100">
                <img
                  src={l.img}
                  alt={l.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${l.imgClass || ""} group-hover:scale-[1.05]`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-gray-900 leading-snug group-hover:text-[#99730E] transition-colors mb-1">
                  {l.name}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#5A7C9A] font-medium leading-snug mb-3">
                  {l.role}
                </p>
                <p className="text-[12px] sm:text-[13px] text-stone-600 leading-relaxed font-light line-clamp-4 whitespace-pre-line">
                  {l.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   8. COHORT COMPOSITION & ELITE PEER COMMUNITY
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function CohortProfileSection() {
  const stats = [
    { value: "45", label: "C-suite & senior leaders" },
    { value: "2", label: "Completed cohorts" },
    { value: "10+", label: "Countries represented" },
    { value: "Multiple", label: "Industries & disciplines", isText: true },
  ];

  return (
    <section
      id="cohort-profile"
      className="py-20 sm:py-24 lg:py-28 bg-[#FAF9F6] text-[#0E1C12] border-b border-stone-200/80 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 relative">
        
        {/* Subtle background decorative circle */}
        <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[500px] h-[500px] border-[1px] border-[#D4AF37]/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center relative z-10">
          
          {/* Left Column (5 cols): Description & Quote */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#99730E] uppercase">
                  THE GILP COMMUNITY
                </span>
                <div className="h-px w-10 bg-[#99730E]" />
              </div>
              
              <h2 className="text-[2.2rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-medium text-gray-900 leading-[1.1] tracking-tight">
                45 leaders. Two cohorts. One growing community.
              </h2>
            </div>

            <p className="text-stone-600 text-[15px] sm:text-[16px] leading-relaxed font-normal pr-4">
              GILP has brought together C-suite and senior leaders from business, education,
              healthcare, finance, technology and entrepreneurship — creating an extraordinary peer
              group united by curiosity, experience and a shared commitment to making a difference.
            </p>

            <div className="pt-6 border-t border-stone-300/80 pr-4 mt-2">
              <p className="text-[15px] font-serif italic text-stone-600 leading-snug mb-3">
                “Leadership Learning That Feels Like a Rolls Royce”
              </p>
              <p className="text-[10px] font-bold tracking-[0.15em] text-stone-400 uppercase">
                — SAM TULLY, GILP DELEGATE
              </p>
            </div>
          </div>

          {/* Middle Column (3 cols): 2x2 Stats Grid */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-px bg-stone-200/60 rounded-[20px] overflow-hidden border border-stone-200/80 shadow-sm w-full h-[220px]">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-4 flex flex-col justify-center items-center text-center transition-colors h-full"
                >
                  <div className="-mt-3 sm:-mt-4">
                    <span
                      className={`block font-serif font-medium text-[#B8860B] leading-none mb-1.5 sm:mb-2 ${
                        s.isText ? "text-xl sm:text-[22px]" : "text-3xl sm:text-[38px]"
                      }`}
                    >
                      {s.value}
                    </span>
                    <span className="text-[11.5px] sm:text-[12.5px] text-stone-600 font-normal leading-snug">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Images — stacked on mobile, overlapping on desktop */}
          <div className="lg:col-span-4 relative">
            {/* Mobile: Simple stacked images */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={cohortBuildingImg} alt="GILP Cohort Building" className="w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[3/2] rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img src={cohortTreesImg} alt="GILP Cohort with Trees" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Desktop: Overlapping layout */}
            <div className="hidden lg:block relative h-[540px] w-full">
              {/* Top/Back Image (Trees) */}
              <div className="absolute top-2 -left-2 w-[84%] aspect-[3/2] z-0 shadow-xl rounded-xl overflow-hidden border-[6px] border-white transform rotate-[-2deg]">
                <img src={cohortTreesImg} alt="GILP Cohort with Trees" className="w-full h-full object-cover" />
              </div>
              {/* Bottom/Front Image (Building) */}
              <div className="absolute bottom-10 -right-4 w-[88%] aspect-[4/3] z-10 shadow-2xl rounded-xl overflow-hidden border-[6px] border-white transform rotate-[1deg]">
                <img src={cohortBuildingImg} alt="GILP Cohort Building" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logo Strip — Marquee Logos */}
        <div className="mt-12 pt-8 sm:mt-16 sm:pt-12 border-t border-stone-200/80 flex flex-col items-center gap-8 overflow-hidden">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-stone-400 uppercase text-center w-full z-10">
            A SELECTION OF ORGANISATIONS REPRESENTED
          </span>

          <style>{`
            @keyframes gilp-marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-33.333%); }
            }
            .gilp-marquee-track {
              display: flex;
              width: max-content;
              animation: gilp-marquee 12s linear infinite;
            }
          `}</style>

          <div className="relative w-full overflow-hidden">
            <div className="gilp-marquee-track items-center">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14">
                  <img src={logoBennett} alt="Bennett University" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoAakash} alt="Aakash Healthcare" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoPratham} alt="Pratham UK" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoTmf} alt="TMF Group" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoKao} alt="Kao Corporation" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoEfl} alt="EFL" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoGodrej} alt="Godrej" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoRhenus} alt="Rhenus Logistics" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoRs} alt="RS" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoMetro} alt="Metro Heart Institute" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoHsbc} alt="HSBC" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoScms} alt="SCMS" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoGalgotias} alt="Galgotias University" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoThakorji} alt="Thakorji" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoBankdhofar} alt="Bank Dhofar" className="h-9 sm:h-12 w-auto object-contain" />
                  <img src={logoIrm} alt="IRM" className="h-9 sm:h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. EXECUTIVE TESTIMONIALS & PARTICIPANT VOICES
───────────────────────────────────────────────────────────── */
function _getInitials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
function _avatarBg(name: string) {
  const palette = [
    { bg: "#1B4332", text: "#D4AF37" },
    { bg: "#2D6A4F", text: "#ffffff" },
    { bg: "#0E1C12", text: "#D4AF37" },
    { bg: "#4A4E69", text: "#D4AF37" },
    { bg: "#6B4226", text: "#ffffff" },
    { bg: "#374151", text: "#D4AF37" },
    { bg: "#1F2D3D", text: "#D4AF37" },
  ];
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return palette[h % palette.length];
}

function TestimonialsSection({
  onOpenTestimonial,
}: {
  onOpenTestimonial: (t: any) => void;
}) {
  const testimonials = [
    {
      name: "Sam Tully",
      role: "Trustee",
      org: "Pratham (UK)",
      quote: "A week of intensive, high-quality learning across innovation, AI, governance, and strategy. Structure, faculty expertise, and diverse perspectives made it deeply impactful. It provided both big-picture insights and practical takeaways for navigating global business. It felt like a Rolls Royce.",
      cohort: "September 2026 Cohort",
      img: alumniSam,
    },
    {
      name: "Dr. Fatin Al Zadjali",
      role: "L&D Head",
      org: "Bank Dhofar (Oman)",
      quote: "An enriching experience that combined frugal innovation, AI, governance, and storytelling into actionable leadership insights. The diverse cohort and engaging discussions made learning deeply practical. I left with new strategies, and renewed clarity on leading with purpose and impact.",
      cohort: "September 2026 Cohort",
      img: alumniFatin,
    },
    {
      name: "Hersh Shah",
      role: "CEO",
      org: "IRM India Affiliate",
      quote: "Great meeting industry leaders, government officials, leading academicians from Cambridge University and entrepreneurs. A deeply enriching week at the prestigious University of Cambridge. Honoured to be invited to the 'Global India Leadership Programme' by Global Education Lab and Cambridge Judge Business School.",
      cohort: "September 2026 Cohort",
      img: alumniHersh,
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7508526229084372992/",
    },
    {
      name: "Dr. Aashish Chaudhry",
      role: "MD",
      org: "Aakash Healthcare (India)",
      quote: "Frugal innovation came alive during the programme as a practical necessity, not theory. It reinforced that sustainable impact lies in affordable, last-mile solutions. Seeing 'jugaad' discussed at Cambridge affirmed that frugal innovation is globally relevant, and that the programme sets exactly the right foundation.",
      cohort: "September 2026 Cohort",
      img: alumniAashish,
    },
    {
      name: "Ghanshyam Tiwari",
      role: "Founder & Chief Business Officer",
      org: "Samajwadi Party | GoodEd Technologies",
      quote: "It was a privilege to meet professors with thought leadership and professionals with global experience at the University of Cambridge. The opportunity to learn from diverse perspectives and engage with such accomplished leaders made the week truly enriching and memorable.",
      cohort: "September 2026 Cohort",
      img: alumniGhanshyam,
      linkedin: "https://lnkd.in/p/dD6pBeMa",
    },
    {
      name: "Johannes Samwer",
      role: "MD",
      org: "Rhenus Lub (Germany)",
      quote: "The programme offered insights into leadership communication and influence. Sessions on rhetoric and group discussions were particularly impactful, providing practical tools used by global leaders. A highly engaging experience that I would strongly recommend to anyone looking to enhance leadership effectiveness.",
      cohort: "September 2026 Cohort",
      img: alumniSamwer,
    },
    {
      name: "Ashwini Ramakrishna",
      role: "Associate Director - Amazon (eCommerce), EMEA",
      org: "Kao Corporation",
      quote: "What happens when academia, entrepreneurship and corporate leadership come together in one room? I got to experience exactly that through the Global India Leadership Programme at Cambridge Judge Business School. I was thrilled to be accepted and invited to the Executive Programme, and the five days were a wonderful opportunity to step away from the day-to-day, challenge my thinking and learn alongside an inspiring group of leaders.",
      cohort: "September 2026 Cohort",
      img: alumniAshwini,
      linkedin: "https://lnkd.in/p/dfCvPzaU",
    },
    {
      name: "Dr. Johannes Mario Schmidt",
      role: "MD",
      org: "Lingel Windows and Doors Technologies (India)",
      quote: "A dynamic and engaging programme that brings together like-minded global leaders. The blend of sessions and discussion creates continuous learning opportunities. Even early into the programme, the value of connections and insights is clear, highly recommend joining if you get the chance.",
      cohort: "September 2026 Cohort",
      img: alumniMario,
    },
  ];


  return (
    <section id="testimonials" className="pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-forest/10" style={{ background: "linear-gradient(160deg, #0E1C12 0%, #162B1C 50%, #0A1508 100%)" }}>
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "#D4AF37" }} />
              <span className="text-[11.5px] sm:text-[12px] font-extrabold tracking-[0.25em] uppercase" style={{ color: "#D4AF37" }}>
                VOICES FROM OUR COMMUNITY
              </span>
            </div>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5">
              <span className="text-white block">45 leaders have experienced GILP.</span>
              <br />
              <span style={{ color: "#D4AF37" }} className="block mt-1">This is what stayed with them.</span>
            </h2>
            <p className="text-stone-300 text-[15px] sm:text-[16px] leading-relaxed max-w-2xl font-light">
              From powerful classroom discussions to unforgettable experiences beyond Cambridge, here is what participants from our first two cohorts had to say.
            </p>
          </div>
          <div className="shrink-0 lg:pb-1">
            <a
              href="/gilp-stories"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-[14px] font-bold transition-all hover:-translate-y-0.5 hover:shadow-xl whitespace-nowrap"
              style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.4)", color: "#D4AF37" }}
            >
              Read more stories <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {testimonials.map((t, i) => {
            const color = _avatarBg(t.name);
            return (
              <div
                key={i}
                onClick={() => onOpenTestimonial && onOpenTestimonial(t)}
                className="bg-white rounded-[1.25rem] overflow-hidden flex flex-row cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group border border-stone-200/60 shadow-md"
              >
                {/* ── Left: Photo or Initials Avatar ── */}
                <div className="w-[35%] shrink-0 relative overflow-hidden border-r border-stone-100 bg-stone-50">
                  {(t as any).img ? (
                    <img
                      src={(t as any).img}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                      style={{ background: color.bg }}
                    >
                      {/* Subtle premium glow */}
                      <div
                        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                        style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
                      />
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{ backgroundImage: "radial-gradient(circle at bottom left, rgba(0,0,0,0.2) 0%, transparent 60%)" }}
                      />
                      {/* Monogram */}
                      <span
                        className="relative select-none font-medium text-[2.5rem] sm:text-[3rem] leading-none"
                        style={{ color: color.text, fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
                      >
                        {_getInitials(t.name)}
                      </span>
                    </div>
                  )}
                </div>

                {/* ── Right: Content ── */}
                <div className="flex flex-col flex-1 p-3.5 sm:p-4 relative bg-gradient-to-br from-white to-stone-50/50">
                  {/* Gold quote mark */}
                  <span
                    className="text-[2.2rem] font-serif leading-none mb-0.5 select-none opacity-80"
                    style={{ color: "#D4AF37", fontFamily: "'Georgia', serif" }}
                  >
                    "
                  </span>

                  {/* Quote */}
                  <div className="flex-1 mb-2.5">
                    <p className="text-[11.5px] sm:text-[12px] text-stone-700 leading-[1.5] italic line-clamp-4 font-light">
                      {t.quote}
                    </p>
                  </div>

                  {/* Footer: name / role / org / cohort */}
                  <div className="mt-auto pt-2.5 border-t border-stone-100/80">
                    <p className="text-[11.5px] font-bold text-gray-900 leading-tight tracking-tight">{t.name}</p>
                    <p className="text-[9.5px] text-stone-500 mt-0.5 leading-tight font-medium uppercase tracking-wider">{t.role}</p>
                    {t.org && (
                      <p className="text-[9.5px] text-stone-500 leading-tight mt-0.5">{t.org}</p>
                    )}
                    <div className="mt-2.5">
                      <span className="inline-flex items-center gap-1 text-[10.5px] text-[#D4AF37] font-bold group-hover:underline">
                        Read more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────────────────────────────────────
   11. PARTICIPANT EVIDENCE STRIP (MARQUEE)
───────────────────────────────────────────────────────────────────────────── */
function ParticipantEvidenceStrip() {
  const stats = [
    { val: "4.8/5", label: "Overall learning experience" },
    { val: "96%", label: "Rated faculty Exceptional / Very Good" },
    { val: "94%", label: "Would recommend GILP" },
    { val: "92%", label: "Found peer learning highly valuable" },
  ];

  const marqueeItem = (
    <div className="flex items-center gap-12 shrink-0 pr-12">
      {/* Label */}
      <div className="border-r pr-12 shrink-0 border-stone-200">
        <p className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.22em] text-[#0E1C12]">
          What participants told us.
        </p>
        <p className="text-[12px] text-stone-600 mt-1 max-w-[240px] leading-snug whitespace-normal font-normal">
          Two cohorts have given us something more useful than assumptions: evidence.
        </p>
      </div>
      {/* Stats */}
      <div className="flex gap-x-14 sm:gap-x-16">
        {stats.map((s, i) => (
          <div key={i} className="shrink-0 min-w-[150px] whitespace-normal">
            <p className="text-[30px] sm:text-[34px] font-extrabold font-sans leading-none" style={{ color: "#B8860B" }}>
              {s.val}
            </p>
            <p className="text-[12px] sm:text-[13px] text-stone-600 mt-2 font-medium leading-tight max-w-[140px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="pt-0 pb-0 w-full relative overflow-hidden bg-white"
    >
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-slow {
            animation: scroll-marquee 35s linear infinite;
          }
        `}
      </style>
      <div
        className="w-full py-7 sm:py-9 overflow-hidden relative bg-white border-y border-stone-200/80 shadow-xs"
      >
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] cursor-default">
          {/* We duplicate the item twice to allow seamless 50% scrolling */}
          <div className="flex shrink-0 pr-16">
            {marqueeItem}
          </div>
          <div className="flex shrink-0 pr-16">
            {marqueeItem}
          </div>
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   12. PRIORITY APPLICATION â€” FULL LUXURY SPLIT SCREEN
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function PriorityApplicationSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !workEmail || !organisation || !role) return;
    setStatus("submitting");
    try {
      await submitToGILP("next-chapter-priority", {
        fullName: `${firstName} ${lastName}`.trim(),
        email: workEmail,
        phone,
        company: organisation,
        designation: role,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="priority-application"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      {/* ═══════════ FULL BLEED BACKGROUND ═══════════ */}
      <div className="absolute inset-0 z-0">
        <img
          src={gilpPremiumBg}
          alt="University of Cambridge"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Strong dark overlay on LEFT side for text legibility, atmospheric depth on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,14,7,0.96) 0%, rgba(3,14,7,0.88) 40%, rgba(3,14,7,0.62) 70%, rgba(3,14,7,0.35) 100%)",
          }}
        />
        {/* Subtle dark vignette on top and bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, transparent 40%, rgba(2,10,5,0.7) 100%)",
          }}
        />
        {/* Gold top and bottom accent lines */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #D4AF37 30%, #F5D97A 50%, #D4AF37 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* ═══════════ CONTENT ═══════════ */}
      <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1440px] px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* ── LEFT: Bold narrative column ── */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Programme badge */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
            />
            <span
              className="text-[12px] font-extrabold tracking-[0.3em] uppercase"
              style={{ color: "#D4AF37" }}
            >
              Cohort III · Priority Registration
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-sans font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}
          >
            Be Among<br />
            <span style={{ color: "#D4AF37" }}>India's Next</span><br />
            Global Leaders.
          </h2>

          <p className="text-stone-300 leading-relaxed mb-8 max-w-lg font-normal text-base sm:text-lg">
            The next GILP cohort at Cambridge Judge Business School is being curated.
            Secure priority consideration before public announcement.
          </p>

          {/* Programme stat pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { val: "5", label: "Days in Cambridge & London" },
              { val: "Limited Spaces", label: "C-Suite Leaders Only" },
              { val: "100%", label: "CJBS Certified" },
            ].map((s) => (
              <div
                key={s.val}
                className="rounded-2xl px-5 py-3"
                style={{
                  background: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.35)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-xl sm:text-2xl font-bold font-sans" style={{ color: "#D4AF37" }}>{s.val}</p>
                <p className="text-[11px] sm:text-[12px] text-stone-300 font-medium mt-0.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <ul className="space-y-3.5 max-w-lg">
            {[
              { icon: <Award className="h-4 w-4" />, text: "Cambridge Judge Business School Certificate" },
              { icon: <Landmark className="h-4 w-4" />, text: "Exclusive access beyond the traditional classroom" },
              { icon: <Globe2 className="h-4 w-4" />, text: "Global perspectives from policy, diplomacy & business" },
              { icon: <Network className="h-4 w-4" />, text: "Curated peer network of senior leaders & CXOs" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: "rgba(212,175,55,0.18)", color: "#D4AF37" }}
                >
                  {item.icon}
                </span>
                <span className="text-[13.5px] sm:text-[14.5px] font-medium text-stone-200 leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* ── RIGHT: Registration Form Card (spacious desktop) ── */}
        <div className="w-full lg:max-w-[480px] xl:max-w-[520px] shrink-0">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white border border-forest/10">

            {/* Dark green card header */}
            <div
              className="px-6 sm:px-8 pt-6 pb-6"
              style={{ background: "linear-gradient(135deg, #0E2B14 0%, #1A3E22 100%)" }}
            >
              {/* Top label row */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-6" style={{ background: "#D4AF37" }} />
                <span className="text-[11px] font-extrabold tracking-[0.22em] uppercase" style={{ color: "#D4AF37" }}>
                  Join the Priority Application List
                </span>
              </div>
              <p className="text-white font-bold text-xl sm:text-2xl font-serif leading-tight">
                Global India
              </p>
              <p className="font-bold text-xl sm:text-2xl font-serif leading-tight" style={{ color: "#D4AF37" }}>
                Leadership Programme
              </p>
              <p className="text-stone-300 text-xs sm:text-sm mt-1.5 font-sans">
                Cambridge Judge Business School × GEL
              </p>
              {/* Two gold lines */}
              <div className="flex gap-1.5 mt-3.5">
                <div className="h-[3px] w-10 rounded-full" style={{ background: "#D4AF37" }} />
                <div className="h-[3px] w-4 rounded-full" style={{ background: "rgba(212,175,55,0.35)" }} />
              </div>
            </div>

            {/* Form body — white background */}
            {status === "success" ? (
              <div className="px-6 sm:px-8 py-10 text-center bg-white">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center bg-green-50">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-forest-deep font-bold text-lg mb-2">Registration Received</p>
                <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
                  Our programme office will review your details and be in touch with further information regarding consideration for the next cohort.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-7 space-y-4 bg-white">
                {/* Row 1: First + Last Name */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rajesh"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sharma"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    style={{ border: "1px solid #e5e7eb" }}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                    Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company / Institution"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    style={{ border: "1px solid #e5e7eb" }}
                  />
                </div>

                {/* Row 3: Current Role + Contact Number */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                      Current Role *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Director"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 mb-1.5 uppercase tracking-widest">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl px-3.5 py-3 text-[13.5px] text-forest-deep placeholder-stone-400 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      style={{ border: "1px solid #e5e7eb" }}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                )}

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl py-4 text-[14.5px] font-bold tracking-wide transition-all duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer disabled:opacity-60 shadow-lg mt-2"
                  style={{
                    background: "linear-gradient(90deg, #C9A227 0%, #F0D060 50%, #C9A227 100%)",
                    color: "#0A1F0D",
                  }}
                >
                  {status === "submitting" ? "Submitting…" : "Get Early Application Access —"}
                </button>

                {/* Sub-text row */}
                <div className="flex items-center justify-between pt-1">
                  <p className="text-stone-400 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-forest/50" />
                    Submitting this form does not guarantee admission to the programme.
                  </p>
                </div>


              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MODALS & FLOATING CONTROLS
───────────────────────────────────────────────────────────────────────────── */
function FloatingApplyButton({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-forest-deep text-white px-6 py-3.5 shadow-2xl border border-gold/60 hover:bg-gold hover:text-forest-deep transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
      </span>
      <span className="text-[13.5px] font-bold tracking-wide">Apply for Next Cohort</span>
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

const BROCHURE_PDF_URL = "/gilp-brochure_final.pdf";

function BrochureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setStatus("submitting");
    try {
      await submitToGILP("brochure", { fullName, email, company });
      const link = document.createElement("a");
      link.href = BROCHURE_PDF_URL;
      link.download = "GILP-Executive-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setFullName("");
      setEmail("");
      setCompany("");
      setStatus("idle");
      onClose();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-forest/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-forest-deep px-7 py-6 flex items-center justify-between text-white">
          <div>
            <p className="font-bold text-lg font-serif">Download GILP Programme Dossier</p>
            <p className="text-xs text-stone-300 mt-0.5">University of Cambridge Executive Immersion</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white hover:text-forest-deep transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-7 sm:p-8 space-y-4">
          <p className="text-[14px] text-forest/80 leading-relaxed">
            Enter your details below and the comprehensive 24-page GILP Executive Brochure will
            download immediately.
          </p>

          <div>
            <label className="block text-[13px] font-semibold text-forest-deep mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anita Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-forest/20 rounded-xl px-4 py-3 text-[14px] text-forest-deep bg-cream/40 focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-forest-deep mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="anita@enterprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-forest/20 rounded-xl px-4 py-3 text-[14px] text-forest-deep bg-cream/40 focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-forest-deep mb-1.5">
              Company / Organisation
            </label>
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-forest/20 rounded-xl px-4 py-3 text-[14px] text-forest-deep bg-cream/40 focus:outline-none focus:border-gold"
            />
          </div>

          {status === "error" && (
            <p className="text-[13px] text-red-500">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-forest-deep text-white rounded-xl py-3.5 text-[14px] font-bold uppercase tracking-wider hover:bg-forest transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            <FileDown className="h-4 w-4 text-gold" />
            <span>{status === "submitting" ? "Preparing Dossier…" : "Download Brochure Now"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function DayDetailModal({
  dayIndex,
  onClose,
}: {
  dayIndex: number | null;
  onClose: () => void;
}) {
  if (!dayIndex) return null;

  const dayDetails: Record<
    number,
    {
      title: string;
      subtitle: string;
      faculty: string;
      venue: string;
      highlights: string[];
      img: string;
    }
  > = {
    1: {
      title: "DAY 01 — Arriving at Cambridge",
      subtitle: "Collegiate Arrival, Punting on the Cam & Strategic Charter",
      faculty: "Prof. Jaideep Prabhu & GEL Leadership Directorate",
      venue: "King's College & Trinity Backs, Cambridge",
      highlights: [
        "Arrival at historic Cambridge colleges and check-in to executive lodgings",
        "Executive cohort orientation and setting the confidential strategic charter",
        "Private punting on the River Cam through historic college backs and bridges",
        "Cambridge Welcome Banquet in the Fellow's Garden",
      ],
      img: cambridgeBridgeImg,
    },
    2: {
      title: "DAY 02 — Technology, Economics and Innovation",
      subtitle: "Frontier AI, Macroeconomic Shifts & Global Disruption",
      faculty: "Prof. Shasha Lu, Prof. Kamiar Mohaddes, Dr. Elizabeth Osta",
      venue: "Cambridge Judge Business School Lecture Chambers",
      highlights: [
        "Deciphering AI beyond the hype: Operational & Strategic deployment",
        "Macroeconomic turbulence, currency volatility and resilient strategy",
        "Interactive case simulation on digital transformation at scale",
        "Formal Hall Dinner discussion inside historic Cambridge college dining hall",
      ],
      img: guyDozaImg,
    },
    3: {
      title: "DAY 03 — Governance, Strategy and Brand",
      subtitle: "Boardroom Dynamics, Fiduciary Accountability & Brand Sovereignty",
      faculty: "Prof. Raghavendra Rau, Prof. Lionel Paolella, Prof. Eden Yin",
      venue: "Cambridge Judge Executive Boardroom",
      highlights: [
        "Modern corporate governance & boardroom decision frameworks",
        "Competitive strategy: Building long-term defensible enterprise moats",
        "Brand architecture, positioning and reputation in high-stakes markets",
        "Cohort breakout strategic challenge workshop addressing live peer problems",
      ],
      img: glipClassroomImg,
    },
    4: {
      title: "DAY 04 — Leadership at Lord's",
      subtitle: "Signature Off-Site Day at Lord's Cricket Ground, London",
      faculty: "Julian Metherell, Guy Doza, Lord Uday Nagaraju, Rt Hon Paul Scully",
      venue: "The Pavilion & Long Room, Lord's Cricket Ground, London",
      highlights: [
        "Private executive boardroom sessions inside Lord's Pavilion, London",
        "Leadership lessons from elite sport, high performance & pressure management",
        "Executive rhetoric, persuasion and influence language masterclass",
        "Tech governance & policy dialogue with UK parliamentarians and ministers",
      ],
      img: lordCricketImg,
    },
    5: {
      title: "DAY 05 — From Leadership to Global Opportunity",
      subtitle: "Frugal Innovation, Diplomatic Roundtable & Cambridge Graduation",
      faculty: "Prof. Jaideep Prabhu, Prof. Thomas Roulet, H.E. Kumaran Periasamy",
      venue: "Cambridge Judge Business School & Bilateral Chambers",
      highlights: [
        "Frugal Innovation: Multiplying enterprise impact with disciplined capital",
        "Executive wellbeing, mental stamina and enduring organizational health",
        "Special bilateral dialogue with H.E. Kumaran Periasamy, Indian High Commissioner to the UK",
        "Formal Cambridge graduation ceremony and conferral of CJBS Certificate",
      ],
      img: personHighCommImg,
    },
  };

  const current = dayDetails[dayIndex] || dayDetails[1];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-forest/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[21/9] bg-forest-deep">
          <img
            src={current.img}
            alt={current.title}
            className="w-full h-full object-cover opacity-65"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase bg-black/60 px-2.5 py-1 rounded">
              PROGRAMME CURRICULUM
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              {current.title}
            </h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div>
            <p className="text-base font-serif italic text-forest/85 font-medium">
              {current.subtitle}
            </p>
            <p className="text-xs font-bold text-gold-deep uppercase tracking-wider mt-1.5">
              Key Facilitators: {current.faculty}
            </p>
            <p className="text-xs text-forest/70 font-medium mt-0.5">Venue: {current.venue}</p>
          </div>

          <div className="space-y-3 pt-3 border-t border-forest/10">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-forest-deep">
              Day Highlights & Sessions
            </h4>
            <ul className="space-y-2.5">
              {current.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-forest/85">
                  <span className="h-2 w-2 rounded-full bg-gold-deep mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-forest/10 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-xl bg-forest-deep text-white px-7 py-2.5 text-sm font-semibold hover:bg-forest transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MomentModal({ moment, onClose }: { moment: any | null; onClose: () => void }) {
  if (!moment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-forest/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-forest-deep">
          <img src={moment.img} alt={moment.title} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-gold-deep uppercase bg-cream px-3 py-1 rounded-full">
            {moment.sub}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep leading-snug">
            {moment.title}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-forest/85 leading-relaxed">{moment.desc}</p>
          <div className="pt-4 border-t border-forest/10 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-xl bg-forest-deep text-white px-7 py-2.5 text-sm font-semibold hover:bg-forest transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FacultyModal({ faculty, onClose }: { faculty: any | null; onClose: () => void }) {
  if (!faculty) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-forest/10 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={faculty.img}
              alt={faculty.name}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover border border-forest/15 shadow"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest-deep">{faculty.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-gold-deep">{faculty.role}</p>
              <p className="text-xs sm:text-sm text-forest/70">{faculty.institution}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-forest-deep hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Academic & Leadership Profile
          </span>
          <p className="text-[14.5px] sm:text-[15.5px] text-forest/85 leading-relaxed">{faculty.bio}</p>
          
          {faculty.modalImg && (
            <div className="pt-2 pb-1">
              <img 
                src={faculty.modalImg} 
                alt={`${faculty.name} at GILP`}
                className="w-full h-[200px] sm:h-[260px] object-cover rounded-xl border border-stone-200/60 shadow-sm"
              />
            </div>
          )}

          <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-forest/10 mt-2">
            <span className="text-[11px] font-bold text-gold-deep uppercase tracking-wider block mb-1">
              Core Specialty & Sessions
            </span>
            <p className="text-[13px] sm:text-[14px] text-forest-deep font-medium">{faculty.expertise}</p>
          </div>
        </div>

        <div className="pt-2 border-t border-forest/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-forest-deep text-white px-7 py-2.5 text-sm font-semibold hover:bg-forest transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function TestimonialModal({
  testimonial,
  onClose,
}: {
  testimonial: any | null;
  onClose: () => void;
}) {
  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="h-16 w-16 sm:h-18 sm:w-18 rounded-full object-cover ring-2 ring-[#D4AF37]/35 shadow-md bg-stone-100 shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-900 tracking-tight leading-tight">
                {testimonial.name}
              </h3>
              <p className="text-[13px] sm:text-[14px] font-medium text-teal-800/90 mt-0.5">
                {testimonial.role}
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#D4AF37]/15 text-[#99730E] uppercase tracking-wider mt-1.5">
                {testimonial.cohort}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-gray-900 transition-colors cursor-pointer shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative bg-stone-50/90 rounded-2xl p-5 sm:p-6 border border-stone-200/60">
          <p className="text-[15px] sm:text-[16px] text-stone-800 font-normal leading-relaxed">
            “{testimonial.quote}”
          </p>
        </div>

        <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
          <div>
            {testimonial.linkedin && (
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0077B5] hover:underline"
              >
                View on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-[#0E1C12] text-white px-7 py-2.5 text-[14px] font-semibold hover:bg-forest transition-colors cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

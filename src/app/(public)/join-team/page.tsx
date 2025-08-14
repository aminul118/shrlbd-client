import JoinTeamForm from '@/components/modules/JoinTeam/JoinTeamForm';
import Container from '@/components/ui/Container';
import GrediantHeading from '@/components/ui/GrediantHeading';
import { Quote, Sparkles } from 'lucide-react';

const JoinTeamPage = () => {
  return (
    <Container className="max-w-3xl">
      <div className="space-y-10 py-8">
        <GrediantHeading heading="Join Team" />

        {/* Intro / Mission */}
        <section>
          <div className="max-w-3xl">
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <span className="font-medium">Smart Healthcare and Research Ltd (SHRL)</span> is
              dedicated to advancing health research and clinical services with a focus on maternal,
              child, and adolescent health.
            </p>
          </div>

          {/* Leadership messages */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Chairman */}
            <article className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-6 md:p-8 shadow-sm">
              <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                <Sparkles className="h-3.5 w-3.5" />
                Words from the Chairman
              </div>
              <blockquote className="mt-2">
                <Quote className="h-6 w-6 opacity-50" />
                <p className="mt-4 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  We are committed to delivering the highest standard of clinical care with empathy
                  and dedication. We have already pioneered a path towards patient empowerment for
                  the effective management of gestational diabetes (GDM). A key part of our mission
                  is to build research and innovation capacity to drive the development of a
                  healthier Bangladesh.
                </p>
              </blockquote>
            </article>

            {/* Managing Director */}
            <article className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-6 md:p-8 shadow-sm">
              <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
                <Sparkles className="h-3.5 w-3.5" />
                Words from the Managing Director
              </div>
              <blockquote className="mt-2">
                <Quote className="h-6 w-6 opacity-50" />
                <p className="mt-4 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  We aim to empower people and patients to be resilient in diverse and adverse
                  health situations. Our young professionals from different disciplines can use this
                  platform for scientific and other innovations. Channeling innovations through
                  advocacy, marketing, and collaboration is one of our core operating strategies.
                </p>
              </blockquote>
            </article>
          </div>

          {/* Call to action */}
          <div className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 bg-zinc-50/60 dark:bg-zinc-900/40">
            <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
              To achieve our goals, we welcome the amalgamation of brilliant and empathetic minds
              from across society. Please fill out the form to join our team!
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Your answers will be reviewed and, if shortlisted, you will be called for an
              interview.
            </p>
            <div className="mt-6">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition"
              >
                Proceed to Application
              </a>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="scroll-mt-24 mt-24">
          <JoinTeamForm />
        </section>
      </div>
    </Container>
  );
};

export default JoinTeamPage;

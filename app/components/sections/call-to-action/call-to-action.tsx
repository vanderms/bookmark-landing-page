import { CallToActionForm } from "~/components/form/call-to-action/call-to-action-form";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="mt-[7.6875rem] p-container bg-blue py-[3.75rem] ">
      <div className="max-w-[27.625rem] mx-auto">
        <header className="text-white text-center">
          <p className="font-sans font-medium [font-size:0.75rem] [line-height:2.5rem] tracking-wide ">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="font-sans font-medium [font-size:1.5rem] [line-height:1.75rem]">
            Stay up-to-date with what we're doing
          </h2>
        </header>
        <div className="mt-8">
          <CallToActionForm />
        </div>
      </div>
    </section>
  );
};

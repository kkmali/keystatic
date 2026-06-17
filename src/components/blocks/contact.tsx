import { Facebook, Linkedin, Twitter } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const defaultOfficeAddress = {
  line1: "1 Carlsberg Close",
  line2: "1260 Hillview, Australia",
};

const defaultEmails = [
  { label: "Careers", email: "careers@streamline.com" },
  { label: "Press", email: "press@streamline.com" },
];

const defaultSocials = [
  { platform: "facebook", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "linkedin", href: "#" },
];

export const Contact = ({
  title = "Contact us",
  description = "Hopefully this form gets through our spam filters.",
  officeTitle = "Corporate office",
  officeAddress = defaultOfficeAddress,
  emailTitle = "Email us",
  emails = defaultEmails,
  socialTitle = "Follow us",
  socials = defaultSocials,
}: {
  title?: string;
  description?: string;
  officeTitle?: string;
  officeAddress?: { line1: string; line2: string };
  emailTitle?: string;
  emails?: Array<{ label: string; email: string }>;
  socialTitle?: string;
  socials?: Array<{ platform: string; href: string }>;
}) => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          {description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-14 lg:mt-20 lg:gap-12 text-start">
          <div>
            <h2 className="font-medium">{officeTitle}</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              {officeAddress.line1}
              <br />
              {officeAddress.line2}
            </p>
          </div>

          <div>
            <h2 className="font-medium">{emailTitle}</h2>
            <div className="mt-3">
              {emails.map((item, index) => (
                <div key={index} className={index > 0 ? "mt-2" : ""}>
                  <p className="font-medium text-sm">{item.label}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium">{socialTitle}</h2>
            <div className="mt-3 flex gap-6 lg:gap-10">
              {socials.map((soc) => {
                let Icon = null;
                const platform = soc.platform.toLowerCase();
                if (platform === "facebook") Icon = Facebook;
                else if (platform === "twitter") Icon = Twitter;
                else if (platform === "linkedin") Icon = Linkedin;

                return Icon ? (
                  <a
                    key={soc.platform}
                    href={soc.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto text-start">
          <h2 className="text-lg font-semibold">Inquiries</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Full name</Label>
              <Input placeholder="First and last name" />
            </div>
            <div className="space-y-2">
              <Label>Work email address</Label>
              <Input placeholder="me@company.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>
                Company name{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label>
                Number of employees{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="e.g. 10-50" />
            </div>
            <div className="space-y-2">
              <Label>Your message</Label>
              <Textarea
                placeholder="Write your message"
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


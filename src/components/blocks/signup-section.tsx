import React from "react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";

const SignupSection = ({
  title = "Start your free trial",
  subtitle = "Sign up in less than 2 minutes.",
  buttonLabel = "Create an account",
  googleButtonLabel = "Sign up with Google",
  loginLabel = "Already have an account?",
  loginLink = "/login",
  loginText = "Log in",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  googleButtonLabel?: string;
  loginLabel?: string;
  loginLink?: string;
  loginText?: string;
}) => {
  return (
    <section className="py-28 lg:pt-44 lg:pb-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0 text-center">
              <img
                src="/logo.svg"
                alt="logo"
                width={94}
                height={18}
                className="mb-7 dark:invert"
              />
              <p className="mb-2 text-2xl font-bold">{title}</p>
              <p className="text-muted-foreground">
                {subtitle}
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 text-start">
                <Input type="text" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <p className="text-muted-foreground mt-1 text-sm">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  {buttonLabel}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleButtonLabel}
                </Button>
              </div>
              <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>{loginLabel}</p>
                <a href={loginLink} className="text-primary font-medium">
                  {loginText}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;


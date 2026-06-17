import React from "react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const LoginSection = ({
  title = "Welcome back",
  subtitle = "Please enter your details.",
  buttonLabel = "Sign in",
  googleButtonLabel = "Sign in with Google",
  signupLabel = "Don't have an account?",
  signupLink = "/signup",
  signupText = "Sign up",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  googleButtonLabel?: string;
  signupLabel?: string;
  signupLink?: string;
  signupText?: string;
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
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-primary text-sm font-medium">
                    Forgot password
                  </a>
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
                <p>{signupLabel}</p>
                <a href={signupLink} className="text-primary font-medium">
                  {signupText}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;


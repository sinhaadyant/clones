"use client";
import { UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButton
          mode="modal"
          signUpForceRedirectUrl={"/"}
          signUpFallbackRedirectUrl={"/"}
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 border-blue-300 rounded-full hover:bg-blue-50 hover:border-blue-400 transition-colors"
          >
            <UserCircleIcon className="size-5" />
            <span>Sign in</span>
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default AuthButton;

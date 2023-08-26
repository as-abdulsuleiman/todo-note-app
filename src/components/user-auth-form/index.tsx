/** @format */

"use client";

import { FC, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "../icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: `${window.location.origin}/` });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div {...props} className={cn("flex justify-center", className)}>
      <Button
        size="sm"
        className="w-full"
        type="button"
        isLoading={loading}
        disabled={loading}
        onClick={loginWithGoogle}
      >
        {loading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;

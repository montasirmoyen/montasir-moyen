import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { InboxIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("gap-5 flex", className)}>
      <Link href="mailto:montasirmoyen@gmail.com">
        <InboxIcon className={cn("transition size-6", iconClassName)} />
      </Link>
      <Link href="https://www.linkedin.com/in/montasirmoyen/" target="_blank">
        <FaLinkedin className={cn("transition size-6", iconClassName)} />
      </Link>
      <Link href="https://www.github.com/montasirmoyen/" target="_blank">
        <FaGithub className={cn("transition size-6", iconClassName)} />
      </Link>
    </div>
  );
}

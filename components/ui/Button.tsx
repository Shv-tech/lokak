import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "filled" | "outline";

type ButtonLinkProps = {
  as?: "a";
  href: string;
  
  variant?: Variant;
  
  ["data-variant"]?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonButtonProps = {
  as: "button";
  
  variant?: Variant;
  
  ["data-variant"]?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonLinkProps | ButtonButtonProps;

export default function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95";
  const filled = "bg-white text-black hover:bg-neutral-100";
  const outline = "border border-white/30 hover:bg-white hover:text-black hover:border-white/50";

  const chosenVariant: Variant =
    (("variant" in props && props.variant) ||
      (props as any)["data-variant"] ||
      "filled") as Variant;

  const className =
    (("className" in props && props.className) ? props.className + " " : "") +
    base +
    " " +
    (chosenVariant === "outline" ? outline : filled);

  if ("as" in props && props.as === "button") {
    
    const { as, variant, ["data-variant"]: _dv, className: _c, ...rest } =
      props as ButtonButtonProps & Record<string, unknown>;
    return <button {...rest} className={className} />;
  }

  const { href, variant, ["data-variant"]: _dv2, className: _c2, ...rest } =
    props as ButtonLinkProps & Record<string, unknown>;
  return (
    <Link href={href} {...(rest as any)} className={className} />
  );
}


import type { MDXComponents } from "mdx/types";

function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className="underline decoration-violet-400/60 hover:decoration-violet-400" />;
}

function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return <pre {...props} className={`not-prose ${props.className || ""}`} />;
}

function Code(props: React.HTMLAttributes<HTMLElement>) {
  return <code {...props} />;
}

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props} className={`scroll-mt-24 ${props.className || ""}`} />;
}
function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className={`scroll-mt-24 ${props.className || ""}`} />;
}

const MDXComponents: MDXComponents = {
  a: A,
  pre: Pre,
  code: Code,
  h2: H2,
  h3: H3,
};

export default MDXComponents;

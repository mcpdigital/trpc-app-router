import React from "react";

// This code snippet defines a functional component called FeatureCards in React. It takes in props href, h2, and p.

// The component renders an anchor tag (<a>) with various CSS classes and attributes. Inside the anchor tag, there is an <h2> element with a span element nested inside it. Finally, there is a <p> element.

// The component is designed to display a card-like UI with a title (h2), a description (p), and a link (href). When hovering over the card, the border and background color change, along with a slight shift in the arrow icon. The link opens in a new tab.
type FeatureCardsProps = {
  href: string;
  h2: string;
  p: string;
};

const FeatureCards: React.FC<FeatureCardsProps> = ({ href, h2, p }) => (
  <a
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-3 text-2xl font-semibold text-center">
      {h2}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50 sm:text-center">{p}</p>
  </a>
);

export default FeatureCards;

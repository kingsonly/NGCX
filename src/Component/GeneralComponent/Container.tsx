import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className="mx-5 sm:mx-10 md:mx-14 lg:px-16 xl:px-20 2xl:m-auto 2xl:max-w-screen-2xl">
    {children}
  </div>
);

export default Container;

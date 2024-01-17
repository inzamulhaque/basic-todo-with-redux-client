import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="min-h-screen h-full w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;

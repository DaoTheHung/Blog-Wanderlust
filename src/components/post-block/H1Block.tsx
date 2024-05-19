type TextBlockProps = {
    children: React.ReactNode;
  };
  
  export const H1Block = ({ children }: TextBlockProps) => {
    //   console.log("data",children);
  
    return (
      <h1 className="text-darkBlue mt-2  font-semibold text-[32px] ">
        {children}
      </h1>
    );
  };
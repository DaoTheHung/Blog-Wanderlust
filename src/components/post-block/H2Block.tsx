type TextBlockProps = {
    children: React.ReactNode;
  };
  
  export const H2Block = ({ children }: TextBlockProps) => {
    //   console.log("data",children);
  
    return (
      <h1 className="text-darkBlue mt-2  font-medium text-[24px] ">
        {children}
      </h1>
    );
  };
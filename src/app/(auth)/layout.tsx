const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col max-w-5xl lg:flex-row-reverse lg:items-center lg:gap-5 lg:w-full">
      {children}
    </div>
  );
};

export default AuthLayout;

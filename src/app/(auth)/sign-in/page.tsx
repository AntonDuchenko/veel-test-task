import { AuthHead, SignInForm, Title } from "@/components/shared";

const SignIn = () => {
  return (
    <>
      <AuthHead />
      <div className="flex flex-col items-center m-auto">
        <Title title="Welcome Back!" type="2xl" className="mb-[10px]" />
        <p className="text-xs	text-neutral-body mb-6">
          We can assign tasks, set deadlines, and track progress effortlessly.
        </p>

        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;

import { AuthHead, SignUpForm, Title } from "@/components/shared";

const SignUp = () => {
  return (
    <>
      <AuthHead />
      <div className="flex flex-col items-center m-auto">
        <Title title="Register Here" type="2xl" className="mb-[10px]" />
        <p className="text-xs	text-neutral-body mb-6">
          We can assign tasks, set deadlines, and track progress effortlessly.
        </p>

        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;

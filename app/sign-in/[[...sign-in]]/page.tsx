import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center my-5 py-24">
      <SignIn />
    </div>
  );
}
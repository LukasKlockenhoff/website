import TextStyles from "@/utils/textstyles";

export default async function About() {
  return (
    <div className={"w-full h-full flex justify-center dark:bg-background bg-white"}>
      <h1 className={TextStyles.H3}>About</h1>
    </div>
  );
}
